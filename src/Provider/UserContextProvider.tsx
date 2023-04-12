import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserProfileType } from "../types";
import useGetCookie from "../hooks/useGetCookie";
import axios, { AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_API_URL;
const secret = import.meta.env.VITE_TOKEN_SECRET;
const UserContext = React.createContext(
	{} as {
		isLoading: boolean;
		isError: boolean;
		userdata: UserProfileType | undefined;
	},
);

export function useUserProfile() {
	return useContext(UserContext);
}

function UserContextProvider({ children }: { children: React.ReactNode }) {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [userdata, setUserdata] = useState<UserProfileType>();
	const token = useGetCookie()("fb_user");

	const verifyToken = useCallback(async (token: string, secret: string) => {
		try {
			const { data }: AxiosResponse<{ payload: string }> = await axios.post(
				baseURL + "/jwt/verify",
				{
					token,
					secret,
				},
			);
			return data.payload;
		} catch (error) {
			throw new Error("token verification failed");
		}
	}, []);

	const getUserProfile = useCallback(async () => {
		try {
			setIsLoading(true);
			if (token === undefined || secret === undefined) {
				throw new Error("You have to login again");
			}
			const id = await verifyToken(token, secret);
			const { data }: AxiosResponse<UserProfileType> = await axios.get(
				baseURL + "/profile/" + id,
			);
			setUserdata(data);
			setIsLoading(false);
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
		}
	}, [token, verifyToken]);

	useEffect(() => {
		getUserProfile();
	}, [getUserProfile]);

	return (
		<UserContext.Provider value={{ isLoading, isError, userdata }}>
			{children}
		</UserContext.Provider>
	);
}

export default UserContextProvider;
