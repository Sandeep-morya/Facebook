import { Container, Flex, SimpleGrid, Title } from "@mantine/core";
import React from "react";
import FriendCard from "./FriendCard";

type Props = {
	title: string;
};

function FriendsGrid({ title }: Props) {
	return (
		<Flex
			p={{
				xs: "0.5rem",
				md: "1rem",
				lg: "2rem",
			}}
			sx={{ flex: 1 }}
			direction={"column"}>
			<Title order={4}>{title}</Title>
			<Flex wrap={"wrap"} gap="1rem" mt="1rem">
				<FriendCard />
				<FriendCard />
				<FriendCard />
				<FriendCard />
				<FriendCard />
				<FriendCard />
				<FriendCard />
				<FriendCard />
			</Flex>
		</Flex>
	);
}

export default FriendsGrid;
