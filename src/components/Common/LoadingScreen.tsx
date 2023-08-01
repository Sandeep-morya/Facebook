import {
	Box,
	Center,
	Flex,
	Input,
	Skeleton,
	useMantineTheme,
} from "@mantine/core";
import React from "react";
import { MdSearch } from "react-icons/md";
import Logo from "../Header/Logo";

type Props = {};

function LoadingScreen({}: Props) {
	const theme = useMantineTheme();
	return (
		<Flex
			bg={theme.colors.gray[2]}
			w="100vw"
			direction={"column"}
			h="100vh"
			sx={{ overflow: "hidden" }}>
			<Flex
				w="100%"
				h="3.5rem"
				bg="white"
				align={"center"}
				p="1rem"
				gap={"1rem"}>
				<Logo />
				<Input
					icon={<MdSearch size={20} />}
					placeholder="Search Meetbook"
					radius={"xl"}
					size="md"
					readOnly
				/>
			</Flex>

			<Skeleton color="red" w="100%" h={"calc(100vh - 4rem)"} />
		</Flex>
	);
}

export default LoadingScreen;
