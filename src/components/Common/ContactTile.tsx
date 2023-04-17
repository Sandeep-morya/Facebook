import { Avatar, Box, Flex, Text, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import useSearchUser from "../../hooks/useSearchUser";
import Havatar from "./Havatar";

type Props = {
	id: string;
	src?: string;
	online?: boolean;
	story?: string;
};

const ContactTile = ({ id, src, online = true, story }: Props) => {
	const { isLoading, isError, userdata } = useSearchUser(id);

	if (isLoading || !userdata) {
		return <></>;
	}

	return (
		<Flex
			w={"100%"}
			align="center"
			sx={{ borderRadius: "0.5rem", "&:hover": { backgroundColor: "#dddddd" } }}
			gap={"1rem"}
			p="0.5rem">
			<Havatar
				{...{ src: userdata.image, story, online, name: userdata.name }}
			/>
			<Title order={5} fw={500} c="black">
				{userdata.name}
			</Title>
		</Flex>
	);
};

export default ContactTile;
