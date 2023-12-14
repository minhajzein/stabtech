import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import BlogPage from "../pages/BlogPage";

function UserRouter() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/blog" element={<BlogPage />} />
		</Routes>
	);
}

export default UserRouter;
