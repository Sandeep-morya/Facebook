import { Avatar, Flex, Text, Title } from "@mantine/core";
import React from "react";

type Props = {
	name: string;
};

function BirthdayTile({ name }: Props) {
	return (
		<Flex w={"100%"} maw="20rem" gap={"1rem"} align="center">
			<Avatar src={"/gift.png"} alt={name} />
			<Flex w={"100%"}>
				<Text fw={500}>{name}</Text>'s birthday is today
			</Flex>
		</Flex>
	);
}

export default BirthdayTile;
