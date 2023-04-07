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
			<Box
				sx={{
					width: "100%",
					flexGrow: 1,
					display: "grid",
					padding: "1rem 0em",
					gridTemplateColumns: "max-content 1fr max-content ",
				}}>
				<Box miw={"20rem"}>
					<Sidebar />
				</Box>
				<Box
					sx={{
						height: "calc(100vh - 5rem)",
						overflow: "scroll",
						"&::-webkit-scrollbar": { display: "none" },
					}}>
					<Feeds />
				</Box>
				<Box miw={"20rem"}>
					<Contacts />
				</Box>
			</Box>
		</Flex>
	);
};

export default Homepage;
