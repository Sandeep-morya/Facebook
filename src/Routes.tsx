import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import {
	AuthenticationPage,
	ErrorPage,
	FriendsPage,
	Homepage,
	ProfilePage,
} from "./pages";
import UserContextProvider from "./Provider/UserContextProvider";

type Props = {};

function AllRoutes({}: Props) {
	return (
		<Routes>
			<Route path="/" element={<AuthenticationPage />} />
			<Route
				path="/home"
				element={
					<PrivateRoute>
						<UserContextProvider>
							<Homepage />
						</UserContextProvider>
					</PrivateRoute>
				}
			/>
			<Route
				path="/:id"
				element={
					<PrivateRoute>
						<UserContextProvider>
							<ProfilePage />
						</UserContextProvider>
					</PrivateRoute>
				}
			/>

			<Route
				path="/friends"
				element={
					<PrivateRoute>
						<UserContextProvider>
							<FriendsPage />
						</UserContextProvider>
					</PrivateRoute>
				}
			/>
			<Route path="/error" element={<ErrorPage />} />
		</Routes>
	);
}

export default AllRoutes;
