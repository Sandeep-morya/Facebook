import { Box } from "@mantine/core";
import React from "react";

type Props = {};

function Post({}: Props) {
	return (
		<Box
			bg={"white"}
			sx={{
				width: "100%",
				aspectRatio: "1",
				border: "1px solid red",
			}}></Box>
	);
}

export default Post;
