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
			sx={{
				filter:
					"brightness(0) saturate(100%) invert(48%) sepia(47%) saturate(3676%) hue-rotate(187deg) brightness(95%) contrast(90%);",
			}}
			alt="Socailbook_logo"
		/>
	);
}

export default Logo;
