import React, { useState } from "react";
import { Modal, Button, TextInput, useMantineTheme, Flex } from "@mantine/core";
import { useUserProfile } from "../../Provider/UserContextProvider";
import AvatarButton from "./AvatarButton";
import { MdEmojiEmotions } from "react-icons/md";
import DropZone from "./DropZone";

interface Props {
	opened: boolean;
	close: () => void;
}

export default function UploadModal({ opened, close }: Props) {
	const [files, setFiles] = useState<File[]>([]);
	const { userdata: user } = useUserProfile();
	const theme = useMantineTheme();

	if (!user) {
		return <></>;
	}

	return (
		<Modal
			opened={opened}
			onClose={close}
			title="Create Post"
			size="md"
			centered>
			<Flex direction={"column"} gap="1rem">
				<AvatarButton src={user.image} name={user.name} />
				<TextInput
					variant="unstyled"
					size={"md"}
					rightSection={
						<MdEmojiEmotions size={22} fill={theme.colors.gray[5]} />
					}
					placeholder={`Whats on your mind, ${user.name.split(" ")[0]}?`}
				/>
				<DropZone {...{ files, setFiles }} />
				<Button size={"md"}>Post</Button>
			</Flex>
		</Modal>
	);
}
