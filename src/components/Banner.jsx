import React from "react";

function Banner() {
	return (
		<div className="w-full bg-[#F0DE00] grid grid-cols-1 lg:grid-cols-2 py-14 px-10 gap-12 md:gap-16">
			<div className="flex flex-col items-center lg:items-start gap-4 lg:gap-12">
				<h1 className="lg:text-5xl text-xl  text-center lg:text-left font-extrabold">
					Providing Complete <br />
					IT Solutions, Globally
				</h1>
				<p className="lg:text-2xl text-xs text-center lg:text-left">
					Reboot Monkey covers the full lifecycle of technology solutions and works
					across various ITdisciplines toadvance digital business globally to manage
					and simplify technology.
				</p>
				<button className="w-[75%] shadow-2xl shadow-black bg-black rounded-lg mt-4 py-4 text-[#F0DE00] lg:text-3xl font-bold">
					Get A Quote
				</button>
			</div>
			<div className="flex justify-center items-center hover:scale-105 duration-300">
				<img className="w-full h-auto" src="/banner.png" alt="" />
			</div>
		</div>
	);
}

export default Banner;
