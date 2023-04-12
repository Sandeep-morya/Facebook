import { Box, Group, Text, UnstyledButton } from "@mantine/core";
import React from "react";

type Props = {
	src: string;
	name: string;
	onClick: () => void;
};

function PostButton({ src, name, onClick }: Props) {
	return (
		<UnstyledButton
			onClick={onClick}
			sx={{
				padding: "0.25rem",
				borderRadius: "0.5rem",
				"&:hover": {
					backgroundColor: "rgba(0,0,0,0.1)",
				},
			}}>
			<Group spacing={5} align="center" sx={{ justifyContent: "center" }}>
				<Box
					w={"20px"}
					h="20px"
					bgr="no-repeat"
					bgsz={"100%"}
					bg={`url(${src})`}></Box>
				<Text>{name}</Text>
			</Group>
		</UnstyledButton>
	);
}

export default PostButton;
