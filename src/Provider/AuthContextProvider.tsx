import React, { useState, createContext } from "react";
import useGetCookie from "../hooks/useGetCookie";

type Props = {
	children: React.ReactNode;
};
export const AuthContext = createContext(
	{} as {
		token: string;
		setToken: React.Dispatch<React.SetStateAction<string>>;
	},
);
const AuthContextProvider = ({ children }: Props) => {
	const getCookie = useGetCookie();
	const [token, setToken] = useState(getCookie("fb_user") || "");

	return (
		<AuthContext.Provider value={{ token, setToken }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
