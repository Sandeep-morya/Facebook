import { Divider, Flex, Group, Input, Stack, Text, Title } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { MdSearch, MdVideoCall } from "react-icons/md";
import { TbDots } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import SocketProvider, {
	useSocket,
} from "../../Provider/SocketContextProvider";
import { useUserProfile } from "../../Provider/UserContextProvider";
import BirthdayTilte from "../Common/BirthdayTile";
import ContactTile from "../Common/ContactTile";
import Heading from "../Common/Heading";

type Props = {};
// const birthdays = ["Abcd Kumar", "Wxyz Singh"];

function Contacts({}: Props) {
	const { userdata } = useUserProfile();
	const socket = useSocket();
	const navigate = useNavigate();
	const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
	// :: console.log({ onlineUsers });

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
			<Stack
				sx={{
					flex: 1,
					overflowY: "scroll",
					"&::-webkit-scrollbar": { display: "none" },
					"-ms-overflow-style": "none" /* IE 11 */,
					scrollbarWidth: "none",
				}}>
				<Flex justify={"space-between"} align="center">
					<Heading name=" Your Contacts" />
					<Flex gap={"1rem"}>
						<MdVideoCall
							onClick={() => navigate("/connect/global")}
							size={20}
						/>{" "}
						<MdSearch size={20} /> <TbDots size={20} />
					</Flex>
				</Flex>

				{/*---:: Online Contacts ::---*/}
				<Flex direction={"column"}>
					{userdata?.friends.map((e) => (
						<ContactTile
							id={e}
							key={e}
							story={" "}
							online={onlineUsers.includes(e)}
						/>
					))}
				</Flex>
			</Stack>
			<Stack
				h="50%"
				sx={{
					justifySelf: "flex-start",
					overflowY: "scroll",
					"&::-webkit-scrollbar": { display: "none" },
					"-ms-overflow-style": "none" /* IE 11 */,
					scrollbarWidth: "none",
				}}>
				<Heading name="Online Users" />
				<Input
					size="md"
					radius={"xl"}
					icon={<MdSearch size={22} />}
					placeholder="Enter name of user"
				/>
				<Flex direction={"column"} gap="0.5rem">
					<Text fz="sm" color="dimmed">
						To chat with anyone click on "Avatar"
					</Text>
					{onlineUsers.filter((e) => e != userdata?._id).length < 1 && (
						<Title order={4}>😢 No user is online</Title>
					)}
					{onlineUsers
						.filter((e) => e != userdata?._id)
						.map((e) => (
							<ContactTile id={e} key={e} />
						))}
				</Flex>
			</Stack>
		</Flex>
	);
}

export default Contacts;
