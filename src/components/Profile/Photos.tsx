import { Box, Flex, SimpleGrid, Text, Title } from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import useSearchPosts from "../../hooks/useSearchPosts";
import { useUserProfile } from "../../Provider/UserContextProvider";
import { PostType } from "../../types";

type Props = {
	posts: PostType[];
};
const MyImage = ({ url }: { url: string }) => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${url})`,
				width: "100%",
				aspectRatio: "1",
				backgroundSize: "cover",
			}}></Box>
	);
};
function Photos({ posts }: Props) {
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
				<Text c="blue">{"See All Photos"}</Text>
			</Flex>
			<SimpleGrid
				cols={3}
				m="1rem"
				mt={0}
				spacing={5}
				sx={{ borderRadius: "0.5rem", overflow: "hidden" }}>
				{posts.map((post) => (
					<MyImage key={post._id} url={post.url} />
				))}
			</SimpleGrid>
		</Flex>
	);
}

export default Photos;
