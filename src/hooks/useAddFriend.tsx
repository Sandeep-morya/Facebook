import axios from "axios";
import React, { useCallback } from "react";
import { useToken } from "../Provider/AuthContextProvider";
import useAlert from "./useAlert";

type Props = {};

const { VITE_API_URL, VITE_TOKEN_SECRET } = import.meta.env;

function useAddFriend() {
	const { token } = useToken();
	const Alert = useAlert();

	const addFriend = useCallback(
		async (id: string) => {
			try {
				console.log("called");
				const { data } = await axios.post(
					`${VITE_API_URL}/friend/add`,
					{
						friendRequest: id,
					},
					{ headers: { Authorization: token } },
				);

				Alert(data, "success");
			} catch (error) {
				Alert(String(error), "success");
			}
		},
		[VITE_API_URL, token],
	);
	return addFriend;
}

export default useAddFriend;
