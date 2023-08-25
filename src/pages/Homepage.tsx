import { Box, Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { MdVideoCall } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../components/Common/LoadingScreen";
import VideoCallButton from "../components/Common/FixedButton";

import Navbar from "../components/Header/Navbar";
import Contacts from "../components/Main/Contacts";
import Feeds from "../components/Main/Feeds";
import Sidebar from "../components/Main/Sidebar";
import SocketProvider from "../Provider/SocketContextProvider";
import { useUserProfile } from "../Provider/UserContextProvider";
import { useEffect } from "react";

type Props = {};

const Homepage = (props: Props) => {
	const tabletView = useMediaQuery("(max-width: 62em)");
	const moblieView = useMediaQuery("(max-width: 720px)");
	const { isLoading, isError, userdata } = useUserProfile();
	const navigate = useNavigate();

	useEffect(() => {
		window.document.title = "Facebook";
	}, []);

	if (isLoading || !userdata) {
		return <LoadingScreen />;
	}
	return (
		<SocketProvider>
			<Flex
				w={"100%"}
				h="100vh"
				direction={"column"}
				bg="#F0F2F5"
				sx={{ overflow: "hidden" }}>
				<Box w={"100%"} sx={{ position: "sticky", zIndex: 100, top: "0" }}>
					<Navbar />
				</Box>
				<Box
					sx={{
						width: "100%",
						flexGrow: 1,
						display: "grid",
						paddingTop: "1rem",
						gridTemplateColumns: moblieView
							? "1fr"
							: tabletView
							? "1fr max-content"
							: "max-content 1fr max-content",
					}}>
					{/*---:: Sidebar ::---*/}

					{!tabletView && (
						<Box
							w={{
								lg: "14rem",
								xl: "20rem",
							}}
							sx={{
								height: "calc(100vh - 5rem)",
								overflowY: "scroll",
								"&::-webkit-scrollbar": { display: "none" },
								"-ms-overflow-style": "none" /* IE 11 */,
								scrollbarWidth: "none",
							}}>
							<Sidebar user={userdata} />
						</Box>
					)}

					{/*---:: Posts - Story - Reel ::---*/}
					<Box
						sx={{
							height: "calc(100vh - 5rem)",
							overflowY: "scroll",
							"&::-webkit-scrollbar": { width: "8px" },
							scrollbarWidth: "thin",

							"&::-webkit-scrollbar-thumb": {
								background: "rgba(0, 0, 0, 0.2)",
								borderRadius: "1rem",
							},
						}}>
						<Feeds />
						{/* <Center>
						<Loader />
					</Center> */}
					</Box>

					{/*---:: Contacts - Birthday - Groups ::---*/}
					{!moblieView && (
						<Box
							w={{
								lg: "18rem",
								xl: "20rem",
							}}
							sx={{
								height: "calc(100vh - 5rem)",
								overflow: "scroll",
								"&::-webkit-scrollbar": { display: "none" },
								"-ms-overflow-style": "none" /* IE 11 */,
								scrollbarWidth: "none",
							}}>
							<Contacts />
						</Box>
					)}
				</Box>
			</Flex>
		</SocketProvider>
	);
};

export default Homepage;
