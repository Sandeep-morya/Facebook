import { Box, Flex, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import LoadingScreen from "../components/Common/LoadingScreen";
import FriendsGrid from "../components/Friends/FriendsGrid";
import Sidebar from "../components/Friends/Sidebar";
import Navbar from "../components/Header/Navbar";
import { useUserProfile } from "../Provider/UserContextProvider";

type Props = {};

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
				{tabIndex === 0 && <FriendsGrid title="Peopele you may know" />}
				{tabIndex === 1 && <FriendsGrid title="Friend Requests" />}
				{tabIndex === 2 && <FriendsGrid title="Suggested by facebook" />}
				{tabIndex === 3 && <FriendsGrid title="Your all friends" />}
				{tabIndex === 4 && <FriendsGrid title="Birthdays" />}
				{tabIndex === 5 && <FriendsGrid title="Your Custom List" />}
			</Flex>
		</Flex>
	);
}

export default FriendsPage;
