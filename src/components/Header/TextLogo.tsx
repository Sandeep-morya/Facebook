import { Box, Image } from "@mantine/core";
import React from "react";

type Props = {};

function TextLogo({}: Props) {
	return (
		<Box w={"180px"}>
			<Image
				w={"100%"}
				src={
					"https:res.cloudinary.com/due9pi68z/image/upload/v1680507858/dnpjtjjqrvjvkslrqxxp.png"
				}
				alt="facebook-logo-name"
			/>
		</Box>
	);
}

export default TextLogo;
