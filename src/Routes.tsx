import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { AuthenticationPage, ErrorPage, Homepage, ProfilePage } from "./pages";

type Props = {};

function AllRoutes({}: Props) {
	return (
		<Routes>
			<Route path="/" element={<AuthenticationPage />} />
			<Route
				path="/home"
				element={
					<PrivateRoute>
						<Homepage />
					</PrivateRoute>
				}
			/>
			<Route
				path="/:id"
				element={
					<PrivateRoute>
						<ProfilePage />
					</PrivateRoute>
				}
			/>
			<Route path="/error" element={<ErrorPage />} />
		</Routes>
	);
}

export default AllRoutes;
