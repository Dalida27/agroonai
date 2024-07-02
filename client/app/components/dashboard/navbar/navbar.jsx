'use client'

import { usePathname } from "next/navigation"
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {

  const pathname = usePathname()

  return (
    <div className="flex justify-between items-center p-5 border rounded-lg bg-[#78b94d] text-white">
      <div className="font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center space-x-7">
        <div className="flex items-center space-x-5 text-white" >
          <button>Рус</button>
          <button>Каз</button>
          <button><FaMoon size={22} /></button>
          <button><FaSun size={24}/></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar