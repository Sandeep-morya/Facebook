import {
	ActionIcon,
	Autocomplete,
	Avatar,
	Badge,
	Box,
	Burger,
	Flex,
	Group,
	Input,
	SimpleGrid,
	Tabs,
} from "@mantine/core";
import React from "react";
import Logo from "./Logo";
import { FaSearch, FaFacebookMessenger } from "react-icons/fa";
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

type Props = {};

function Navbar({}: Props) {
	const matches = useMediaQuery("(max-width: 62em)");
	const mobile = useMediaQuery("(max-width: 40rem)");
	const [opened, { toggle }] = useDisclosure(false);
	const label = opened ? "Close navigation" : "Open navigation";

	return (
		/* Moblie Navbar */
		//
		mobile ? (
			<MobileNav />
		) : (
			<SimpleGrid
				cols={3}
				h={"4rem"}
				sx={{
					width: "100%",
					backgroundColor: "white",
					boxShadow: "rgba(0, 0, 0, 0.1) 0px 15px 20px -20px",
					alignItems: "center",
					padding: "0 1rem",
				}}>
				<Flex h={"4rem"} align="center" justify={"flex-start"} gap={"0.5rem"}>
					<Logo />
					{matches ? (
						<IconButton Icon={FaSearch} notficationCount={0} />
					) : (
						<Input
							size={"md"}
							variant="filled"
							icon={<FaSearch />}
							placeholder="Search Facebook"
							radius="xl"
						/>
					)}
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

				{matches ? (
					<Flex gap={"0.5rem"} justify="flex-end" h={"4rem"} align="center">
						<Burger opened={opened} onClick={toggle} aria-label={label} />
					</Flex>
				) : (
					<Flex gap={"0.5rem"} justify="flex-end" h={"4rem"} align="center">
						<IconButton Icon={BsGrid3X3GapFill} notficationCount={0} />
						<IconButton Icon={FaFacebookMessenger} notficationCount={0} />
						<IconButton Icon={MdNotifications} notficationCount={0} />

						<Avatar
							size={"2.8rem"}
							radius="xl"
							color={"blue"}
							src="https://res.cloudinary.com/due9pi68z/image/upload/v1679227476/g2tb12nyfphkxayv6ood.jpg"
							alt="Sandeep Morya"
						/>
					</Flex>
				)}
			</SimpleGrid>
		)
	);
}

export default Navbar;
