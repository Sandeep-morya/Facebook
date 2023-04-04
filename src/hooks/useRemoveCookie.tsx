﻿import React from "react";

import Cookie from "js-cookie";

function useRemoveCookie () {
	return (cookiename: string) => {
		Cookie.remove(cookiename);
	};
};
export default useRemoveCookie;
