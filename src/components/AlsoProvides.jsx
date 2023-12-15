import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardDetails = [
	{
		image: "/handon.png",
		hedear: "Remote Hands",
		content: "24/7 Smart Hands: Your hardware's on-site support solution!",
	},
	{
		image: "/data-decomissioning.png",
		hedear: "Data Center Decomissioning",
		content: "24/7 Smart Hands: Your hardware's on-site support solution!",
	},
	{
		image: "/data-destroying.png",
		hedear: "Data Destroying",
		content: "24/7 Smart Hands: Your hardware's on-site support solution!",
	},
	{
		image: "/server-migration.png",
		hedear: "Data Center Migration",
		content: "24/7 Smart Hands: Your hardware's on-site support solution!",
	},
	{
		image: "/hardware-recycling.png",
		hedear: "Hardware Recycling",
		content: "24/7 Smart Hands: Your hardware's on-site support solution!",
	},
	{
		image: "/rack-black.png",
		hedear: "Rack & Stack",
		content: "24/7 Smart Hands: Your hardware's on-site support solution!",
	},
	{
		image: "/network-design.png",
		hedear: "Rack & Network Design",
		content: "24/7 Smart Hands: Your hardware's on-site support solution!",
	},
	{
		image: "/monitoring.png",
		hedear: "Hardware Monitoring",
		content: "24/7 Smart Hands: Your hardware's on-site support solution!",
	},
	{
		image: "/smart-hands.png",
		hedear: "Smart Hands",
		content: "24/7 Smart Hands: Your hardware's on-site support solution!",
	},
	{
		image: "/server-migration.png",
		hedear: "Server Migration",
		content: "24/7 Smart Hands: Your hardware's on-site support solution!",
	},
];

//================================================================================================

function AlsoProvides() {
	const settings = {
		className: "slider variable-width",
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		adaptiveHeight: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
		],
	};
	return (
		<div className="bg-[#121212] w-full lg:p-10 p-5 flex flex-col justify-center items-center lg:gap-6 gap-2">
			<h1 className="text-center lg:text-[42px] text-xl text-white font-bold">
				<span className="border-b border-[#F0DE00]">We</span> Also Provide
			</h1>
			<p className="text-center lg:px-28 text-white text-xs lg:text-sm font-bold">
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point of using
				Lorem Ipsum is that it has a more-or-less normal distribution The point of
				using Lorem Ipsum is that it has a more-or-less normal distribution
			</p>
			<div className="w-[90%] mt-9">
				<Slider className="" {...settings}>
					{cardDetails.map((data, i) => {
						return (
							<div key={i}>
								<div className="flex group hover:bg-[#F0DE00] bottom-0 mt-[54px] duration-300 hover:bg-opacity-30 text-white rounded-lg cursor-pointer border-2 border-[#F0DE00] w-[297px] h-[225px] flex-col justify-center items-center relative gap-2">
									<div className="rounded-full border-2 border-[#F0DE00] absolute z-50 right-1/3 -top-1/4 bg-white duration-300 flex justify-center items-center h-[108px] w-[108px] group-hover:bg-[#F0DE00]">
										<img src={data.image} alt="" />
									</div>
									<h1 className="text-center text-lg font-bold mt-10">{data.hedear}</h1>
									<p className="text-center">{data.content}</p>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
}

export default AlsoProvides;
