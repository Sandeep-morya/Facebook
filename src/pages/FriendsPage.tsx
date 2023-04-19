﻿import { Box, Flex, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../components/Common/LoadingScreen";
import AllFriends from "../components/Friends/AllFriends";
import FriendRequests from "../components/Friends/FriendRequests";
import FriendsGrid from "../components/Friends/FriendsGrid";
import NoFriends from "../components/Friends/NoFriends";
import Sidebar from "../components/Friends/Sidebar";
import Navbar from "../components/Header/Navbar";
import { useUserProfile } from "../Provider/UserContextProvider";

type Props = {};

const titles = [
	"People you may know",
	"All Friend Requests",
	"Suggested by Facebook",
	"Your all Friends",
	"Birthdays",
	"Custom Lists",
];

function FriendsPage({}: Props) {
	const tabletView = useMediaQuery("(max-width: 62em)");
	const moblieView = useMediaQuery("(max-width: 720px)");

	const [tabIndex, setTabIndex] = useState(0);

	const { isLoading, isError, userdata } = useUserProfile();
	useEffect(() => {
		window.document.title = "Facebook - Friends";
	}, []);

	if (isLoading) {
		return <LoadingScreen />;
	}
	return (
		<Flex w={"100%"} mih="100vh" direction={"column"} bg="#F0F2F5">
			<Box w={"100%"} sx={{ position: "sticky", zIndex: 100, top: "0" }}>
				<Navbar unActive />
			</Box>
			<Flex>
				{!tabletView && <Sidebar {...{ tabIndex, setTabIndex }} />}
				<Flex
					p={{
						xs: "0.5rem",
						md: "1rem",
						lg: "2rem",
					}}
					sx={{ flex: 1 }}
					direction={"column"}>
					<Title order={4} pt="md">
						{titles[tabIndex]}
					</Title>
					{tabIndex === 0 && <AllFriends />}
					{tabIndex === 1 && <FriendRequests />}
					{tabIndex === 2 && <FriendsGrid title="Suggested by facebook" />}
					{tabIndex === 3 && <AllFriends />}
					{tabIndex === 4 && <NoFriends />}
					{tabIndex === 5 && <NoFriends />}
				</Flex>
			</Flex>
		</Flex>
	);
}

export default FriendsPage;
