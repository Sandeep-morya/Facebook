import {
	ActionIcon,
	Autocomplete,
	Avatar,
	Badge,
	Box,
	Burger,
	Drawer,
	Flex,
	Group,
	Input,
	SimpleGrid,
	Tabs,
} from "@mantine/core";
import React, { useState } from "react";
import Logo from "./Logo";
import { FaSearch, FaFacebookMessenger, FaLaptopHouse } from "react-icons/fa";
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
import { TbMenu2 } from "react-icons/tb";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import MobileNav from "./MobileNav";
import SearchResultList from "./SearchModal";
import SearchModal from "./SearchModal";
import AccountModal from "./AccountModal";
import { UserProfileType } from "../../types";
import { useUserProfile } from "../../Provider/UserContextProvider";
import Sidebar from "../Main/Sidebar";

type Props = {
	unActive?: boolean;
};

function Navbar({ unActive }: Props) {
	const matches = useMediaQuery("(max-width: 62em)");
	const mobile = useMediaQuery("(max-width: 720px)");
	const [opened, { toggle }] = useDisclosure(false);
	const label = opened ? "Close navigation" : "Open navigation";
	const [showSearchModal, setShowSearchModal] = useState(false);
	const [showAccountModal, setShowAccountModal] = useState(false);
	const { isLoading, isError, userdata } = useUserProfile();

	if (!userdata) {
		return <></>;
	}

	return (
		/* Moblie Navbar */
		//
		mobile ? (
			<MobileNav />
		) : (
			<SimpleGrid
				cols={3}
				h={"3.5rem"}
				sx={{
					width: "100%",
					backgroundColor: "white",
					boxShadow: "rgba(0, 0, 0, 0.1) 0px 15px 20px -20px",
					alignItems: "center",
					padding: "0 1rem",
				}}>
				<Flex h={"3.5rem"} align="center" justify={"flex-start"} gap={"0.5rem"}>
					<Logo />
					<Box
						sx={{
							position: "relative",
						}}>
						{matches ? (
							<IconButton title="Search" Icon={FaSearch} notficationCount={0} />
						) : (
							<Input
								size={"md"}
								variant="filled"
								onFocus={() => setShowSearchModal(true)}
								icon={<FaSearch />}
								placeholder="Search Facebook"
								radius="xl"
							/>
						)}
						{showSearchModal && <SearchModal {...{ setShowSearchModal }} />}
					</Box>
				</Flex>

				<Flex h={"3.5rem"} justify={"space-evenly"}>
					<TabIcon
						title="Home"
						Icon={AiOutlineHome}
						SelectedIcon={AiFillHome}
						active={!unActive}
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

				{matches ? (
					<Flex gap={"0.5rem"} justify="flex-end" h={"3.5rem"} align="center">
						<Burger opened={opened} onClick={toggle} aria-label={label} />
						<Drawer opened={opened} onClose={toggle} withCloseButton={false}>
							<Sidebar user={userdata} />
						</Drawer>
					</Flex>
				) : (
					<Flex gap={"0.5rem"} justify="flex-end" h={"3.5rem"} align="center">
						<IconButton
							title="Menu"
							Icon={BsGrid3X3GapFill}
							notficationCount={0}
						/>
						<IconButton
							title="Messenger"
							Icon={FaFacebookMessenger}
							notficationCount={0}
						/>
						<IconButton
							title="Notifications"
							Icon={MdNotifications}
							notficationCount={0}
						/>

						<ActionIcon ml="0.5rem" pos={"relative"}>
							<Avatar
								size={"2.8rem"}
								radius="xl"
								onClick={() => setShowAccountModal(!showAccountModal)}
								color={"blue"}
								src={userdata.image}
								alt={userdata.name}
							/>
							{showAccountModal && <AccountModal />}
						</ActionIcon>
					</Flex>
				)}
			</SimpleGrid>
		)
	);
}

export default Navbar;
