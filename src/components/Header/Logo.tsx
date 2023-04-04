import { Image } from "@mantine/core";
import React from "react";

type Props = {};

function Logo({}: Props) {
	return (
		<Image
			width={"2.5rem"}
			height={"2.5rem"}
			src={
				"https://res.cloudinary.com/due9pi68z/image/upload/v1680333681/ntpzmiiotgzmn9loafur.png"
			}
			alt="facebook_logo"
		/>
	);
}

export default Logo;
