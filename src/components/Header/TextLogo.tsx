import { Box, Image } from "@mantine/core";
import React from "react";

type Props = {};

function TextLogo({}: Props) {
	return (
		<Box w={"180px"}>
			<Image w={"100%"} src={"/logo-2.png"} alt="Facebook-logo-name" />
		</Box>
	);
}

export default TextLogo;
