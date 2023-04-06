import { Box, Flex, Title } from "@mantine/core";
import React from "react";

type Props = {
	src: string;
	name: string;
};

function PostButton({ src, name }: Props) {
	return (
		<Flex align={"center"} gap="0.5rem">
			<Box w={"24px"} h="24px" bg={`url(${src})`}></Box>
			<Title order={5} fw={500} c="black">
				{name}
			</Title>
		</Flex>
	);
}

export default PostButton;
