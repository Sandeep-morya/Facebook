import { Flex } from "@mantine/core";
import axios, { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useAlert from "../../hooks/useAlert";
import { PostType } from "../../types";
import Post from "./Post";
import StroyNreelTabs from "./StroyNreelTabs";
import UploadPost from "./UploadPost";

type Props = {};

const { VITE_API_URL, VITE_TOKEN_SECRET } = import.meta.env;

function Feeds({}: Props) {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [posts, setPosts] = useState<PostType[]>([]);
	const Alert = useAlert();

	const getPosts = useCallback(async () => {
		setIsError(false);
		setIsLoading(true);
		try {
			const { data }: AxiosResponse<PostType[]> = await axios.get(
				VITE_API_URL + "/posts/all",
				{ headers: { Authorization: VITE_TOKEN_SECRET } },
			);
			setPosts(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
			Alert("503 Server Error", "error");
		}
	}, [VITE_TOKEN_SECRET]);

	useEffect(() => {
		getPosts();
	}, []);

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
			<UploadPost
				firstName="Sandeep"
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1679380793/ezbgodogpxxel4aokkfg.jpg"
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
