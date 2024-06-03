import Hero2 from "./Hero2";

const Phones = () => {
	return (
		<>
			<div className="relative">
				<div className="relative z-10 -translate-y-28 h-full w-full">
					<img
						src="/assets/images/iphone1.png"
						alt="Phones"
						className="phone1 absolute translate-x-32 translate-y-20"
					/>
					<img
						src="/assets/images/iphone2.png"
						alt="Phones"
						className="phone2 absolute translate-x-0 translate-y-0"
					/>
					<img
						src="/assets/images/iphone3.png"
						alt="Phones"
						className="phone3 absolute -translate-x-32 -translate-y-20"
					/>
				</div>
				<div className="relative z-0 translate-y-[40%] translate-x-32">
					<img
						src="/assets/images/Ellipse.png"
						alt="Phones"
						className="absolute -translate-x-10 translate-y-10"
					/>
					<img
						src="/assets/images/Ellipse.png"
						alt="Phones"
						className="absolute translate-x-0 -translate-y-0"
					/>
					<img
						src="/.src/assets/images/Ellipse.png"
						alt="Phones"
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
