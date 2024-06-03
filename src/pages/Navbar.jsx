import { useState } from "react"

const Navbar = () => {
  const menuItems= ["Home","About Us","Pricing","Features"]
  const [selected,setSelected]=useState(0);
  return (
    <div className=" h-20 w-full flex justify-between items-center font-fgm tracking-wide text-lg ">
        <div className="flex justify-between items-center">
          <img src="./src/assets/images/Logo.png" alt="LOGO" />
          <div className="flex">
            {menuItems.map((item,i)=>{
              return <div key={i} className={` cursor-pointer ml-16  whitespace-nowrap ${i==selected&&" text-[#FF5555] font-fgb text-xl"}`}
              onClick={()=>{
                setSelected(i)
              }}
              >{item}</div>
            })}
          </div>
        </div>
        <div className="relative">
          <div className="py-[1vw] px-[1vw] text-[1.5vw] bg-black text-white flex items-center justify-center font-semibold cursor-pointer hover:scale-[102%] transition duration-100 ease-in hover:bg-slate-900 rounded-xl">
            Download
          </div>
        </div>
    </div>
  )
}
export default Navbar