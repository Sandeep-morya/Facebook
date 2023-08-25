import { Box, Flex } from "@mantine/core";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import axios, { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import LoadingScreen from "../components/Common/LoadingScreen";
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
import Footer from "../components/Footer/Footer";

type Props = {};

const { VITE_API_URL, VITE_TOKEN_SECRET } = import.meta.env;

function ProfilePage({}: Props) {
	const [scroll, scrollTo] = useWindowScroll();
	const ref = useRef<HTMLDivElement>(null);
	const tabletView = useMediaQuery("(max-width: 62em)");
	const moblieView = useMediaQuery("(max-width: 720px)");

	const params = useParams();
	const { userdata: LoggedInUser } = useUserProfile();

	const {
		isError: userError,
		userdata,
		getUserProfile,
	} = useSearchUser(params.id || "");

	const { isLoading, isError, posts, getPosts } = useSearchPosts(params.id);

	useEffect(() => {
		window.document.title = `Facebook - ${userdata?.name || ""}` || "Facebook";
		scrollTo({ y: 200 });
	}, [userdata]);

	if (userError) {
		return <Navigate to="/error" />;
	}

	if (!userdata) {
		return <LoadingScreen />;
	}

	return (
		<Flex w={"100%"} mih="100vh" direction={"column"} bg="#F0F2F5">
			<Box w={"100%"} sx={{ position: "sticky", zIndex: 100, top: "0" }}>
				<Navbar unActive />
			</Box>

			<Box
				w={"100%"}
				ref={ref}
				bg="white"
				h={{
					xs: "60vh",
					sm: "50vh",
					md: "90vh",
					lg: "90vh",
					xl: "70vh",
				}}
				sx={{
					position: "sticky",
					top: `calc(-${ref.current?.offsetHeight}px + ${
						moblieView ? "11rem" : "7.5rem"
					} )`,
					zIndex: 45,
					boxShadow: "rgba(0, 0, 0, 0.2) 0px 25px 20px -20px",
				}}
				p={{
					xs: "0",
					sm: "0",
					md: "0 5%",
					lg: "0 15%",
					xl: "0 15%",
				}}>
				<ProfilePresentation
					user={userdata}
					visitor={LoggedInUser?._id != userdata._id}
					refresh={() => {
						getPosts();
						getUserProfile();
					}}
				/>
			</Box>

			<Flex
				aria-labelledby="user-posts"
				gap="1rem"
				p={{
					xs: "0 2%",
					sm: "0 2%",
					md: "0 5%",
					lg: "0 18%",
					xl: "0 18%",
				}}
				mt="1rem"
				mb="3rem">
				{!tabletView && (
					<Flex pos={"sticky"} top="8rem" w="40%" h="100vh" direction="column">
						<Photos posts={posts.filter((post) => post.type === "image")} />
					</Flex>
				)}
				<Flex sx={{ flex: 1 }} gap="1rem" direction="column">
					{LoggedInUser?._id === userdata._id && (
						<UploadPost
							refresh={getPosts}
							name={userdata.name}
							image={userdata.image}
						/>
					)}
					{posts.map((post) => (
						<Post key={post._id} {...{ post }} />
					))}
					<Box mt={"2rem"}>
						<Footer />
					</Box>
				</Flex>
			</Flex>
		</Flex>
	);
}

export default ProfilePage;
