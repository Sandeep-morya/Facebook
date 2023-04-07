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
import React from "react";
import { FaGlobeAsia } from "react-icons/fa";
import { TbDots, TbShare3 } from "react-icons/tb";
import Havatar from "../Common/Havatar";
import Ftext from "../Footer/Ftext";
import { emojiURLs as emoji } from "../../pages";
import { BiComment, BiLike } from "react-icons/bi";

type Props = {};

function Post({}: Props) {
	return (
		<Box
			bg={"white"}
			sx={{
				width: "100%",
				borderRadius: "0.5rem",
			}}>
			{/*---:: Head --> Post Info ::---*/}
			<Flex direction={"column"}>
				<Flex justify={"space-between"} p="0.5rem">
					<Flex gap="0.5rem" align={"center"}>
						<Havatar
							src="https://res.cloudinary.com/due9pi68z/image/upload/v1679380793/ezbgodogpxxel4aokkfg.jpg"
							online
							name="sandeep"
						/>
						<Flex direction={"column"}>
							<Title order={5}>Sandeep Morya</Title>
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
				<Text p="0.5rem">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt,
					quam quod! Dolorem harum incidunt, deserunt atque adipisci quo nihil
					quaerat laudantium
				</Text>
			</Flex>

			{/*---:: Body --> Post Media ::---*/}
			<Box w={"100%"} h="min-content">
				<img
					style={{ width: "100%", height: "100%", objectFit: "contain" }}
					src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
					alt=""
				/>
			</Box>

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
					<Text>45 comments</Text>
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
