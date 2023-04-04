import React from "react";

import Cookie from "js-cookie";

function useGetCookie() {
	return (cookiename: string) => Cookie.get(cookiename);
}

export default useGetCookie;
