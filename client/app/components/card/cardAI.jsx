import { GiArtificialIntelligence } from "react-icons/gi";

const CardAI = () => {
  return (
    <div className="bg-white shadow-lg w-1/3 border rounded-lg mt-5 flex flex-col p-5 space-y-3 cursor-pointer hover:bg-neutral-100">
      <div className="flex items-center space-x-2">
        <GiArtificialIntelligence size={28} />
        <span className="text-xl font-semibold ">Советы от ИИ</span>
      </div>
      <div className="">
        <span className="text-xl font-bold text-[#78b94d]">Несколько</span>
        <p className="text-sm mt-3">Можете посмотреть в кладке "ИИ помощник"</p>
      </div>
    </div>
  ) 
}

export default CardAI