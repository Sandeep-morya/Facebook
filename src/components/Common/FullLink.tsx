import { Flex, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";

type Props = {};

function FullLink({}: Props) {
	const { hovered, ref } = useHover();
	return (
		<Flex
			sx={{ borderRadius: "0.5rem" }}
			ref={ref}
			bg={hovered ? "#eeeeee" : "white"}
			p="0.5rem">
			<Title order={5} c="blue">
				See all Profiles
			</Title>
		</Flex>
	);
}

export default FullLink;
