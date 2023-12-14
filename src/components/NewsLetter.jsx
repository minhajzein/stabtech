import React from "react";

function NewsLetter() {
	return (
		<div className="w-full flex justify-between bg-[#434343] p-5 md:p-10">
			<div className="flex flex-col md:w-[40%] gap-3">
				<h1 className="text-white">
					<span className="border-b border-[#F0DE00]">Newsl</span>etter
				</h1>
				<h1 className="text-white font-bold text-lg">
					Reboot Monkey ! Sign Up To Get The Latest Catch Sent To Your Inbox
				</h1>
				<div className="w-[90%] relative">
					<input className="w-full rounded bg-[black]" type="text" />
					<div className="h-full w-10 rounded flex justify-center items-center cursor-pointer absolute top-0 bg-[#F0DE00] right-0">
						<img src="/send-03.png" alt="" />
					</div>
				</div>
			</div>
			<div className="hidden w-[30%] justify-center items-center md:block gap-4">
				<img className="pl-3" src="/bulb-logo.png" alt="" />
				<img className="mt-3" src="/logo.png" alt="" />
			</div>
		</div>
	);
}

export default NewsLetter;
