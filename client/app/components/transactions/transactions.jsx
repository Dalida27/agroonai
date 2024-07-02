const Transactions = () => {
  return (
    <div className="bg-white shadow-lg p-5 border rounded-lg">
      <p className="mb-5 text-xl font-semibold text-[#78b94d]">Последние Заказы</p>
      <table className="w-full border-collapse">
        <thead className="w-full">
          <tr className="border-b">
            <td className="px-4 py-2 text-left text-lg font-semibold">Имя</td>
            <td className="px-4 py-2 text-left text-lg font-semibold">Дата</td>
            <td className="px-4 py-2 text-left text-lg font-semibold">Продукт</td>
            <td className="px-4 py-2 text-left text-lg font-semibold">Вес/кг</td>
            <td className="px-4 py-2 text-left text-lg font-semibold">Цена/тг</td>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2">Асан Далида</td>
            <td className="px-4 py-2">23.06.2024</td>
            <td className="px-4 py-2">Огурцы</td>
            <td className="px-4 py-2">20кг</td>
            <td className="px-4 py-2">15000тг</td>
          </tr>
        </tbody>
      </table>
    </div>

  )
}

export default Transactions