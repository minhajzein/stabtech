import React from "react";

function Footer() {
	return (
		<div className="w-full grid grid-cols-1 md:grid-cols-3 bg-[#121212] p-5 md:p-10">
			<div className="flex flex-col gap-1">
				<img className="w-40" src="/public/full-logo.png" alt="" />
				<p className="text-white text-xs">
					Providing Complete IT solutions, Globally.
				</p>
				<p className="text-white pr-10 text-xs mt-3">
					Reboot Monkey covers the full lifecycle of technology solutions and works
					across various IT disciplines to advance digital business globally to
					manage and simplify technology.
				</p>
				<div className="flex mt-3 w-28 flex-row justify-between gap-2">
					<img className="cursor-pointer" src="/linkedIn.png" alt="" />
					<img className="cursor-pointer" src="/instgram.png" alt="" />
					<img className="cursor-pointer" src="/x-social-media.png" alt="" />
					<img className="cursor-pointer" src="/facebook.png" alt="" />
				</div>
			</div>
			<div className="grid grid-cols-2 mt-4">
				<div>
					<h1 className="text-white font-semibold">
						<span className="border-b border-[#F0DE00]">Com</span>pany
					</h1>
					<ul className="text-white mt-4">
						<li className="cursor-pointer text-sm">About Us</li>
						<li className="cursor-pointer text-sm">Our Team</li>
						<li className="cursor-pointer text-sm">FAQs</li>
						<li className="cursor-pointer text-sm">Careers</li>
					</ul>
				</div>
				<div>
					<h1 className="text-white font-semibold">
						<span className="border-b border-[#F0DE00]">Prod</span>uct
					</h1>
					<ul className="text-white mt-4">
						<li className="cursor-pointer text-sm">Rack Servers</li>
						<li className="cursor-pointer text-sm">IP Transit</li>
						<li className="cursor-pointer text-sm">S.L.A</li>
					</ul>
				</div>
			</div>
			<div className="mt-4">
				<h1 className="text-white font-semibold">
					<span className="border-b border-[#F0DE00]">Serv</span>ices
				</h1>
				<div className="grid grid-cols-2">
					<div>
						<ul className="text-white mt-4">
							<li className="cursor-pointer text-sm">Rack & Network</li>
							<li className="cursor-pointer text-sm">Monitoring</li>
							<li className="cursor-pointer text-sm">Smart Hands</li>
							<li className="cursor-pointer text-sm">Data Destroying</li>
							<li className="cursor-pointer text-sm">Recycling</li>
						</ul>
					</div>
					<div>
						<ul className="text-white mt-4">
							<li className="cursor-pointer text-sm">Design</li>
							<li className="cursor-pointer text-sm">Rack & Stack</li>
							<li className="cursor-pointer text-sm">Remote Hands</li>
							<li className="cursor-pointer text-sm">Hardware</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
