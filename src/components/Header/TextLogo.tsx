import { Box, Image } from "@mantine/core";
import React from "react";

type Props = {};

function TextLogo({}: Props) {
	return (
		<Box w={"180px"}>
			<Image w={"100%"} src={"/logoname.png"} alt="Meetbook-logo-name" />
		</Box>
	);
}

export default TextLogo;
