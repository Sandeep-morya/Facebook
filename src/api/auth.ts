import axios, { AxiosResponse } from "axios";

// :: Handle Login ::
const baseURL = import.meta.env.VITE_API_URL;

export async function LoginApi(values: { mobile: string; password: string }) {
	try {
		const { data }: AxiosResponse<{ message: string; token: string }> =
			await axios.post(`${baseURL}/users/login`, values);
		return data;
	} catch (error) {
		throw new Error();
	}
}

export async function SignupApi(values: {
	name: string;
	dob: string;
	mobile: string;
	gender: string;
	password: string;
}) {
	try {
		const { data }: AxiosResponse<{ message: string; token: string }> =
			await axios.post(`${baseURL}/users/register`, values);
		return data;
	} catch (error) {
		throw new Error();
	}
}
