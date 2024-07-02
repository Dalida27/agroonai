const SingleProductPage = () => {
  return (
    <div className="mt-10 bg-neutral-300 p-7 border rounded-lg">
      <p className="text-xl text-gray-500">Страница продукта</p>
      <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Название продукта</label>
          <input
            type="text"
            name="title"
            placeholder="Клубника"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Категория</label>
          <input
            type="text"
            name="title"
            placeholder="Ягода"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Сорт</label>
          <input
            type="text"
            name="sort"
            placeholder="Черный принц"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Цена за кг (в тг)</label>
          <input
            type="number"
            name="price"
            placeholder="2000"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Объем в кг</label>
          <input
            type="number"
            name="stock"
            placeholder="100"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Описание</label>
          <input
            type="text"
            name="description"
            placeholder="Сладкая, поспевает к июню, хороший сбор и продажа"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Подпитка</label>
          <input
            type="text"
            name="fertilizer"
            placeholder="Фосфорит"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="text-right">
          <button type="submit" className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Обновить
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default SingleProductPage;