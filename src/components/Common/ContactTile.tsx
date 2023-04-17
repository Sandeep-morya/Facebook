import { Avatar, Box, Flex, Modal, Text, Title } from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import React from "react";
import { MdCall, MdVideoCall } from "react-icons/md";
import useSearchUser from "../../hooks/useSearchUser";
import ChatScreen from "../Chat/ChatScreen";
import { modalCloseButtonStyle } from "../Main/Post";
import AvatarButton from "./AvatarButton";

import Havatar from "./Havatar";

type Props = {
	id: string;
	src?: string;
	online?: boolean;
	story?: string;
};

const ContactTile = ({ id, src, online = true, story }: Props) => {
	const { isLoading, isError, userdata } = useSearchUser(id);
	const [opened, { open, close }] = useDisclosure(false);

	if (isLoading || !userdata) {
		return <></>;
	}

	return (
		<Flex
			w={"100%"}
			align="center"
			sx={{ borderRadius: "0.5rem", "&:hover": { backgroundColor: "#dddddd" } }}
			gap={"1rem"}
			onClick={open}
			p="0.5rem">
			<Havatar
				{...{ src: userdata.image, story, online, name: userdata.name }}
			/>
			<Title order={5} fw={500} c="black">
				{userdata.name}
			</Title>
			<Modal
				centered
				opened={opened}
				padding={"0.5rem"}
				closeButtonProps={{ ...modalCloseButtonStyle, mr: "sm" }}
				onClose={close}
				title={
					<Flex>
						<AvatarButton src={userdata.image} name={userdata.name} />
					</Flex>
				}>
				{/* Modal content */}
				<ChatScreen recipient={userdata} />
			</Modal>
		</Flex>
	);
};

export default ContactTile;
