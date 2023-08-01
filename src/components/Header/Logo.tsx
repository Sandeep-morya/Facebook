import { Image } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

function Logo({}: Props) {
	const navigate = useNavigate();
	return (
		<Image
			width={"3rem"}
			height={"3rem"}
			onClick={() => navigate("/")}
			src={"/logo.png"}
			alt="Meetbook_logo"
		/>
	);
}

export default Logo;
