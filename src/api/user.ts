import axios, { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import { UserProfileType } from "../types";

const baseURL = import.meta.env.VITE_API_URL;
// const secret = import.meta.env.VITE_TOKEN_SECRET;

export async function getUserInfo(token: string) {
	try {
		const id = jwtDecode(token);
		const { data }: AxiosResponse<UserProfileType> = await axios.get(
			`${baseURL}/profile/${id}`,
		);
		return data;
	} catch (error) {
		throw new Error("400 Bad Request");
	}
}
