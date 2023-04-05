import { Box, Flex } from "@mantine/core";
import React, { useEffect } from "react";
import Navbar from "../components/Header/Navbar";
import Contacts from "../components/Main/Contacts";
import Feeds from "../components/Main/Feeds";
import Sidebar from "../components/Main/Sidebar";

type Props = {};

const Homepage = (props: Props) => {
	useEffect(() => {
		window.document.title = "Facebook - Home";
	}, []);
	return (
		<Flex w={"100%"} h="100vh" direction={"column"} bg="#F0F2F5">
			<Box w={"100%"} sx={{ position: "sticky", zIndex: 100, top: "0" }}>
				<Navbar />
			</Box>
			<Flex justify={"space-between"} p="1.5rem 0.5rem">
				<Box sx={{ flexGrow: 1 }}>
					<Sidebar />
				</Box>
				<Box sx={{ flexGrow: 1 }}>
					<Feeds />
				</Box>
				<Box sx={{ flexGrow: 1 }}>
					<Contacts />
				</Box>
			</Flex>
		</Flex>
	);
};

export default Homepage;
