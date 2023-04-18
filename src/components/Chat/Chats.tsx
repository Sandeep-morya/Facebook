import { Box, Flex, Text, useMantineTheme } from "@mantine/core";
import React, { useEffect } from "react";
import { MessageType, UserProfileType } from "../../types";
import TimeAgo from "./TimeAgo";

type Props = {
	chats: MessageType[];
	sender: UserProfileType;
	recipient: UserProfileType;
};

const Chats = React.memo(({ chats, sender, recipient }: Props) => {
	const theme = useMantineTheme();
	const sortedMessages = chats.sort((a, b) => a.time - b.time);
	const lastMessageRef = React.useRef<HTMLDivElement>(null);

	useEffect(() => {
		// scroll to the last message when a new message is added
		if (lastMessageRef.current) {
			setTimeout(() => {
				lastMessageRef!.current!.scrollIntoView({ behavior: "smooth" });
			}, 100);
		}
	}, [chats, lastMessageRef]);

	return (
		<Flex
			direction={"column"}
			w="100%"
			h="auto"
			p={"0.5rem"}
			pb="0"
			mah={"100%"}
			sx={{
				overflowY: "scroll",
				"&::-webkit-scrollbar": { width: "8px" },
				"&::-webkit-scrollbar-thumb": {
					background: "rgba(0, 0, 0, 0.1)",
					borderRadius: "1rem",
				},
				"&::-webkit-scrollbar-track": { backgroundColor: "transparent" },
			}}>
			{sortedMessages.map((message, index) => {
				const isFromSender = message.sender === sender._id;
				const lastmessage = index === sortedMessages.length - 1;

				return (
					<Box
						mb="sm"
						key={message.time}
						ref={lastmessage ? lastMessageRef : null}
						sx={{
							width: "max-content",
							alignSelf: !isFromSender ? "flex-start" : "flex-end",
						}}>
						<Box
							bg={isFromSender ? "blue" : "green"}
							sx={{
								color: "white",
								padding: 8,
								borderRadius: isFromSender
									? "2rem 2rem 0 2rem"
									: "2rem 2rem  2rem 0",
							}}>
							<Text fw={500}>{message.message}</Text>
						</Box>
						<TimeAgo time={message.time} />
					</Box>
				);
			})}
		</Flex>
	);
});

export default Chats;
