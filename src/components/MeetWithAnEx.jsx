import React from "react";

function MeetWithAnEx() {
	return (
		<div className="w-full bg-[#121212] p-5 lg:p-10 flex flex-col md:flex-row pr- md:gap-8 gap-3">
			<div className="flex flex-col md:gap-10 gap-3">
				<h1 className="text-white md:text-[48px] font-bold text-3xl text-center md:text-left">
					<span className="border-b-2 border-[#F0DE00]">Mee</span>t with an Expert.
				</h1>
				<p className="text-white md:text-left md:text-[24px] text-center text-sm">
					Book a call to see if we are the right partner to help you grow.
					<br />
					<br />
					We will assess the situation and determine if we can help. Then we will
					craft a tailored plan for you.
				</p>
				<p className="text-white text-xs text-center md:text-left">
					*After completing the form,you will be prompted to pick a meeting time.
				</p>
			</div>
			<div className="flex flex-col gap-3 bg-black rounded w-full md:w-[40%] p-2">
				<h1 className="text-white">Contact Us</h1>
				<form action="">
					<div className="flex flex-col">
						<label className="text-[#434343] focus:text-[#F0DE00]" htmlFor="name">
							Name
						</label>
						<input
							id="name"
							className="rounded bg-[#434343] focus:outline-[#F0DE00]"
							type="text"
						/>
					</div>
					<div className="flex flex-col">
						<label className="text-[#434343] focus:text-[#F0DE00]" htmlFor="email">
							E-mail
						</label>
						<input
							id="email"
							className="rounded bg-[#434343] focus:outline-[#F0DE00]"
							type="email"
						/>
					</div>
					<div className="flex flex-col">
						<label className="text-[#434343] focus:text-[#F0DE00]" htmlFor="subject">
							Subject
						</label>
						<input
							id="subject"
							className="rounded bg-[#434343] focus:outline-[#F0DE00]"
							type="text"
						/>
					</div>
					<div className="flex flex-col">
						<label className="text-[#434343] focus:text-[#F0DE00]" htmlFor="message">
							Message
						</label>
						<textarea
							id="message"
							cols="20"
							rows="5"
							className="rounded bg-[#434343] focus:outline-[#F0DE00]"
						></textarea>
					</div>
					<button type="submit" className="bg-[#F0DE00] mt-2 px-4 py-1 rounded">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default MeetWithAnEx;
