const Banner = () => {
	return (
		<div className="relative bottom-0 right-0 h-full">
			<div className="absolute left-[10%] top-[40%] text-nowrap font-fgb text-[1vw]">
				<div className="absolute px-7 py-3 border border-white rounded-[8px] bg-black text-white rounded-8 origin-right rotate-[22deg] z-[90]">
					Most Popular Accounting App
				</div>
				<div className="absolute px-7 py-3 border border-white rounded-[8px] bg-[#000000] text-white rounded-8 rotate-[32deg] origin-bottom-left z-[100]">
					make the best financial decisions
				</div>
				<div className="absolute px-7 py-3 border border-white rounded-[8px] bg-[#FF5555] rounded-8 origin-right rotate-0 z-[101]">
					Best Finance App On Playstore
				</div>
			</div>
		</div>
	);
};

export default Banner;
