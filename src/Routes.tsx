import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthenticationPage } from "./pages";

type Props = {};

function AllRoutes({}: Props) {
	return (
		<Routes>
			<Route path="/" element={<AuthenticationPage />} />
		</Routes>
	);
}

export default AllRoutes;
