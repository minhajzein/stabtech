import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

//================================================================================================================================

function WhatMakes() {
	return (
		<div className="w-full bg-[#121212]">
			<div className="w-full flex flex-col justify-center bg-cover bg-[url('/what-makes.png')]">
				<div className="w-[90%] p-5 lg:p-10 flex flex-col md:flex-row justify-between">
					<div className="w-full flex justify-center md:hidden">
						<img src="/second-what-makes.png" alt="" />
					</div>
					<div className="md:w-[60%] flex flex-col gap-6">
						<h1 className="text-white md:text-[48px] font-bold text-3xl text-center md:text-left">
							What makes Reboot <br /> Monkey unique?
						</h1>
						<p className="text-white md:text-left md:text-[24px] text-center text-sm">
							Reboot Monkey is a purpose-driven company that considers our team our
							most important asset. We are looking for talented professionals with a
							deep understanding of IT solutions and a passion for customer service and
							support.
							<br />
							<br />
							The ideal candidate wants to invest in the company's future and be part
							of an energetic team. Join a team that motivates you to excellence and
							take your career to new heights. <br />
							<br />
							<br />
							<span className="text-[#F0DE00] underline cursor-pointer">See More</span>
						</p>
					</div>
					<div className="w-[25%] hidden md:block">
						<img src="/second-what-makes.png" alt="" />
					</div>
				</div>
				<div className="w-full flex flex-col justify-between items-center p-10 overflow-hidden gap-4">
					<h1 className="text-white">
						<span className="border-b border-[#F0DE00]">Test</span>imonials
					</h1>
					<h1 className="text-center lg:text-[42px] text-xl text-white font-bold">
						Loved by Thousands of Clients
					</h1>
					<p className="text-white text-center lg:text-lg lg:px-40">
						We place huge value on strong relashionships and have seen the benifit
						they bring to our business.customer feedback is vital in helping us to get
						it right.
					</p>
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
							<div className="flex bg-[#121212] cursor-pointer flex-col min-w-[320px] rounded-md p-5 shadow-xl shadow-black gap-2 hover:bg-[#F0DE00] hover:bg-opacity-20 duration-300">
								<img className="w-8" src="/qouted-icon.png" alt="" />
								<h1 className="text-[#F0DE00]">Full Rack</h1>
								<p className="text-white text-xs ">
									survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the
									1960s with the release of
								</p>
								<div className="mt-14 flex flex-row gap-3">
									<img src="/testimonial-logo.png" alt="" />
									<div>
										<h1 className="font-bold text-white">Alexy Sily</h1>
										<h1 className="text-white">Ceo& Cto</h1>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex bg-[#121212] cursor-pointer flex-col min-w-[320px] rounded-md p-5 shadow-xl shadow-black gap-2 hover:bg-[#F0DE00] hover:bg-opacity-20 duration-300">
								<img className="w-8" src="/qouted-icon.png" alt="" />
								<h1 className="text-[#F0DE00]">Full Rack</h1>
								<p className="text-white text-xs ">
									survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the
									1960s with the release of
								</p>
								<div className="mt-14 flex flex-row gap-3">
									<img src="/testimonial-logo.png" alt="" />
									<div>
										<h1 className="font-bold text-white">Alexy Sily</h1>
										<h1 className="text-white">Ceo& Cto</h1>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex bg-[#121212] cursor-pointer flex-col min-w-[320px] rounded-md p-5 shadow-xl shadow-black gap-2 hover:bg-[#F0DE00] hover:bg-opacity-20 duration-300">
								<img className="w-8" src="/qouted-icon.png" alt="" />
								<h1 className="text-[#F0DE00]">Full Rack</h1>
								<p className="text-white text-xs ">
									survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the
									1960s with the release of
								</p>
								<div className="mt-14 flex flex-row gap-3">
									<img src="/testimonial-logo.png" alt="" />
									<div>
										<h1 className="font-bold text-white">Alexy Sily</h1>
										<h1 className="text-white">Ceo& Cto</h1>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex bg-[#121212] cursor-pointer flex-col min-w-[320px] rounded-md p-5 shadow-xl shadow-black gap-2 hover:bg-[#F0DE00] hover:bg-opacity-20 duration-300">
								<img className="w-8" src="/qouted-icon.png" alt="" />
								<h1 className="text-[#F0DE00]">Full Rack</h1>
								<p className="text-white text-xs ">
									survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the
									1960s with the release of
								</p>
								<div className="mt-14 flex flex-row gap-3">
									<img src="/testimonial-logo.png" alt="" />
									<div>
										<h1 className="font-bold text-white">Alexy Sily</h1>
										<h1 className="text-white">Ceo& Cto</h1>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex bg-[#121212] cursor-pointer flex-col min-w-[320px] rounded-md p-5 shadow-xl shadow-black gap-2 hover:bg-[#F0DE00] hover:bg-opacity-20 duration-300">
								<img className="w-8" src="/qouted-icon.png" alt="" />
								<h1 className="text-[#F0DE00]">Full Rack</h1>
								<p className="text-white text-xs ">
									survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the
									1960s with the release of
								</p>
								<div className="mt-14 flex flex-row gap-3">
									<img src="/testimonial-logo.png" alt="" />
									<div>
										<h1 className="font-bold text-white">Alexy Sily</h1>
										<h1 className="text-white">Ceo& Cto</h1>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="flex bg-[#121212] cursor-pointer flex-col min-w-[320px] rounded-md p-5 shadow-xl shadow-black gap-2 hover:bg-[#F0DE00] hover:bg-opacity-20 duration-300">
								<img className="w-8" src="/qouted-icon.png" alt="" />
								<h1 className="text-[#F0DE00]">Full Rack</h1>
								<p className="text-white text-xs ">
									survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the
									1960s with the release of
								</p>
								<div className="mt-14 flex flex-row gap-3">
									<img src="/testimonial-logo.png" alt="" />
									<div>
										<h1 className="font-bold text-white">Alexy Sily</h1>
										<h1 className="text-white">Ceo& Cto</h1>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<button className="bg-[#F0DE00] hover:bg-[#121212] hover:text-[#F0DE00] hover:scale-105 duration-300 rounded-md px-10 py-3 shadow-sm shadow-black border border-[#F0DE00]">
						See more
					</button>
				</div>
			</div>
		</div>
	);
}

export default WhatMakes;
