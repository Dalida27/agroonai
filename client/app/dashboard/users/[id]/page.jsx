const SingleUserPage = () => {
  return (
    <div className="mt-10 bg-neutral-300 p-7 border rounded-lg">
      <p className="text-xl text-gray-500">Личная страница клиента</p>
      <div className="max-w-xl mx-auto mt-7 p-8 rounded-lg bg-white shadow-mg">
      <form className="space-y-4">
        <div>
          <label className="block text-sm fo вnt-medium text-gray-700">ФИО</label>
          <input
            type="text"
            name="name"
            placeholder="Самат Садвакасов"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Почта(необязательно)</label>
          <input
            type="text"
            name="email"
            placeholder="samat@gmail.com"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Номер телефона</label>
          <input
            type="text"
            name="number"
            placeholder="+7(777)777-77-77"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Заказ</label>
          <input
            type="text"
            name="order"
            placeholder="5кг клубники Черный принц"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Заказывал до этого?(необязательно)</label>
          <input
            type="text"
            name="repeat"
            placeholder="Да/Нет"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Дополнительная информация(необязательно)</label>
          <input
            type="text"
            name="info"
            placeholder="Адрес, заказ должен быть готов через неделю"
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

export default SingleUserPage;