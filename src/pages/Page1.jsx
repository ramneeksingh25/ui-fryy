import { useGSAP } from "@gsap/react";
import Banner from "../components/Banner";
import Hero1 from "../components/Hero1";
import Phones from "../components/Phones";
import gsap from "gsap";


const Page1 = () => {
	var t2 = new gsap.timeline();
	useGSAP(()=>{
		t2.from(".left",{
			x:-30,
			opacity:0,
            duration:1,
            delay:0.5,
            stagger:0.1
		})
		t2.from(".right",{
			y:-30,
			opacity:0,
            duration:1,
            delay:0.5,
            stagger:0.1
		})
		t2.from(".star",{
			opacity:0,
			scale:0.2,
            duration:1,
            delay:0.5,
            stagger:0.1
		})
	})
	return (
		<>
			<div className="absolute top-[9%] right-[5%] ">
				<img
					src="/assets/images/Star 1.png"
					alt="Star"
					className="w-[5vw] star"
				/>
			</div>
			<div className="absolute top-[19%] left-[5%] ">
				<img
					src="/assets/images/Star 1.png"
					alt="Star"
					className="w-[3vw] star"
					style={{ rotate: "50deg" }}
				/>
			</div>
			<div className="grid grid-cols-2 gap-2 pt-[10%]">
				<div className="grid grid-rows-2 ">
					<div className="left relative">
						<Hero1 />
						<div className="text-7xl font-fgb z-[10]">
							<h1>Make The Best</h1>
							<h1>Financial Decisions</h1>
						</div>
						<p className=" text-slate-500 py-[3%] w-[76%] font-fgl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
							earum, qui unde mollitia magnam, officia, nisi minus delectus
							rerum est consequuntur
						</p>
						<div className="grid grid-cols-2 w-fit text-xl gap-4">
							<div className="bg-black text-white flex items-center justify-center py-3 text-nowrap p-10">
								Get Started
							</div>
							<div className="flex items-center justify-center text-nowrap">
								Watch Video
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="absolute top-[25%] left-[0%] z-[10]">
							<img
								src="/assets/images/Star 1.png"
								alt="Star"
								className="w-[3vw] star"
								style={{ rotate: "50deg" }}
							/>
						</div>
						{/* <BannerPg1 /> */}
						<Banner/>
					</div>
				</div>
				<div className="h-full right">
					<Phones/>
				</div>
			</div>
		</>
	);
};

export default Page1;
