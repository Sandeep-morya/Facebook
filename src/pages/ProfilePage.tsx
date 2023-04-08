import { Box, Flex } from "@mantine/core";
import React from "react";
import Navbar from "../components/Header/Navbar";
import ProfilePresentation from "../components/Profile/ProfilePresentation";

type Props = {};

function ProfilePage({}: Props) {
	return (
		<Flex w={"100%"} mih="100vh" direction={"column"} bg="#F0F2F5">
			<Box w={"100%"} sx={{ position: "sticky", zIndex: 100, top: "0" }}>
				<Navbar unActive />
			</Box>

			<Box
				w={"100%"}
				h={{
					xs: "40vh",
					sm: "40vh",
					md: "40vh",
					lg: "90vh",
					xl: "70vh",
				}}
				p={"0 15%"}>
				<ProfilePresentation />
			</Box>
		</Flex>
	);
}

export default ProfilePage;
