import {
	Avatar,
	Box,
	Divider,
	Flex,
	Input,
	SimpleGrid,
	Title,
} from "@mantine/core";
import React from "react";
import AvatarButton from "../Common/AvatarButton";
import PostButton from "./PostButton";

type Props = {
	src: string;
	firstName: string;
};

function UploadPost({ src, firstName }: Props) {
	return (
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
			<Flex justify={"space-between"} gap="1rem" p={"0.15rem"} align={"center"}>
				<Avatar
					size={"3rem"}
					radius="xl"
					color={"blue"}
					src={src}
					alt={firstName}
				/>
				<Input
					size={"md"}
					sx={{ flexGrow: 1 }}
					variant="filled"
					placeholder={`What's on your mind, ${firstName}?`}
					radius="xl"
				/>
			</Flex>
			<Divider />
			<SimpleGrid cols={3}>
				<PostButton
					src="https://res.cloudinary.com/due9pi68z/image/upload/v1680801000/nc04qapjayg7vmcpahsr.png"
					name="Live Video"
				/>
				<PostButton
					src="https://res.cloudinary.com/due9pi68z/image/upload/v1680801000/qb0twxbxypd5kqfid0sn.png"
					name={"photo/video"}
				/>
				<PostButton
					src="https://res.cloudinary.com/due9pi68z/image/upload/v1680801000/ogtw3u3pfka7dnu8inbw.png"
					name={"Feeling/activity"}
				/>
			</SimpleGrid>
		</Flex>
	);
}

export default UploadPost;
