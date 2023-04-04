import { Flex } from "@mantine/core";
import React from "react";
import Navbar from "../components/Header/Navbar";

type Props = {};

const Homepage = (props: Props) => {
	return (
		<Flex w={"100%"} h="100vh" bg="#F0F2F5">
			<Navbar />
		</Flex>
	);
};

export default Homepage;
