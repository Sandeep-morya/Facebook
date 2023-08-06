import {
	Avatar,
	Box,
	Button,
	CloseButton,
	Divider,
	Flex,
	Group,
	Modal,
	SimpleGrid,
	Text,
	Title,
	Tooltip,
	useMantineTheme,
} from "@mantine/core";
import React, { useMemo, useState } from "react";
import useAlert from "../../hooks/useAlert";
import Havatar from "../Common/Havatar";
import { FaGlobeAsia } from "react-icons/fa";
import PostMenu from "./PostMenu";
import { randomNumber } from "../../hooks/useRandomName";
import { emojiURLs as emoji } from "../../pages";
import { BiComment, BiLike } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";
import { DummyPost as Post } from "../../types";
import useTimeAgo from "../../hooks/useTimeAgo";
import { modalCloseButtonStyle } from "./Post";

interface Props extends Post {
	target: any;
	index: number;
	page: number;
}

const DummyPost = (post: Props) => {
	const alert = useAlert();
	const theme = useMantineTheme();
	const [liked, setLiked] = useState(false);
	const timeago = useTimeAgo(post.publishDate);
	const [open, setOpen] = useState(false);

	const emojiOne = useMemo(() => randomNumber(0, 6), []);
	const emojiTwo = useMemo(() => randomNumber(0, 6), []);
	const emojiThree = useMemo(() => randomNumber(0, 6), []);
	const reactionCount = useMemo(() => randomNumber(10, 999), []);

	return (
		<Box
			ref={post.index === (post.page + 1) * 10 - 1 ? post.target : null}
			bg={"white"}
			sx={{
				width: "100%",
				borderRadius: "0.5rem",
				overflow: "hidden",
				boxShadow:
					" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
			}}>
			{/*---:: Head --> Post Info ::---*/}
			<Flex direction={"column"}>
				<Flex justify={"space-between"} p="0.5rem">
					<Flex gap="0.5rem" align={"center"}>
						<Havatar
							onClick={() => alert("This is a dummy user", "error")}
							src={post.owner.picture}
							name={
								post.owner.title +
								" " +
								post.owner.firstName +
								" " +
								post.owner.lastName
							}
						/>
						<Flex direction={"column"}>
							<Title order={5}>
								{post.owner.title +
									" " +
									post.owner.firstName +
									" " +
									post.owner.lastName}
							</Title>
							<Group>
								<Text fz="sm">{timeago}</Text>
								<FaGlobeAsia size={14} />
							</Group>
						</Flex>
					</Flex>

					<Flex align={"center"} gap="0.5rem">
						<CloseButton
							title="Close popover"
							radius={"xl"}
							size="xl"
							iconSize={25}
						/>
					</Flex>
				</Flex>
				<Flex p={"0.5rem"} gap="0.5rem">
					{post.tags.map((tag, index) => (
						<Text c="blue" key={index + "tag"}>
							# {tag}
						</Text>
					))}
				</Flex>

				<Text p="0.5rem">{post.text} </Text>
			</Flex>

			{/*---:: Body --> Post Media ::---*/}

			<Box
				w={"100%"}
				h="min-content"
				sx={{
					borderTop: "0.1rem solid rgba(0,0,0,0.1)",
					borderBottom: "0.1rem solid rgba(0,0,0,0.1)",
				}}>
				<img
					style={{
						width: "100%",
						maxHeight: "500px",
						height: "100%",
						objectFit: "contain",
					}}
					onClick={() => setOpen(true)}
					src={post.image}
					loading="lazy"
					alt={post.text}
				/>
				{/* Modal */}
				<Modal
					opened={open}
					onClose={() => setOpen(false)}
					fullScreen
					style={{ backgroundColor: "red" }}
					centered
					closeButtonProps={modalCloseButtonStyle}
					transitionProps={{ transition: "fade", duration: 200 }}>
					<Flex p={"0.5rem"} gap="0.5rem">
						{post.tags.map((tag, index) => (
							<Text c="blue" key={index + "tag"}>
								# {tag}
							</Text>
						))}
					</Flex>

					<Text p="0.5rem">{post.text} </Text>
					<img
						style={{
							width: "100%",
							height: "100%",
							maxHeight: "80vh",
							objectFit: "contain",
						}}
						src={post.image}
						loading="lazy"
						alt="Preview"
					/>
				</Modal>
			</Box>

			{/*---:: Footer --> Likes - Comments - Share ::---*/}
			<Flex direction={"column"} p="0.5rem" bg="white">
				<Flex justify={"space-between"} p="0.5rem">
					<Group spacing={5}>
						<Tooltip.Group openDelay={300} closeDelay={100}>
							<Avatar.Group spacing={5}>
								<Tooltip label="Salazar Troop" withArrow>
									<Avatar size={"sm"} src={emoji[emojiOne]} radius="xl" />
								</Tooltip>
								<Tooltip label="Bandit Crimes" withArrow>
									<Avatar size={"sm"} src={emoji[emojiTwo]} radius="xl" />
								</Tooltip>
								<Tooltip label="Jane Rata" withArrow>
									<Avatar size={"sm"} src={emoji[emojiThree]} radius="xl" />
								</Tooltip>
							</Avatar.Group>
						</Tooltip.Group>
						<Text>You and {reactionCount} others</Text>
					</Group>
					<Text>{post.likes} comments</Text>
				</Flex>
				<Divider />
				<SimpleGrid cols={3}>
					<Button
						onClick={() => setLiked(!liked)}
						variant={"subtle"}
						color={liked ? theme.colors.blue[5] : "gray"}
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
};

export default DummyPost;
