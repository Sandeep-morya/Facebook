import { Button, Flex } from "@mantine/core";
import axios, { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useAlert from "../../hooks/useAlert";
import useSearchPosts from "../../hooks/useSearchPosts";
import { useUserProfile } from "../../Provider/UserContextProvider";
import { PostType } from "../../types";
import Post from "./Post";
import StoryNreelTabs from "./StoryNreelTabs";
import UploadPost from "./UploadPost";

function Feeds() {
	const { isLoading, isError, posts, getPosts } = useSearchPosts();
	const { userdata } = useUserProfile();

	if (!userdata) {
		return <></>;
	}

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
			<StoryNreelTabs />
			<UploadPost
				refresh={getPosts}
				name={userdata.name}
				image={userdata.image}
			/>

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
