import React from "react";

function Moto() {
	return (
		<div className="bg-[#121212] w-full ">
			<div className="w-full bg-[#F0DE00] lg:p-10 p-5 bg-opacity-30 flex flex-col justify-center items-center gap-6">
				<h1 className="text-white font-extrabold text-2xl text-center">
					<span className="border-b-2 border-[#F0DE00]">Yo</span>ur Growth Goals. Our
					Priority.
				</h1>
				<p className="text-center lg:text-lg lg:px-44 text-white font-bold">
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout. The point of using
					Lorem Ipsum is that it has a more-or-less normal distribution The point of
					using Lorem Ipsum is that it has a more-or-less normal distribution
				</p>
				<div className="w-full lg:px-40 px-4 grid grid-cols-3">
					<div className="flex flex-col justify-center items-center">
						<h1 className="font-extrabold lg:text-5xl text-2xl text-[#F0DE00]">
							300+
						</h1>
						<p className="lg:text-xl text-sm text-center text-white">
							Avalible reboot monkey at your services
						</p>
					</div>
					<div className="flex border-l-2 border-r-2 flex-col justify-center items-center">
						<h1 className="font-extrabold lg:text-5xl text-2xl text-[#F0DE00]">
							290+
						</h1>
						<p className="lg:text-xl text-sm text-center text-white">
							Saving datacenters
						</p>
					</div>
					<div className="flex flex-col justify-center items-center">
						<h1 className="font-extrabold lg:text-5xl text-2xl text-[#F0DE00]">
							440+
						</h1>
						<p className="lg:text-xl text-sm text-center text-white">CO2 m2 saved</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Moto;
