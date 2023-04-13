import axios, { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { UserProfileType } from "../types";

const { VITE_API_URL } = import.meta.env;
function useSearchUser(id: string) {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [userdata, setUserdata] = useState<UserProfileType>();

	const getUserProfile = useCallback(async () => {
		try {
			setIsLoading(true);
			const { data }: AxiosResponse<UserProfileType> = await axios.get(
				VITE_API_URL + "/profile/" + id,
			);
			setUserdata(data);
			setIsLoading(false);
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
		}
	}, [id]);

	useEffect(() => {
		getUserProfile();
	}, []);

	return { isLoading, isError, userdata, getUserProfile };
}

export default useSearchUser;
