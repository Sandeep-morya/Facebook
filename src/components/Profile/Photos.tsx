import { Box, Flex, SimpleGrid, Text, Title } from "@mantine/core";
import React from "react";

type Props = {};
const MyImage = ({ url }: { url: string }) => {
	return (
		<Box
			sx={{
				backgroundImage: url,
				width: "100%",
				aspectRatio: "1",
			}}></Box>
	);
};
function Photos({}: Props) {
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
				<MyImage url={"url(https://picsum.photos/200/300?random=1)"} />
				<MyImage url={"url(https://picsum.photos/200/300?random=1)"} />
				<MyImage url={"url(https://picsum.photos/200/300?random=1)"} />
				<MyImage url={"url(https://picsum.photos/200/300?random=1)"} />
				<MyImage url={"url(https://picsum.photos/200/300?random=1)"} />
				<MyImage url={"url(https://picsum.photos/200/300?random=1)"} />
				<MyImage url={"url(https://picsum.photos/200/300?random=1)"} />
				<MyImage url={"url(https://picsum.photos/200/300?random=1)"} />
				<MyImage url={"url(https://picsum.photos/200/300?random=1)"} />
			</SimpleGrid>
		</Flex>
	);
}

export default Photos;
