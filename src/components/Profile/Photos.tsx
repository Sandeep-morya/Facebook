import { Box, Flex, Modal, SimpleGrid, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useSearchPosts from "../../hooks/useSearchPosts";
import { useUserProfile } from "../../Provider/UserContextProvider";
import { PostType } from "../../types";

type Props = {
	posts: PostType[];
};
const MyImage = ({ url }: { url: string }) => {
	// const [open,setOpen] = useState(false)
	return (
		<Box
			sx={{
				backgroundImage: `url(${url})`,
				width: "100%",
				aspectRatio: "1",
				backgroundSize: "cover",
			}}>
			{/* <Modal
				title={post.url}
				fullScreen
				opened={open}
				onClose={() => {
					setOpen(false);
				}}
				// size="xl"
				transitionProps={{ transition: "fade", duration: 200 }}>

				<img
					style={{
						width: "100%",
						height: "80vh",

						objectFit: "contain",
					}}
					src={post.url}
					alt="Preview"
				/>
			</Modal> */}
		</Box>
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
				<Text onClick={() => setAll(all === 9 ? posts.length : 9)} c="blue">
					{"See All Photos"}
				</Text>
			</Flex>
			<SimpleGrid
				cols={3}
				m="1rem"
				mt={0}
				spacing={5}
				sx={{ borderRadius: "0.5rem", overflow: "hidden" }}>
				{posts.slice(0, all).map((post) => (
					<MyImage key={post._id} url={post.url} />
				))}
			</SimpleGrid>
		</Flex>
	);
}

export default Photos;
