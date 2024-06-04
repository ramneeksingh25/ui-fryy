import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero2 = () => {
	var t1 = new gsap.timeline();
	useGSAP(() => {
		t1.from(".hero", {
			y: -30,
			opacity: 0,
			duration: 3,
			delay: 5,
			stagger: 0.1,
			repeat: -1,
			yoyo:true
		});
	});
	return (
		<div style={{ backgroundColor: "blue" }}>
			<div className="hero absolute right-[67%] bottom-0 z-[-10] translate-x-[50%] blur-[39px]">
				<div className=" rounded-[50%] bg-[#FF5555] h-72 w-72 "></div>
			</div>
		</div>
	);
};

export default Hero2;
