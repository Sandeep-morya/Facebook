import React, { useState, createContext, useContext, useCallback } from "react";
import { TbHeartBroken } from "react-icons/tb";
import useGetCookie from "../hooks/useGetCookie";
import useRemoveCookie from "../hooks/useRemoveCookie";
import useSetCookie from "../hooks/useSetCookie";

type Props = {
	children: React.ReactNode;
};
const AuthContext = createContext(
	{} as {
		token: string;
		replaceToken: (token: string) => void;
		removeToken: () => void;
	},
);

export const useToken = () => {
	return useContext(AuthContext);
};
const AuthContextProvider = ({ children }: Props) => {
	const cookie_value = useGetCookie()("fb_user");
	const setCookie = useSetCookie();
	const removeCookie = useRemoveCookie();
	console.log({ cookie_value });

	const [token, setToken] = useState(cookie_value || "");

	const replaceToken = useCallback((token: string) => {
		setCookie("fb_user", token);
		setToken(token);
	}, []);

	const removeToken = useCallback(() => {
		removeCookie("fb_user");
		setToken("");
	}, []);

	return (
		<AuthContext.Provider value={{ token, replaceToken, removeToken }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
