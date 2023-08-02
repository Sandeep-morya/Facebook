import { Flex, Skeleton, Title } from "@mantine/core";
import React, { useCallback, useEffect, useState } from "react";
import { useUserProfile } from "../../Provider/UserContextProvider";
import FriendCard from "./FriendCard";
import NoFriends from "./NoFriends";
import axios from "axios";
import StoryCard from "../Main/StoryCard";
import x from "./dummy.json";

interface DummyUser {
	firstName: string;
	id: string;
	lastName: string;
	picture: string;
	title: string;
}

function AllFriends() {
	const { userdata } = useUserProfile();
	const [isLoading, setIsLoading] = useState(false);

	const [dummyUsers, setDummyUsers] = useState<DummyUser[]>();
	console.log({ x });
	if (userdata?.friends && userdata?.friends.length < 1) {
		return <NoFriends />;
	}
	return (
		<Flex
			sx={{
				flex: 1,
				overflowY: "scroll",
				"&::-webkit-scrollbar": { width: "8px" },
				scrollbarWidth: "thin",

				"&::-webkit-scrollbar-thumb": {
					background: "rgba(0, 0, 0, 0.2)",
					borderRadius: "1rem",
				},
			}}
			wrap={"wrap"}
			gap="1rem"
			mt="1rem">
			{userdata?.friends.map((id) => (
				<FriendCard id={id} key={id} chat />
			))}
			<br />
			<Flex direction={"column"} mt={"2rem"}>
				<Title order={2}>Random Suggestions</Title>
				<Flex wrap={"wrap"} gap={"2rem"} mt="1rem">
					{x.map((user) => (
						<Skeleton key={user._id} w={"7rem"} h="150px" visible={isLoading}>
							<StoryCard image={user.image} name={user.name} noAvatar />
						</Skeleton>
					))}
				</Flex>
			</Flex>
		</Flex>
	);
}

export default AllFriends;
