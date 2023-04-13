import { Button, Flex } from "@mantine/core";
import axios, { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useAlert from "../../hooks/useAlert";
import useSearchPosts from "../../hooks/useSearchPosts";
import { PostType } from "../../types";
import Post from "./Post";
import StroyNreelTabs from "./StroyNreelTabs";
import UploadPost from "./UploadPost";

type Props = {};

function Feeds({}: Props) {
	const { isLoading, isError, posts, getPosts } = useSearchPosts();

	return (
		<Flex
			w={{
				xs: "100%",
				sm: "100%",
				md: "90%",
				lg: "70%",
				xl: "55%",
			}}
			p="0 0.5rem"
			pb="2rem"
			m="auto"
			direction="column"
			gap={"1rem"}>
			<StroyNreelTabs />
			<UploadPost refresh={getPosts} />

			{/*---:: All Posts ::---*/}

			<Flex
				direction={"column"}
				gap="1rem"
				w="100%"
				h={"auto"}
				align={"flex-start"}>
				{posts.map((post) => (
					<Post key={post._id} {...{ post }} />
				))}
			</Flex>
		</Flex>
	);
}

export default Feeds;
