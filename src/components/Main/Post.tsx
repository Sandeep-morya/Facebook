import {
	Avatar,
	Box,
	Button,
	CloseButton,
	Divider,
	Flex,
	Group,
	Image,
	SimpleGrid,
	Text,
	Title,
	Tooltip,
} from "@mantine/core";
import React, { useCallback, useEffect, useState } from "react";
import { FaGlobeAsia } from "react-icons/fa";
import { TbDots, TbShare3 } from "react-icons/tb";
import Havatar from "../Common/Havatar";
import Ftext from "../Footer/Ftext";
import { emojiURLs as emoji } from "../../pages";
import { BiComment, BiLike } from "react-icons/bi";
import { PostType, UserProfileType } from "../../types";
import axios, { AxiosResponse } from "axios";
import useSearchUser from "../../hooks/useSearchUser";

type Props = {
	post: PostType;
};

function Post({ post }: Props) {
	const { isLoading, isError, userdata } = useSearchUser(post.user_id);

	if (!userdata) {
		return <></>;
	}
	return (
		<Box
			bg={"white"}
			sx={{
				width: "100%",
				borderRadius: "0.5rem",
				boxShadow:
					" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
			}}>
			{/*---:: Head --> Post Info ::---*/}
			<Flex direction={"column"}>
				<Flex justify={"space-between"} p="0.5rem">
					<Flex gap="0.5rem" align={"center"}>
						<Havatar src={userdata.image} online name={userdata.name} />
						<Flex direction={"column"}>
							<Title order={5}>{userdata.name}</Title>
							<Group>
								<Text fz="sm">3 h</Text>
								<FaGlobeAsia size={14} />
							</Group>
						</Flex>
					</Flex>

					<Flex align={"center"}>
						<TbDots size={25} />
						<CloseButton
							title="Close popover"
							radius={"xl"}
							size="xl"
							iconSize={25}
						/>
					</Flex>
				</Flex>
				<Text p="0.5rem">{post.text}</Text>
			</Flex>

			{/*---:: Body --> Post Media ::---*/}
			{post.url !== "" && (
				<Box w={"100%"} h="min-content">
					<img
						style={{ width: "100%", height: "100%", objectFit: "contain" }}
						src={post.url}
						alt={userdata.name}
					/>
				</Box>
			)}

			{/*---:: Footer --> Likes - Comments - Share ::---*/}
			<Flex direction={"column"} p="0.5rem">
				<Flex justify={"space-between"} p="0.5rem">
					<Group spacing={5}>
						<Tooltip.Group openDelay={300} closeDelay={100}>
							<Avatar.Group spacing={5}>
								<Tooltip label="Salazar Troop" withArrow>
									<Avatar size={"sm"} src={emoji.haha} radius="xl" />
								</Tooltip>
								<Tooltip label="Bandit Crimes" withArrow>
									<Avatar size={"sm"} src={emoji.like} radius="xl" />
								</Tooltip>
								<Tooltip label="Jane Rata" withArrow>
									<Avatar size={"sm"} src={emoji.wow} radius="xl" />
								</Tooltip>
							</Avatar.Group>
						</Tooltip.Group>
						<Text>You and 250 others</Text>
					</Group>
					<Text>{post.comments.length} comments</Text>
				</Flex>
				<Divider />
				<SimpleGrid cols={3}>
					<Button
						variant={"subtle"}
						color="gray"
						size={"md"}
						leftIcon={<BiLike size={22} />}>
						Like
					</Button>
					<Button
						size={"md"}
						variant={"subtle"}
						color="gray"
						leftIcon={<BiComment size={20} />}>
						Comment
					</Button>
					<Button
						variant={"subtle"}
						color="gray"
						size={"md"}
						leftIcon={<TbShare3 size={22} />}>
						Share
					</Button>
				</SimpleGrid>
			</Flex>
		</Box>
	);
}

export default Post;
