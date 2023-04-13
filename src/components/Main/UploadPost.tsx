import {
	Avatar,
	Box,
	Divider,
	Flex,
	Input,
	SimpleGrid,
	Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { useUserProfile } from "../../Provider/UserContextProvider";
import AvatarButton from "../Common/AvatarButton";
import UploadModal from "../Common/UploadPostModal";
import PostButton from "./PostButton";

type Props = {
	refresh: () => void;
};

function UploadPost({ refresh }: Props) {
	const [opened, { open, close }] = useDisclosure(false);
	const { isLoading, isError, userdata } = useUserProfile();

	if (!userdata) {
		return <></>;
	}

	return (
		<>
			<UploadModal {...{ opened, close, refresh }} />
			<Flex
				bg={"white"}
				w="100%"
				direction={"column"}
				p="0.5rem"
				gap={"0.5rem"}
				sx={{
					borderRadius: "0.5rem",
					boxShadow:
						" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
				}}>
				<Flex
					justify={"space-between"}
					gap="1rem"
					p={"0.15rem"}
					align={"center"}>
					<Avatar
						size={"3rem"}
						radius="xl"
						color={"blue"}
						src={userdata.image}
						alt={userdata.name}
					/>
					<Input
						size={"md"}
						sx={{ flexGrow: 1 }}
						variant="filled"
						readOnly
						onClick={open}
						placeholder={`What's on your mind, ${userdata.name.split(" ")[0]}?`}
						radius="xl"
					/>
				</Flex>
				<Divider />
				<SimpleGrid cols={3}>
					<PostButton
						src="https://res.cloudinary.com/due9pi68z/image/upload/v1680801000/nc04qapjayg7vmcpahsr.png"
						name="Live Video"
						onClick={open}
					/>
					<PostButton
						src="https://res.cloudinary.com/due9pi68z/image/upload/v1680801000/qb0twxbxypd5kqfid0sn.png"
						name={"photo/video"}
						onClick={open}
					/>
					<PostButton
						src="https://res.cloudinary.com/due9pi68z/image/upload/v1680801000/ogtw3u3pfka7dnu8inbw.png"
						name={"Feeling/activity"}
						onClick={open}
					/>
				</SimpleGrid>
			</Flex>
		</>
	);
}

export default UploadPost;
