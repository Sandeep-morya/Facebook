import { Avatar, Box, Flex, Text, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import Havatar from "./Havatar";

type Props = {
	name: string;
	src?: string;
	online?: boolean;
	story?: string;
};

const ContactTile = ({ name, src, online = true, story }: Props) => {
	const { hovered, ref } = useHover();

	return (
		<Flex
			ref={ref}
			bg={hovered ? "#dddddd" : "transparent"}
			w={"100%"}
			align="center"
			sx={{ borderRadius: "0.5rem" }}
			gap={"1rem"}
			p="0.5rem">
			<Havatar {...{ src, story, online, name }} />
			<Title order={5} fw={500} c="black">
				{name}
			</Title>
		</Flex>
	);
};

export default ContactTile;
