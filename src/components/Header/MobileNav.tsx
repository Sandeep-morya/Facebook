import {
	ActionIcon,
	Box,
	Burger,
	Flex,
	Group,
	Image,
	SimpleGrid,
} from "@mantine/core";
import React from "react";
import { TbMenu2 } from "react-icons/tb";
import { FaFacebookMessenger, FaSearch } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import {
	MdNotifications,
	MdOndemandVideo,
	MdVideoLibrary,
	MdOutlineTableRows,
	MdTableRows,
} from "react-icons/md";
import IconButton from "./ActionIcon";
import TabIcon from "./TabIcon";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { IoStorefrontOutline, IoStorefront } from "react-icons/io5";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { useDisclosure } from "@mantine/hooks";
import TextLogo from "./TextLogo";
type Props = {};

function MobileNav({}: Props) {
	const [opened, { toggle }] = useDisclosure(false);
	const label = opened ? "Close navigation" : "Open navigation";
	return (
		<Flex bg={"white"} w={"100%"} h="8rem" direction={"column"}>
			<Flex justify={"space-between"} p="0.5rem 1rem">
				<TextLogo />
				<Group>
					<IconButton title="Search" Icon={FaSearch} notficationCount={0} />
					<IconButton
						title="Messenger"
						Icon={FaFacebookMessenger}
						notficationCount={0}
					/>
					<Burger opened={opened} onClick={toggle} aria-label={label} />
				</Group>
			</Flex>
			<Flex h={"4rem"} justify={"space-evenly"}>
				<TabIcon
					title="Home"
					Icon={AiOutlineHome}
					SelectedIcon={AiFillHome}
					active
				/>
				<TabIcon
					title="Watch"
					Icon={MdOndemandVideo}
					SelectedIcon={MdVideoLibrary}
				/>
				<TabIcon
					title="Marketplace"
					Icon={IoStorefrontOutline}
					SelectedIcon={IoStorefront}
				/>
				<TabIcon
					title="groups"
					Icon={HiOutlineUserGroup}
					SelectedIcon={HiUserGroup}
				/>
				<TabIcon
					title="Feeds"
					Icon={MdOutlineTableRows}
					SelectedIcon={MdTableRows}
				/>
			</Flex>
		</Flex>
	);
}

export default MobileNav;
