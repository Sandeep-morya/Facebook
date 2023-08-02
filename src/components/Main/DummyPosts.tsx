import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";
import { DummyPost } from "../../types";
import { Center, Flex, Loader } from "@mantine/core";
import Post from "./DummyPost";
import { useInView } from "react-intersection-observer";

const { VITE_APP_ID } = import.meta.env;

const DummyPosts = () => {
	const [page, setPage] = useState(0);
	const [posts, setPosts] = useState<DummyPost[]>([]);
	const [loading, setLoading] = useState(false);
	const { ref: target, inView } = useInView({ threshold: 0.7 });

	const getDummyPosts = useCallback(async (page = 0) => {
		try {
			setLoading(true);
			const { data } = await axios.get("https://dummyapi.io/data/v1/post", {
				headers: { "app-id": VITE_APP_ID },
				params: { page, limit: 10 },
			});
			setPosts((e) => [...e, ...(data?.data || [])]);
			console.log(data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	}, []);

	useEffect(() => {
		getDummyPosts(page);
	}, [page]);

	useEffect(() => {
		if (inView) {
			setPage(page + 1);
		}
	}, [inView]);
	console.log({ inView });

	return (
		<Flex
			direction={"column"}
			gap="1rem"
			w="100%"
			h={"auto"}
			align={"flex-start"}>
			{posts.length > 0 &&
				posts.map((post, index) => {
					return (
						<Post
							key={post.id}
							{...post}
							target={target}
							index={index}
							page={page}
						/>
					);
				})}
			{loading && (
				<Center w="100%" py="1rem">
					<Loader variant="bars" />
				</Center>
			)}
		</Flex>
	);
};

export default React.memo(DummyPosts);
