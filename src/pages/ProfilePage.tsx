import { Box, Flex } from "@mantine/core";
import axios, { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Post from "../components/Main/Post";
import UploadPost from "../components/Main/UploadPost";
import Photos from "../components/Profile/Photos";
import ProfilePresentation from "../components/Profile/ProfilePresentation";
import useAlert from "../hooks/useAlert";
import useGetCookie from "../hooks/useGetCookie";
import useSearchPosts from "../hooks/useSearchPosts";
import useSearchUser from "../hooks/useSearchUser";
import { useUserProfile } from "../Provider/UserContextProvider";
import { PostType, UserProfileType } from "../types";

type Props = {};

const { VITE_API_URL, VITE_TOKEN_SECRET } = import.meta.env;

function ProfilePage({}: Props) {
	const params = useParams();
	const { userdata: LoggedInUser } = useUserProfile();
	const { isError: userError, userdata } = useSearchUser(params.id || "");
	const { isLoading, isError, posts, getPosts } = useSearchPosts(params.id);

	useEffect(() => {
		window.document.title = `Facebook - ${userdata?.name || ""}` || "Facebook";
	}, [userdata]);

	console.log({ posts });

	if (userError) {
		return <Navigate to="/error" />;
	}

	if (!userdata) {
		return <>Loading....</>;
	}

	return (
		<Flex w={"100%"} mih="100vh" direction={"column"} bg="#F0F2F5">
			<Box w={"100%"} sx={{ position: "sticky", zIndex: 100, top: "0" }}>
				<Navbar unActive />
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
				<ProfilePresentation
					user={userdata}
					visitor={LoggedInUser?._id != userdata._id}
				/>
			</Box>

			<Flex gap="1rem" p={"0 18%"} mt="1rem" mb="3rem" pos={"sticky"} top="10%">
				<Flex w="40%" h="100vh" direction="column">
					<Photos />
				</Flex>
				<Flex w="60%" h="100vh" gap="1rem" direction="column">
					{LoggedInUser?._id === userdata._id && (
						<UploadPost refresh={getPosts} />
					)}
					{posts.map((post) => (
						<Post key={post._id} {...{ post }} />
					))}
				</Flex>
			</Flex>
		</Flex>
	);
}

export default ProfilePage;
