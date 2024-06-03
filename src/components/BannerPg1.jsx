const BannerPg1 = () => {
	return (
		<div className=" -translate-x-5 -translate-y-20">
		<div className="rotate-[-28deg] origin-right font-fgb flex items-center bg-black text-white gap-[3vw] h-[4vw] relative text-[1vw] pr-[5vw] pl-[0.2vw] translate-y-full rounded-[8px] z-30">
			<h1 className="text-[6vw] text-black absolute -translate-x-[62%] -translate-y-[5%]">
				A
			</h1>
			<div className="flex ">
				<img
					src="src/assets/images/Trophy.png"
					alt=""
					className="rotate-[25deg] h-[3vw]"
				/>
				<div className="flex flex-col">
					Achievements
					<span className="font-fgl text-nowrap">
						Best Finance App On Playstore
					</span>
				</div>
			</div>
			<div className="flex ">
				<img
					src="src/assets/images/Finance Logo.png"
					alt=""
					className="rotate-[28deg] h-[3vw] "
				/>
				<div className="flex flex-col">
					Finance
					<span className="font-fgl text-nowrap">
						Most Popular Accounting App
					</span>
				</div>
			</div>
		</div>
		<div className="rotate-[-45.74deg] origin-right font-fgb bg-[#FF5555] h-[4vw] relative text-[1vw] -translate-x-2 rounded-[8px] flex items-center justify-center">
			<p>make the best financial decisions</p>	
		</div>
		</div>
	);
};

export default BannerPg1;
