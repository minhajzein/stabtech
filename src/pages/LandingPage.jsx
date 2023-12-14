import React from "react";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";
import Banner from "../components/Banner";
import AutoSlider from "../components/AutoSlider";
import Moto from "../components/Moto";
import SwiperComp from "../components/SwiperComp";
import AlsoProvides from "../components/AlsoProvides";
import WhyReboot from "../components/WhyReboot";
import WhatMakes from "../components/WhatMakes";
import MeetWithAnEx from "../components/MeetWithAnEx";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function LandingPage() {
	return (
		<>
			<SubHeader />
			<Header />
			<Banner />
			<AutoSlider />
			<Moto />
			<SwiperComp />
			<AlsoProvides />
			<WhyReboot />
			<WhatMakes />
			<MeetWithAnEx />
			<NewsLetter />
			<Footer />
		</>
	);
}

export default LandingPage;
