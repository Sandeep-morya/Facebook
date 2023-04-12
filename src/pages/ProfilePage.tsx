import { Box, Flex } from "@mantine/core";
import axios, { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Header/Navbar";
import Post from "../components/Main/Post";
import Photos from "../components/Profile/Photos";
import ProfilePresentation from "../components/Profile/ProfilePresentation";
import useAlert from "../hooks/useAlert";
import useGetCookie from "../hooks/useGetCookie";
import { useUserProfile } from "../Provider/UserContextProvider";
import { PostType, UserProfileType } from "../types";

type Props = {};

const { VITE_API_URL, VITE_TOKEN_SECRET } = import.meta.env;

function ProfilePage({}: Props) {
	const {
		isLoading: userLoading,
		isError: userError,
		userdata,
	} = useUserProfile();

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [posts, setPosts] = useState<PostType[]>([]);
	const Alert = useAlert();

	const getPosts = useCallback(
		async (user_id: string) => {
			setIsError(false);
			setIsLoading(true);
			try {
				const { data }: AxiosResponse<PostType[]> = await axios.get(
					VITE_API_URL + "/posts/all",
					{
						params: { user_id },
						headers: { Authorization: VITE_TOKEN_SECRET },
					},
				);
				setPosts(data);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setIsError(true);
				Alert("503 Server Error", "error");
			}
		},
		[VITE_TOKEN_SECRET],
	);

	useEffect(() => {
		window.document.title = `Facebook - ${userdata?.name}` || "Facebook";
		if (userdata?._id) {
			getPosts(userdata._id);
		}
	}, [userdata]);

	if (userLoading || !userdata) {
		return <>Loading....</>;
	}
	if (posts.length < 1) {
		return <></>;
	}
	return (
		<Flex w={"100%"} mih="100vh" direction={"column"} bg="#F0F2F5">
			<Box w={"100%"} sx={{ position: "sticky", zIndex: 100, top: "0" }}>
				<Navbar user={userdata} unActive />
			</Box>

			<Box
				w={"100%"}
				bg="white"
				h={{
					xs: "40vh",
					sm: "40vh",
					md: "40vh",
					lg: "90vh",
					xl: "70vh",
				}}
				sx={{ boxShadow: "rgba(0, 0, 0, 0.5) 0px 15px 20px -20px" }}
				p={"0 15%"}>
				<ProfilePresentation user={userdata} />
			</Box>

			<Flex gap="1rem" p={"0 18%"} mt="1rem" mb="3rem" pos={"sticky"} top="10%">
				<Flex w="40%" h="100vh" direction="column">
					<Photos />
				</Flex>
				<Flex w="60%" h="100vh" gap="1rem" direction="column">
					{posts.map((post) => (
						<Post key={post._id} {...{ post }} />
					))}
				</Flex>
			</Flex>
		</Flex>
	);
}

export default ProfilePage;
