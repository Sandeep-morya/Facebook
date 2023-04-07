import { Box, Flex, Title } from "@mantine/core";
import React from "react";

type Props = {
	src: string;
	name: string;
};

function PostButton({ src, name }: Props) {
	return (
		<Flex align={"center"} gap="0.5rem">
			<Box
				w={"20px"}
				h="20px"
				bgr="no-repeat"
				bgsz={"100%"}
				bg={`url(${src})`}></Box>
			<Title order={5} fw={500} c="black" sx={{ wordBreak: "break-all" }}>
				{name}
			</Title>
		</Flex>
	);
}

export default PostButton;
