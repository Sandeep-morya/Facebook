import { Box, Flex, Modal, SimpleGrid, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSearchPosts from "../../hooks/useSearchPosts";
import { useUserProfile } from "../../Provider/UserContextProvider";
import { PostType } from "../../types";
import { modalCloseButtonStyle } from "../Main/Post";

type Props = {
	posts: PostType[];
};
const MyImage = ({ url }: { url: string }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Box
				onClick={() => setOpen(true)}
				sx={{
					backgroundImage: `url(${url})`,
					width: "100%",
					aspectRatio: "1",
					backgroundSize: "cover",
				}}></Box>
			<Modal
				opened={open}
				onClose={() => setOpen(false)}
				fullScreen
				centered
				closeButtonProps={modalCloseButtonStyle}
				transitionProps={{ transition: "fade", duration: 200 }}>
				<img
					style={{
						width: "100%",
						height: "100%",
						maxHeight: "80vh",
						objectFit: "contain",
					}}
					src={url}
					alt="Preview"
				/>
			</Modal>
		</>
	);
};
function Photos({ posts }: Props) {
	const [all, setAll] = useState(9);

	return (
		<Flex
			bg="white"
			w={"100%"}
			direction="column"
			sx={{
				borderRadius: "0.5rem",
				boxShadow:
					" rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
			}}>
			<Flex w={"100%"} align={"center"} justify="space-between" p="1rem">
				<Title order={2}>Photos</Title>
				<Text
					sx={{ cursor: "default" }}
					onClick={() => setAll(all === 9 ? 12 : 9)}
					c="blue">
					{"See All Photos"}
				</Text>
			</Flex>
			<SimpleGrid
				cols={3}
				m="1rem"
				mt={0}
				spacing={5}
				sx={{ borderRadius: "0.5rem", overflow: "hidden" }}>
				{new Array(12)
					.fill("photos")
					.slice(0, all)
					.map((e, i) => (
						<MyImage
							key={e + i}
							url={`https://picsum.photos/1920/1080?random=${i + 1}`}
						/>
					))}

				{/* {posts.slice(0, all).map((post) => (
					<MyImage key={post._id} url={post.url} />
				))} */}
			</SimpleGrid>
		</Flex>
	);
}

export default Photos;
