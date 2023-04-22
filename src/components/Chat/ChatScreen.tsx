import { Avatar, Box, Flex, Input, Text, useMantineTheme } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import axios from "axios";
import React, { useCallback, useState, useEffect, useRef } from "react";
import { BiLike } from "react-icons/bi";
import { FaSmile, FaVideo } from "react-icons/fa";
import { HiGif } from "react-icons/hi2";
import { ImImages } from "react-icons/im";
import { IoTextSharp } from "react-icons/io5";
import {
	MdAddCircle,
	MdOutlineWavingHand,
	MdStickyNote2,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useAlert from "../../hooks/useAlert";
import useSearchUser from "../../hooks/useSearchUser";
import { useToken } from "../../Provider/AuthContextProvider";
import { useSocket } from "../../Provider/SocketContextProvider";
import { useUserProfile } from "../../Provider/UserContextProvider";
import { MessageType, UserProfileType } from "../../types";
import AvatarButton from "../Common/AvatarButton";
import Button from "../Misc/BubbleButton";
import Chats from "./Chats";

type Props = {
	recipient: UserProfileType;
};

const { VITE_API_URL } = import.meta.env;

function ChatScreen({ recipient }: Props) {
	const theme = useMantineTheme();
	const { ref, hovered } = useHover();
	const { token } = useToken();
	const socket = useSocket();
	const [room, setRoom] = useState("");

	// ::  ::
	const { userdata: sender } = useUserProfile();
	const [chats, setChats] = useState<MessageType[]>([]);
	const [message, setMessage] = useState("");

	const Alert = useAlert();
	const navigate = useNavigate();

	const getChatRoom = useCallback(async () => {
		if (sender) {
			try {
				const { data } = await axios.post(
					`${VITE_API_URL}/chat/create`,
					{
						members: [sender._id, recipient._id],
					},
					{ headers: { Authorization: token } },
				);
				setRoom(data._id);
			} catch (error) {
				Alert(String(error), "error");
			}
		}
	}, [sender, recipient, token]);

	const getMessages = useCallback(
		async (room: string) => {
			try {
				const { data } = await axios.get(`${VITE_API_URL}/message/${room}`, {
					headers: { Authorization: token },
				});
				setChats(data);
			} catch (error) {}
		},
		[VITE_API_URL, token],
	);

	const AddMessageToDatabase = useCallback(
		async (message: MessageType) => {
			try {
				const { data } = await axios.post(
					`${VITE_API_URL}/message`,
					{ message },
					{ headers: { Authorization: token } },
				);
			} catch (error) {}
		},
		[VITE_API_URL, token],
	);

	const handleMessageSend = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>, message: string) => {
			if (e.key === "Enter" && message != "" && socket) {
				const chat = {
					room,
					message,
					sender: sender!._id,
					recipient: recipient._id,
					time: Date.now(),
				};
				setChats((e) => [...e, chat]);
				socket.emit("client:send-message", chat);
				AddMessageToDatabase(chat);
				setMessage("");
			}
		},
		[sender, socket, room],
	);

	useEffect(() => {
		getChatRoom();
	}, []);

	useEffect(() => {
		if (socket && room != "") {
			getMessages(room);
			socket.emit("client:join-room", room);
		}
	}, [room, socket]);

	useEffect(() => {
		if (socket) {
			socket.on("server:send-message", (chat) => {
				setChats((e) => [...e, chat]);
			});
		}
	}, [socket]);

	if (!sender) {
		return <></>;
	}

	return (
		<Box pos={"relative"}>
			{/*---:: Video call ::---*/}
			<Box
				title="Video-Call"
				onClick={() => navigate(`/connect/${room}`)}
				sx={{
					position: "absolute",
					top: "-1.2cm",
					right: "20%",
					zIndex: 1000,
				}}>
				<FaVideo size={22} color="rgba(0,0,0,0.5)" />
			</Box>
			<Flex
				direction={"column"}
				sx={{
					borderTop: "0.1rem solid rgba(0,0,0,0.1)",
					// borderBottom: "0.1rem solid rgba(0,0,0,0.1)",
				}}>
				{/*---:: Chats ::---*/}
				<Flex justify={"center"} w="100%" align="end" h="60vh" pos="relative">
					{chats.length < 1 && (
						<Flex
							ref={ref}
							direction={"column"}
							align="center"
							gap={"md"}
							top="50%"
							left="50%"
							sx={{ transform: "translate(-50% , -50%)" }}
							pos="absolute">
							<Avatar
								size={"xl"}
								radius={"xl"}
								src={recipient.image}
								alt={recipient.name}
							/>
							<Text>{recipient.name}</Text>
							<Button
								colorScheme={theme.colors.blue[5]}
								size="md"
								onClick={() => setMessage("Hi")}
								style={{
									boxShadow: "none",
									background: hovered ? theme.colors.blue[5] : "none",
									color: hovered ? "white" : theme.colors.gray[5],
								}}>
								Send a Hi <MdOutlineWavingHand />
							</Button>
						</Flex>
					)}

					{chats.length > 0 && <Chats {...{ chats, sender, recipient }} />}
				</Flex>
				{/*---:: Send Bar ::---*/}

				<Flex
					w="100%"
					maw="100%"
					align={"center"}
					gap="1rem"
					justify="space-between"
					sx={{ overflow: "hidden" }}>
					<MdAddCircle color={theme.colors.gray[5]} size={25} />
					<ImImages size={25} color={theme.colors.gray[5]} />
					<MdStickyNote2 size={25} color={theme.colors.gray[5]} />
					<HiGif size={25} color={theme.colors.gray[5]} />
					<Input
						radius={"xl"}
						variant="filled"
						size={"md"}
						c="blue"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						onKeyDown={(e) => handleMessageSend(e, message)}
						icon={<IoTextSharp size={25} color={theme.colors.gray[5]} />}
						rightSection={<FaSmile size={25} color={theme.colors.gray[5]} />}
					/>
					<Button
						colorScheme={theme.colors.blue[5]}
						style={{
							padding: 0,
							background: "none",
							boxShadow: "none",
						}}>
						<BiLike size={25} color={theme.colors.gray[5]} />
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
}

export default ChatScreen;
