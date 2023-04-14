import { Box, Center, Flex, Loader } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { BiEdit } from "react-icons/bi";
import LoadingScreen from "../components/Common/LoadingScreen";
import ScrollToBtn from "../components/Common/ScrollToBtn";

import MobileNav from "../components/Header/MobileNav";
import Navbar from "../components/Header/Navbar";
import Contacts from "../components/Main/Contacts";
import Feeds from "../components/Main/Feeds";
import Sidebar from "../components/Main/Sidebar";
import useGetCookie from "../hooks/useGetCookie";
import { useUserProfile } from "../Provider/UserContextProvider";
import { UserProfileType } from "../types";

type Props = {};

const Homepage = (props: Props) => {
	const tabletView = useMediaQuery("(max-width: 62em)");
	const moblieView = useMediaQuery("(max-width: 720px)");
	const { isLoading, isError, userdata } = useUserProfile();

	useEffect(() => {
		window.document.title = "Facebook - Home";
	}, []);

	if (isLoading || !userdata) {
		return <LoadingScreen />;
	}
	return (
		<Flex
			w={"100%"}
			h="100vh"
			direction={"column"}
			bg="#F0F2F5"
			sx={{ overflow: "hidden" }}>
			<Box w={"100%"} sx={{ position: "sticky", zIndex: 100, top: "0" }}>
				<Navbar />
			</Box>
			<Box
				sx={{
					width: "100%",
					flexGrow: 1,
					display: "grid",
					paddingTop: "1rem",
					gridTemplateColumns: moblieView
						? "1fr"
						: tabletView
						? "1fr max-content"
						: "max-content 1fr max-content",
				}}>
				{/*---:: Sidebar ::---*/}

				{!tabletView && (
					<Box
						w={{
							lg: "14rem",
							xl: "20rem",
						}}
						sx={{
							height: "calc(100vh - 5rem)",
							overflowY: "scroll",
							"&::-webkit-scrollbar": { display: "none" },
						}}>
						<Sidebar user={userdata} />
					</Box>
				)}

				{/*---:: Posts - Story - Reel ::---*/}
				<Box
					sx={{
						height: "calc(100vh - 5rem)",
						overflowY: "scroll",
						"&::-webkit-scrollbar": { width: "8px" },
						"&::-webkit-scrollbar-thumb": {
							background: "rgba(0, 0, 0, 0.2)",
							borderRadius: "1rem",
						},
						"&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
					}}>
					<Feeds />
					{/* <Center>
						<Loader />
					</Center> */}
				</Box>

				{/*---:: Contacts - Birthday - Groups ::---*/}
				{!moblieView && (
					<Box
						w={{
							lg: "18rem",
							xl: "20rem",
						}}
						sx={{
							height: "calc(100vh - 5rem)",
							overflow: "scroll",
							"&::-webkit-scrollbar": { display: "none" },
						}}>
						<Contacts />
					</Box>
				)}
			</Box>
			<ScrollToBtn onClick={() => {}}>
				<BiEdit color="black" size={22} />
			</ScrollToBtn>
		</Flex>
	);
};

export default Homepage;
