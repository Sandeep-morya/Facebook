import {
	Box,
	Button,
	Flex,
	Group,
	LoadingOverlay,
	Skeleton,
	Text,
	useMantineTheme,
} from "@mantine/core";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useAddFriend from "../../hooks/useAddFriend";
import useAlert from "../../hooks/useAlert";
import useSearchUser from "../../hooks/useSearchUser";
import { useToken } from "../../Provider/AuthContextProvider";

type Props = {
	id: string;
	friendRequest?: boolean;
	chat?: boolean;
};

const { VITE_API_URL, VITE_TOKEN_SECRET } = import.meta.env;

function FriendCard({ id, friendRequest, chat }: Props) {
	const theme = useMantineTheme();
	const { isLoading, isError, userdata } = useSearchUser(id);
	const [requestSent, setrequestSent] = useState(false);
	const [requestAccepted, setrequestAccepted] = useState(false);
	const { token } = useToken();
	const Alert = useAlert();

	const addFriend = useCallback(async () => {
		try {
			console.log("called");
			const { data } = await axios.post(
				`${VITE_API_URL}/friend/add`,
				{
					friendRequest: id,
				},
				{ headers: { Authorization: token } },
			);
			setrequestSent(true);
			Alert(data, "success");
		} catch (error) {
			Alert(String(error), "success");
		}
	}, [VITE_API_URL, token, id]);

	const acceptRequest = useCallback(async () => {
		try {
			console.log("called");
			const { data } = await axios.post(
				`${VITE_API_URL}/friend/accept`,
				{
					friendRequest: id,
					users: "manish rahul",
				},
				{ headers: { Authorization: token } },
			);
			setrequestAccepted(true);
			Alert(data, "success");
		} catch (error) {
			Alert(String(error), "success");
		}
	}, [VITE_API_URL, token, id]);

	if (requestAccepted) {
		return <></>;
	}

	if (isError) {
		return <Navigate to="/error" />;
	}

	return (
		<Skeleton w={"11.2rem"} h="350px" visible={isLoading}>
			<Flex
				w={"11.2rem"}
				h="350px"
				direction={"column"}
				pos="relative"
				sx={{
					justifySelf: "flex-start",
					borderRadius: "0.5rem",
					overflow: "hidden",
					boxShadow: "0 0 5px rgba(0,0,0,0.2)",
				}}>
				<Box
					w="100%"
					h="55%"
					mih={"55%"}
					mah="55%"
					bgsz={"cover"}
					bg={`url(${userdata?.image})`}></Box>
				<Flex
					sx={{ flex: 1 }}
					p="0.5rem"
					direction="column"
					justify={"space-between"}
					aria-labelledby="btns-texts"
					bg={"white"}>
					<Text fw={600} fz="1.1rem">
						{" "}
						{userdata?.name}
					</Text>
					<Flex direction={"column"} gap="0.5rem">
						{/*---:: Default ::---*/}
						{!friendRequest && !chat && (
							<Button
								disabled={requestSent}
								onClick={addFriend}
								size={"md"}
								variant={"light"}>
								{requestSent ? "Request Sent" : "Add Friend"}
							</Button>
						)}
						{!friendRequest && !chat && (
							<Button size={"md"} variant={"light"} color={"dark"}>
								Remove
							</Button>
						)}
						{/*---:: Friend Request ::---*/}
						{friendRequest && (
							<Button
								onClick={acceptRequest}
								size={"md"}
								variant={"filled"}
								color="green">
								Accept
							</Button>
						)}
						{friendRequest && (
							<Button size={"md"} variant={"outline"} color={"red"}>
								Reject
							</Button>
						)}
						{/*---:: Chat ::---*/}
						{chat && (
							<Button size={"md"} variant={"filled"} color="blue">
								View Profile
							</Button>
						)}
						{chat && (
							<Button size={"md"} variant={"light"} color={"teal"}>
								Send Message
							</Button>
						)}
					</Flex>
				</Flex>
			</Flex>
		</Skeleton>
	);
}

export default FriendCard;
