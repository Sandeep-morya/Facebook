import {
	Box,
	Container,
	Flex,
	SimpleGrid,
	Skeleton,
	Text,
	Title,
} from "@mantine/core";
import axios, { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import useAlert from "../../hooks/useAlert";
import { useToken } from "../../Provider/AuthContextProvider";
import { useUserProfile } from "../../Provider/UserContextProvider";
import { FriendType, UserProfileType } from "../../types";
import FriendCard from "./FriendCard";
import NoFriends from "./NoFriends";
import StoryCard from "../Main/StoryCard";

type Props = {
	title: string;
};

const { VITE_API_URL, VITE_TOKEN_SECRET } = import.meta.env;

function FriendsGrid({ title }: Props) {
	const { userdata } = useUserProfile();
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [users, setUsers] = useState<FriendType[]>([]);
	const Alert = useAlert();

	const getAllUsers = useCallback(async () => {
		setIsError(false);
		setIsLoading(true);
		try {
			const { data }: AxiosResponse<FriendType[]> = await axios.get(
				VITE_API_URL + "/users/all",
				{
					headers: { Authorization: VITE_TOKEN_SECRET },
				},
			);
			setUsers(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
			Alert("503 Server Error", "error");
		}
	}, [VITE_TOKEN_SECRET]);

	useEffect(() => {
		getAllUsers();
	}, []);

	if (users.length < 2) {
		return <NoFriends />;
	}

	return (
		<Flex wrap={"wrap"} gap="1rem" mt="1rem">
			{users
				.filter(
					(e) =>
						e._id != userdata?._id &&
						!userdata?.friends.includes(e._id) &&
						!userdata?.requests.includes(e._id),
				)
				.map((user) => (
					<FriendCard id={user._id} key={user._id} />
				))}
			<br />
		</Flex>
	);
}

export default FriendsGrid;
