import { Flex } from "@mantine/core";
import React from "react";
import { useUserProfile } from "../../Provider/UserContextProvider";
import FriendCard from "./FriendCard";
import NoFriends from "./NoFriends";

type Props = {};

function AllFriends({}: Props) {
	const { userdata } = useUserProfile();
	if (userdata?.friends && userdata?.friends.length < 1) {
		return <NoFriends />;
	}
	return (
		<Flex wrap={"wrap"} gap="1rem" mt="1rem">
			{userdata?.friends.map((id) => (
				<FriendCard id={id} key={id} chat />
			))}
		</Flex>
	);
}

export default AllFriends;
