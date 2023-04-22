import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import {
	AuthenticationPage,
	ConnectPage,
	ErrorPage,
	FriendsPage,
	Homepage,
	ProfilePage,
} from "./pages";
import SocketProvider from "./Provider/SocketContextProvider";
import UserContextProvider from "./Provider/UserContextProvider";

type Props = {};

function AllRoutes({}: Props) {
	return (
		<Routes>
			<Route path="/login" element={<AuthenticationPage />} />
			<Route
				path="/"
				element={
					<PrivateRoute>
						<UserContextProvider>
							<SocketProvider>
								<Homepage />
							</SocketProvider>
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
			<Route
				path="/connect/:room"
				element={
					<PrivateRoute>
						<UserContextProvider>
							<ConnectPage />
						</UserContextProvider>
					</PrivateRoute>
				}
			/>
			<Route path="/error" element={<ErrorPage />} />
		</Routes>
	);
}

export default AllRoutes;
