import axios, { AxiosResponse } from "axios";
import React, { useCallback, useState } from "react";
import { useToken } from "../Provider/AuthContextProvider";
import { UserProfileType } from "../types";
import useAlert from "./useAlert";

type Props = {};

const { VITE_API_URL } = import.meta.env;

function useUpdateProfile() {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [updatedProfile, setUpdatedProfile] = useState<UserProfileType>();
	const { token } = useToken();
	const Alert = useAlert();

	const updateProfile = useCallback(
		async <T,>(updates: T) => {
			setIsError(false);
			setIsLoading(true);
			try {
				const { data }: AxiosResponse<UserProfileType> = await axios.patch(
					VITE_API_URL + "/user/update/low",
					updates,
					{ headers: { Authorization: token } },
				);
				setUpdatedProfile(data);
				setIsLoading(false);
			} catch (error) {
				setIsError(true);
				setIsLoading(false);
				Alert("Something went Wrong", "error");
			}
		},
		[token, VITE_API_URL],
	);
	return { isLoading, isError, updatedProfile, updateProfile };
}

export default useUpdateProfile;
