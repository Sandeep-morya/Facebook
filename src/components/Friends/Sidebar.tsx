import { ActionIcon, Flex, Title, useMantineTheme } from "@mantine/core";
import React from "react";
import { FaGift, FaUserFriends, FaUserPlus } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import {
	RiContactsFill,
	RiUserSharedFill,
	RiUserStarFill,
} from "react-icons/ri";
import NavButton from "../Header/NavButton";

type Props = {
	tabIndex: number;
	setTabIndex: React.Dispatch<React.SetStateAction<number>>;
};

const sidebarData = [
	{ name: "Home", Icon: FaUserFriends },
	{ name: "Friend Requests", Icon: RiUserSharedFill },
	{ name: "Suggestions", Icon: FaUserPlus },
	{ name: "All Friends", Icon: RiContactsFill },
	{ name: "Birthdays", Icon: FaGift },
	{ name: "Custom Lists", Icon: RiUserStarFill },
];

function Sidebar({ tabIndex, setTabIndex }: Props) {
	const theme = useMantineTheme();
	return (
		<Flex
			direction={"column"}
			bg="white"
			p="0.5rem"
			sx={{
				boxShadow: "0 0 15px rgba(0,0,0,0.2)",
				clipPath: "inset(0px -15px 0px 0px)",
			}}
			w={{
				lg: "25%",
				xl: "22%",
			}}
			gap={"0.5rem"}
			h="100vh">
			<Flex p="0.5rem" justify={"space-between"} align="center">
				<Title order={3}>Firends</Title>
				<ActionIcon size={"lg"} bg={theme.colors.dark[0]} radius={"xl"}>
					<MdSettings size={22} color="black" />
				</ActionIcon>
			</Flex>

			{sidebarData.map((e, i) => (
				<NavButton
					key={e.name}
					{...e}
					onClick={() => setTabIndex(i)}
					active={tabIndex === i}
					withAngle={tabIndex != i}
				/>
			))}
		</Flex>
	);
}

export default Sidebar;
