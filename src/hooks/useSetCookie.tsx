import React from "react";
import Cookie from "js-cookie";

function useSetCookie() {
	return (cookieName: string, value: string) => {
		Cookie.set(cookieName, value, {
			secure: true,
			sameSite: "strict",
			path: "/",
		});
	};
}

export default useSetCookie;
