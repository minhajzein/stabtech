import React from "react";

//============================================================================

function WhyReboot() {
	return (
		<div className="grid bg-[#121212] md:grid-cols-2 grid-cols-1 w-full lg:p-10 p-3 gap-3 md:gap-0">
			<div className="md:hidden w-full h-auto">
				<img className="object-contain h-full" src="/why-choose.png" alt="" />
			</div>
			<div className="flex flex-col md:justify-start justify-center items-center gap-2">
				<h1 className="text-white md:text-[48px] font-bold text-3xl text-center md:text-left">
					Why Choose Reboot Monkey?
				</h1>
				<p className="text-white md:text-left md:text-[24px] text-center text-sm">
					Working with hardware is what we do best. And what we love most. Ever since
					1996, we started and sold multiple IT companies and helped a lot of other
					startups and enterprises flourish. Now, over almost three decades later,
					we’ve combined our knowledge and experience to lift your data center
					burden.
				</p>
				<div className="w-full flex md:items-start flex-col justify-center items-center gap-2 md:gap-3">
					<div className="w-[80%] bg-[#F0DE00] bg-opacity-30 flex items-center gap-2 md:gap-5 rounded p-2 md:p-4">
						<img src="/integrity& ethics.png" alt="" />
						<p className="text-white">One partner for all your data center needs</p>
					</div>
					<div className="w-[80%] bg-[#F0DE00] bg-opacity-30 flex items-center gap-2 md:gap-5 rounded p-2 md:p-4">
						<img src="/monitoring-yellow.png" alt="" />
						<p className="text-white">
							Fast, accurate, reliable and passionate technicians
						</p>
					</div>
					<div className="w-[80%] bg-[#F0DE00] bg-opacity-30 flex items-center gap-2 md:gap-5 rounded p-2 md:p-4">
						<img src="/it-expert.png" alt="" />
						<p className="text-white">Full supply chain service from A to Z</p>
					</div>
					<div className="w-[80%] bg-[#F0DE00] bg-opacity-30 flex items-center gap-2 md:gap-5 rounded p-2 md:p-4">
						<img src="/certified-support.png" alt="" />
						<p className="text-white">
							Team of professionals with passion for IT & Hardware
						</p>
					</div>
					<div className="w-[80%] bg-[#F0DE00] bg-opacity-30 flex items-center gap-2 md:gap-5 rounded p-2 md:p-4">
						<img src="/services.png" alt="" />
						<p className="text-white">Wide range of products, services and support</p>
					</div>
				</div>
			</div>
			<div className="md:block hidden w-full h-auto">
				<img className="object-contain h-full" src="/why-choose.png" alt="" />
			</div>
		</div>
	);
}

export default WhyReboot;
