import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

//================================================================================================

function SwiperComp() {
	return (
		<div className="w-full flex flex-col justify-between items-center bg-[#121212] p-10 overflow-hidden">
			<h1 className="text-center lg:text-[42px] text-xl text-white font-bold">
				Colocation Server Hosting Solutions
			</h1>
			<Swiper
				breakpoints={{
					340: { slidesPerView: 1, spaceBetween: 15 },
					700: { slidesPerView: 3, spaceBetween: 15 },
				}}
				freeMode={true}
				pagination={[FreeMode, Pagination]}
				className="max-w-[440px] lg:max-w-[80%] p-7 "
			>
				<SwiperSlide>
					<div className="flex flex-col min-w-[320px] cursor-pointer lg:w-auto justify-center items-center rounded-md bg-opacity-20 border p-10 border-[#F0DE00] gap-7 hover:bg-[#F0DE00] hover:bg-opacity-20 duration-300">
						<div className="rounded-full flex justify-center items-center bg-opacity-40 bg-[#F0DE00] w-20 h-20">
							<img className="z-50" src="/rack&rows.png" alt="" />
						</div>
						<h1 className="text-[#F0DE00] font-bold">Rack Unit</h1>
						<p className="text-white text-xs text-center">
							If you don’t have the time, knowledge or engineers to install servers or
							a network patch,We have the right engineers for your needs who simply
							love getting their hands dirty for the job.
						</p>
						<h1 className="text-white text-center font-semibold">
							Starting from <br />
							<span className="font-bold">$99.49</span>
						</h1>
						<button className="rounded-md bg-[#F0DE00] py-2 px-4">
							Explore units
						</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex flex-col cursor-pointer min-w-[320px] lg:w-auto justify-center items-center rounded-md bg-opacity-20 border p-10 border-[#F0DE00] gap-7 hover:bg-[#F0DE00] hover:bg-opacity-20 duration-300">
						<div className="rounded-full flex justify-center items-center bg-opacity-40 bg-[#F0DE00] w-20 h-20">
							<img className="z-50" src="/rack&rows.png" alt="" />
						</div>
						<h1 className="text-[#F0DE00] font-bold">Full Rack</h1>
						<p className="text-white text-xs text-center">
							If you don’t have the time, knowledge or engineers to install servers or
							a network patch,We have the right engineers for your needs who simply
							love getting their hands dirty for the job.
						</p>
						<h1 className="text-white text-center font-semibold">
							Starting from <br />
							<span className="font-bold">$99.49</span>
						</h1>
						<button className="rounded-md bg-[#F0DE00] py-2 px-4">
							Explore racks
						</button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flex cursor-pointer h-full flex-col min-w-[320px] lg:w-auto justify-center items-center rounded-md bg-opacity-20 border p-10 border-[#F0DE00] gap-7 hover:bg-[#F0DE00] hover:bg-opacity-20 duration-300">
						<div className="rounded-full flex justify-center items-center bg-opacity-40 bg-[#F0DE00] w-20 h-20">
							<img className="z-50" src="/rack&rows.png" alt="" />
						</div>
						<h1 className="text-[#F0DE00] font-bold">Rack Unit</h1>
						<p className="text-white text-xs text-center">
							If you don’t have the time, knowledge or engineers to install servers or
							a network patch,We have the right engineers for your needs who simply
							love getting their hands dirty for the job.
						</p>
						<h1 className="text-white text-center font-bold">By Request</h1>
						<button className="rounded-md mt-6 bg-[#F0DE00] py-2 px-4">
							More info
						</button>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default SwiperComp;
