import { Flex } from "@mantine/core";
import React from "react";
import { useUserProfile } from "../../Provider/UserContextProvider";
import FriendCard from "./FriendCard";
import NoFriends from "./NoFriends";

type Props = {};

function FriendRequests({}: Props) {
	const { userdata } = useUserProfile();
	if (userdata?.requests && userdata?.requests.length < 1) {
		return <NoFriends />;
	}
	return (
		<Flex wrap={"wrap"} gap="1rem" mt="1rem">
			{userdata?.requests.map((id) => (
				<FriendCard id={id} key={id} friendRequest />
			))}
		</Flex>
	);
}

export default FriendRequests;
