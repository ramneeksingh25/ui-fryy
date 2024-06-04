import { useGSAP } from "@gsap/react";
import Hero2 from "./Hero2";
import gsap from "gsap";
import { useEffect } from "react";
const Phones = () => {
	var t1 = new gsap.timeline();
	useGSAP(()=>{
	t1.from(".phone",{
      y:30,
      duration:1,
      delay:5,
      stagger:0.1
    })
	})
	useEffect(()=>{
		t1.play()
	},[])
	return (
		<>
			<div className="relative">
				<div className="relative z-10 -translate-y-28 h-full w-full">
					<img
						src="/assets/images/iphone3.png"
						alt="Phones1"
						className="phone phone3 absolute translate-x-32 translate-y-20"
					/>
					<img
						src="/assets/images/iphone2.png"
						alt="Phones2"
						className="phone phone2 absolute translate-x-0 translate-y-0"
					/>
					<img
						src="/assets/images/iphone1.png"
						alt="Phones3"
						className="phone phone1 absolute -translate-x-32 -translate-y-20"
					/>
				</div>
				<div className="relative z-0 translate-y-[40%] translate-x-32">
					<img
						src="/assets/images/Ellipse.png"
						alt="Ellipse1"
						className="absolute -translate-x-10 translate-y-10"
					/>
					<img
						src="/assets/images/Ellipse.png"
						alt="Ellipse2"
						className="absolute translate-x-0 -translate-y-0"
					/>
					<img
						src="/assets/images/Ellipse.png"
						alt="Ellipse3"
						className="absolute translate-x-10 -translate-y-10"
					/>
				</div>
			</div>
			<div className="absolute w-[35vw] h-[33vw]">
				<div className="absolute bottom-0 right-0 z-[10]">
					<img
						src="/assets/images/Star 1.png"
						alt="Star"
						className="w-[3vw]"
						style={{ rotate: "50deg" }}
					/>
				</div>
				<div className="absolute bottom-0 -translate-y-full z-[10]">
					<img
						src="/assets/images/Star 1.png"
						alt="Star"
						className="w-[3vw]"
						style={{ rotate: "50deg" }}
					/>
				</div>
				<Hero2 />
			</div>
		</>
	);
};

export default Phones;
