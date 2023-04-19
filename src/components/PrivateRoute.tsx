import React, { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useToken } from "../Provider/AuthContextProvider";

type Props = {
	children: JSX.Element;
};

const PrivateRoute = ({ children }: Props) => {
	const { token } = useToken();

	return token ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
