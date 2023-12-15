//================================================================================================

function AutoSlider() {
	return (
		<div className="flex w-full gap-[40px] py-5 flex-nowrap bg-[#121212] overflow-hidden">
			<div className="animate-infinite-carousel left-0 flex mr-[40px] ml-[40px] h-full flex-row items-center gap-[80px]">
				<img src="/cisco_logo2.png" alt="" />
				<img src="/arista.png" alt="" />
				<img src="/hp.png" alt="" />
				<img src="/dell.png" alt="" />
				<img src="/cisco_logo2.png" alt="" />
				<img src="/arista.png" alt="" />
				<img src="/hp.png" alt="" />
				<img src="/dell.png" alt="" />
			</div>
			<div className="animate-infinite-carousel flex ml-[980px] h-full flex-row items-center gap-[80px]">
				<img src="/cisco_logo2.png" alt="" />
				<img src="/arista.png" alt="" />
				<img src="/hp.png" alt="" />
				<img src="/dell.png" alt="" />
				<img src="/cisco_logo2.png" alt="" />
				<img src="/arista.png" alt="" />
				<img src="/hp.png" alt="" />
				<img src="/dell.png" alt="" />
			</div>
		</div>
	);
}

export default AutoSlider;
