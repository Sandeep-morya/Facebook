import { Image } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

function Logo({}: Props) {
	const navigate = useNavigate();
	return (
		<Image
			width={"2.5rem"}
			height={"2.5rem"}
			onClick={() => navigate("/")}
			src={
				"https://res.cloudinary.com/due9pi68z/image/upload/v1683515232/f2nrexkkzmzb6l2kadve.png"
			}
			alt="Socailbook_logo"
		/>
	);
}

export default Logo;
