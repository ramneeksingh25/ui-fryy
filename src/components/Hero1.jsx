import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero1 = () => {
	var t1 = new gsap.timeline();
	useGSAP(()=>{
	t1.from(".hero1,.hero2",{
      x:-30,
      duration:10,
      delay:0.5,
      stagger:0.1,
	  yoyo:true,
	  repeat:-1
    })
	})
	return (
		<div style={{backgroundColor:"blue"}}>
			<div className="hero1 absolute right-[47%] top-[-20%] z-[-10] translate-x-[50%] blur-[39px]">
				<div className=" rounded-[50%] bg-[#FF5555] h-36 w-72 "></div>
			</div>
			<div className="hero2 absolute right-[56%] top-[7%] z-[-20] translate-x-[50%] blur-2xl">
				<div className=" rounded-[50%] bg-[#FDE598] h-36 w-72 "></div>
			</div>
		</div>
	);
};

export default Hero1;
