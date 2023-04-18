import { Divider, Flex, Group, Input, Stack } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { MdSearch, MdVideoCall } from "react-icons/md";
import { TbDots } from "react-icons/tb";
import { useSocket } from "../../Provider/SocketContextProvider";
import { useUserProfile } from "../../Provider/UserContextProvider";
import BirthdayTilte from "../Common/BirthdayTile";
import ContactTile from "../Common/ContactTile";
import Heading from "../Common/Heading";

type Props = {};
// const birthdays = ["Abcd Kumar", "Wxyz Singh"];

function Contacts({}: Props) {
	const { userdata } = useUserProfile();
	const socket = useSocket();
	const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

	useEffect(() => {
		if (socket) {
			socket.on("server:activeUsers", (activeUsers) => {
				setOnlineUsers(activeUsers);
			});
		}
		return () => {
			if (socket) {
				socket.off("server:activeUsers", (activeUsers) => {
					setOnlineUsers(activeUsers);
				});
			}
		};
	}, [socket]);

	return (
		<Flex
			direction={"column"}
			gap="1rem"
			h="90vh"
			justify={"space-between"}
			p={"0 1rem"}>
			{/*---:: Birthdays ::---*/}
			<Stack h="50%" sx={{ justifySelf: "flex-start" }}>
				<Heading name="Global Users" />
				{/* <Input
					size="md"
					radius={"xl"}
					icon={<MdSearch size={22} />}
					placeholder="Enter name of user"
				/> */}
				<Flex direction={"column"} gap="0.5rem">
					{onlineUsers
						.filter((e) => e != userdata?._id)
						.map((e) => (
							<ContactTile id={e} key={e} online={false} />
						))}
				</Flex>
			</Stack>

			{/* <Divider /> */}

			<Stack sx={{ flex: 1 }}>
				<Flex justify={"space-between"} align="center">
					<Heading name=" Your Contacts" />
					<Flex gap={"1rem"}>
						<MdVideoCall size={20} /> <MdSearch size={20} />{" "}
						<TbDots size={20} />
					</Flex>
				</Flex>

				{/*---:: Online Contacts ::---*/}
				<Flex direction={"column"}>
					{onlineUsers
						.filter((e) => userdata?.friends.includes(e))
						.map((e) => (
							<ContactTile id={e} key={e} story={" "} />
						))}
				</Flex>
			</Stack>
		</Flex>
	);
}

export default Contacts;
