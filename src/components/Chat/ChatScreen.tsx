import { Avatar, Flex, Input, Text, useMantineTheme } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import { BiLike } from "react-icons/bi";
import { FaSmile } from "react-icons/fa";
import { HiGif } from "react-icons/hi2";
import { ImImages } from "react-icons/im";
import { IoTextSharp } from "react-icons/io5";
import {
	MdAddCircle,
	MdOutlineWavingHand,
	MdStickyNote2,
} from "react-icons/md";
import useSearchUser from "../../hooks/useSearchUser";
import { UserProfileType } from "../../types";
import AvatarButton from "../Common/AvatarButton";
import Button from "../Misc/BubbleButton";
import Chats from "./Chats";

type Props = {
	recipient: UserProfileType;
};

function ChatScreen({ recipient }: Props) {
	const theme = useMantineTheme();
	const { ref, hovered } = useHover();

	return (
		<Flex
			direction={"column"}
			sx={{
				borderTop: "0.1rem solid rgba(0,0,0,0.1)",
				// borderBottom: "0.1rem solid rgba(0,0,0,0.1)",
			}}>
			{/*---:: Chats ::---*/}
			<Flex
				justify={"center"}
				w="100%"
				align="center"
				sx={{
					height: "calc(65vh - 2rem)",
					overflowY: "scroll",
					"&::-webkit-scrollbar": { width: "8px" },
					"&::-webkit-scrollbar-thumb": {
						background: "rgba(0, 0, 0, 0.2)",
						borderRadius: "1rem",
					},
					"&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
				}}>
				{recipient.chats.length < 1 && (
					<Flex ref={ref} direction={"column"} align="center" gap={"md"}>
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
							style={{
								boxShadow: "none",
								background: hovered ? theme.colors.blue[5] : "none",
								color: hovered ? "white" : theme.colors.gray[5],
							}}>
							Send a Hi <MdOutlineWavingHand />
						</Button>
					</Flex>
				)}

				{recipient.chats.length < 0 && <Chats />}
			</Flex>
			{/*---:: Send Bar ::---*/}ḍ
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
	);
}

export default ChatScreen;
