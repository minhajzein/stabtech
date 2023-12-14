import React from "react";
import styled, { keyframes } from "styled-components";

const slide = keyframes`
 from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
const SlideDiv = styled.div`
	animation: ${slide} 5s infinite linear;
`;

//================================================================================================

function AutoSlider() {
	return (
		<div className="flex gap-[40px] w-full h-[60px] bg-[#121212] py-14 overflow-hidden">
			<SlideDiv className="left-0 flex mr-[40px] ml-[40px] h-full flex-row items-center gap-[80px]">
				<img src="/cisco_logo2.png" alt="" />
				<img src="/arista.png" alt="" />
				<img src="/hp.png" alt="" />
				<img src="/dell.png" alt="" />
				<img src="/cisco_logo2.png" alt="" />
				<img src="/arista.png" alt="" />
				<img src="/hp.png" alt="" />
				<img src="/dell.png" alt="" />
			</SlideDiv>
			<SlideDiv className="flex mr-[40px] ml-[40px] h-full flex-row items-center gap-[80px]">
				<img src="/cisco_logo2.png" alt="" />
				<img src="/arista.png" alt="" />
				<img src="/hp.png" alt="" />
				<img src="/dell.png" alt="" />
				<img src="/cisco_logo2.png" alt="" />
				<img src="/arista.png" alt="" />
				<img src="/hp.png" alt="" />
				<img src="/dell.png" alt="" />
			</SlideDiv>
		</div>
	);
}

export default AutoSlider;
