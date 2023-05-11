import { Box, Image } from "@mantine/core";
import React from "react";

type Props = {};

function TextLogo({}: Props) {
	return (
		<Box w={"180px"}>
			<Image
				w={"100%"}
				src={
					"https://res.cloudinary.com/due9pi68z/image/upload/v1683515232/v5aulwovlglhjn5upcml.png"
				}
				sx={{
					filter:
						"brightness(0) saturate(100%) invert(48%) sepia(47%) saturate(3676%) hue-rotate(187deg) brightness(95%) contrast(90%);",
				}}
				alt="Socailbook-logo-name"
			/>
		</Box>
	);
}

export default TextLogo;
