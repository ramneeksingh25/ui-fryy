import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react"

const Navbar = () => {
  var t1 = new gsap.timeline();
	useGSAP(()=>{
		t1.from(".nav .menu",{
      y:-30,
      opacity:0,
      duration:1,
      delay:0.5,
      stagger:0.1
    })
	})
  useEffect(()=>{
    t1.play();
  },[])
  const menuItems= ["Home","About Us","Pricing","Features"]
  const [selected,setSelected]=useState(0);
  return (
    <div className="nav h-20 w-full flex justify-between items-center font-fgm tracking-wide text-lg ">
        <div className="logo flex justify-between items-center">
          <img src="./src/assets/images/Logo.png" alt="LOGO" />
          <div className="flex nav">
            {menuItems.map((item,i)=>{
              return <div key={i} className={`menu cursor-pointer ml-16  whitespace-nowrap ${i==selected&&" text-[#FF5555] font-fgb text-xl"}`}
              onClick={()=>{
                setSelected(i)
              }}
              >{item}</div>
            })}
          </div>
        </div>
        <div className="relative">
          <div className="button py-[1vw] px-[1vw] text-[1.5vw] bg-black text-white flex items-center justify-center font-semibold cursor-pointer hover:scale-[102%] transition duration-100 ease-in hover:bg-slate-900 rounded-xl">
            Download
          </div>
        </div>
    </div>
  )
}
export default Navbar