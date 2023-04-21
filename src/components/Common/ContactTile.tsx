import { Avatar, Box, Flex, Modal, Text, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { MdCall, MdVideoCall } from "react-icons/md";
import useSearchUser from "../../hooks/useSearchUser";
import ChatScreen from "../Chat/ChatScreen";
import { modalCloseButtonStyle } from "../Main/Post";
import AvatarButton from "./AvatarButton";

import Havatar from "./Havatar";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

type Props = {
	id: string;
	src?: string;
	online?: boolean;
	story?: string;
};

const ContactTile = ({ id, src, online = true, story }: Props) => {
	const { isLoading, isError, userdata } = useSearchUser(id);

	const [open, setOpen] = useState(false);

	if (isLoading || !userdata) {
		return <></>;
	}

	return (
		<Flex
			w={"100%"}
			align="center"
			sx={{ borderRadius: "0.5rem", "&:hover": { backgroundColor: "#dddddd" } }}
			gap={"1rem"}
			// onClick={() => setOpen(true)}
			p="0.5rem">
			<Havatar
				onClick={() => setOpen(true)}
				{...{ src: userdata.image, story, online, name: userdata.name }}
			/>
			<Title order={5} fw={500} c="black">
				{userdata.name}
			</Title>
			<Modal
				closeButtonProps={modalCloseButtonStyle}
				opened={open}
				onClose={() => {
					setOpen(false);
				}}
				title={
					<Flex align="center" gap="1rem">
						<Havatar
							{...{ src: userdata.image, online, name: userdata.name }}
						/>
						<Flex direction={"column"}>
							<Text fw={600}>{userdata.name}</Text>
							<Text fz="xs">{online ? "Online" : "Offline"}</Text>
						</Flex>
					</Flex>
				}>
				{/* Modal content */}
				<ChatScreen recipient={userdata} />
			</Modal>
		</Flex>
	);
};

export default ContactTile;
