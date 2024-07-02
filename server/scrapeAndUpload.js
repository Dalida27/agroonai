const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const cheerio = require("cheerio");
require('dotenv').config();
const { Pinecone } = require('@pinecone-database/pinecone');
const OpenAIApi = require("openai");

const scrapeData = async () => {
  try {
    const res = await fetch("https://www.olx.kz/dom-i-sad/produkty-pitaniya-napitki/q-помидоры/");
    const data = await res.text();
    const $ = cheerio.load(data);

    const scrapedData = [];
    const cards = $("div.listing-grid-container.css-d4ctjd")
      .find('div[data-testid="listing-grid"]')
      .children();

    cards.each((i, element) => {
      const title = $(element).find("h6").text();
      const price = $(element).find('p[data-testid="ad-price"]').text();
      if (title && price) {
        scrapedData.push({ title, price });
      }
    });

    console.log(`Парсинг завершен. Найдено элементов: ${scrapedData.length}`);
    return scrapedData;
  } catch (error) {
    console.error("Ошибка при парсинге данных:", error);
    return [];
  }
};



async function getEmbeddings(data) {
  const openai = new OpenAIApi({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const embeddings = [];
  for (const item of data) {
    const response = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: `${item.title} ${item.price}`,
    });
    embeddings.push(response.data[0].embedding);
  }

  return embeddings;
}

async function uploadToPinecone(data) {
  try {
    if (data.length === 0) {
      console.log('Нет данных для загрузки в Pinecone.');
      return;
    }

    console.log('Начало загрузки данных в Pinecone...');
    const pc = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });

    const indexName = process.env.PINECONE_INDEX_NAME;
    const index = pc.index(indexName);

    const dataEmbeddings = await getEmbeddings(data);

    const timestamp = new Date().toISOString();

    const dataVectors = dataEmbeddings.map((embedding, i) => ({
      id: `item_${i}_${timestamp}`,
      values: embedding,
      metadata: {
        text: `${data[i].title} ${data[i].price}`,
      }
    }));

    await index.upsert(dataVectors);

    console.log('Данные успешно загружены в Pinecone.');
  } catch (error) {
    console.error('Ошибка при загрузке данных в Pinecone:', error);
  }
}

async function main() {
  const scrapedData = await scrapeData();
  await uploadToPinecone(scrapedData);
}

module.exports = main;
