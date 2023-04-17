import React, { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useToken } from "../Provider/AuthContextProvider";

type Props = PropsWithChildren;

const PrivateRoute = ({ children }: Props) => {
	const { token } = useToken();
	const location = useLocation();

	return token ? children : <Navigate to={"/"} state={location.pathname} />;
};

export default PrivateRoute;
