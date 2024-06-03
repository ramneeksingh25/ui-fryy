import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

const Banner = () => {
    var bannerAnim = gsap.timeline();
    useGSAP(()=>{
        bannerAnim.from(".main",{
            y:-30,
            opacity:0,
            duration:1,
            delay:0.5,
            stagger:0.1
        })
        bannerAnim.from(".first",{
            rotate:0,
            duration:1,
            delay:0.5,
            stagger:0.1
        })
        bannerAnim.from(".second",{
            rotate:0,
            duration:1,
            delay:0.5,
            stagger:0.1
        })
    })
	return (
		<div className="relative bottom-0 right-0 h-full">
			<div className="absolute left-[10%] top-[40%] text-nowrap font-fgb text-[1vw]">
				<div className="second absolute px-7 py-3 border border-white rounded-[8px] bg-black text-white rounded-8 origin-right rotate-[22deg] z-[90]">
					Most Popular Accounting App
				</div>
				<div className="first absolute px-7 py-3 border border-white rounded-[8px] bg-[#000000] text-white rounded-8 rotate-[32deg] origin-bottom-left z-[100]">
					make the best financial decisions
				</div>
				<div className="main absolute px-7 py-3 border border-white rounded-[8px] bg-[#FF5555] rounded-8 origin-right rotate-0 z-[101]">
					Best Finance App On Playstore
				</div>
			</div>
		</div>
	);
};

export default Banner;
