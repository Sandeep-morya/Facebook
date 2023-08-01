import {
	ActionIcon,
	Box,
	Burger,
	Drawer,
	Flex,
	Group,
	Image,
	Input,
	SimpleGrid,
} from "@mantine/core";
import React, { useState } from "react";
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
import Sidebar from "../Main/Sidebar";
import { useUserProfile } from "../../Provider/UserContextProvider";
import { modalCloseButtonStyle } from "../Main/Post";
import Logo from "./Logo";
import Contacts from "../Main/Contacts";
import NavButton from "./NavButton";
import { ImExit } from "react-icons/im";
import { useToken } from "../../Provider/AuthContextProvider";
import SocketProvider from "../../Provider/SocketContextProvider";
import SearchModal from "./SearchModal";
type Props = {};

function MobileNav({}: Props) {
	const [opened, { toggle }] = useDisclosure(false);
	const label = opened ? "Close navigation" : "Open navigation";
	const { isLoading, isError, userdata } = useUserProfile();
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(false);
	const { removeToken } = useToken();

	if (!userdata) {
		return <></>;
	}

	return (
		<Flex bg={"white"} w={"100%"} h="8rem" direction={"column"}>
			<Flex justify={"space-between"} p="0.5rem 1rem">
				<TextLogo />
				<Flex gap="0.5rem" align={"center"}>
					<IconButton
						title="Search"
						Icon={FaSearch}
						notficationCount={0}
						onClick={() => setShow(!show)}
					/>
					<IconButton
						title="Messenger"
						Icon={FaFacebookMessenger}
						notficationCount={0}
						onClick={() => setOpen(true)}
					/>

					{show && <SearchModal setShowSearchModal={setShow} />}

					<Drawer
						opened={open}
						onClose={() => setOpen(false)}
						title={<TextLogo />}
						position="right"
						closeButtonProps={modalCloseButtonStyle}>
						<SocketProvider>
							<Contacts />
						</SocketProvider>
					</Drawer>
					<Burger opened={opened} onClick={toggle} aria-label={label} />
					<Drawer
						opened={opened}
						onClose={toggle}
						title={<TextLogo />}
						closeButtonProps={modalCloseButtonStyle}>
						<Sidebar user={userdata} />
						<NavButton
							onClick={() => removeToken()}
							Icon={ImExit}
							name="Log Out"
						/>
					</Drawer>
				</Flex>
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
