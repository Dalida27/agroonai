"use client";

import { useState, useEffect } from "react";
import axios from "../../utils/axiosInstance";

const AiPage = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get("/products/recommedations");
        setRecommendations(response.data);
      } catch (error) {
        console.error("Ошибка при получении рекомендаций:", error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="w-full">
      <div className="mt-10 p-5 border rounded-xl shadow-lg">
        <div className="mb-5">
          <p className="text-xl font-semibold">
            Советы от вашего личного помощника
          </p>
        </div>
        <div>
          <p>
            У вас несколько рекомендаций по ценообразованию на ваши продукты
          </p>
          <div className="flex items-center justify-between mt-3">
            <p>Название продукта</p>
            <p>Текущая цена</p>
            <p>Рекомендованная от ИИ</p>
          </div>
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-center justify-between mt-3">
              <p>{rec.title}</p>
              <p>{rec.currentPrice}</p>
              <p>{rec.recommendedPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiPage;
