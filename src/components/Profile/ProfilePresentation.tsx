import {
	ActionIcon,
	BackgroundImage,
	Box,
	Button,
	Center,
	FileButton,
	Flex,
	Group,
	Image,
	Loader,
	Title,
	LoadingOverlay,
	Text,
	Avatar,
	Divider,
	Modal,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCamera, FaEye, FaPencilAlt } from "react-icons/fa";
import { MdAdd, MdChat } from "react-icons/md";
import { TbDots } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import useCloudynaryImageUpload from "../../hooks/useCloudynaryImageUpload";
import useUpdateProfile from "../../hooks/useUpdateProfile";
import { useToken } from "../../Provider/AuthContextProvider";
import { UserProfileType } from "../../types";
import AvatarButton from "../Common/AvatarButton";
import { modalCloseButtonStyle } from "../Main/Post";
import TabPresentation from "./TabPresentation";
import TexTab from "./TexTab";

type Props = {
	user: UserProfileType;
	visitor: boolean;
	refresh: () => void;
};
const { VITE_API_URL } = import.meta.env;

function ProfilePresentation({ user, visitor, refresh }: Props) {
	const tabletView = useMediaQuery("(max-width: 62em)");

	const [profileImageFile, setProfileImageFile] = useState<File | null>(null);
	const [coverImage, setCoverImage] = useState<File | null>(null);
	const { token } = useToken();
	// For toggling navbar below profile picture
	const { ref, inView, entry } = useInView();
	// For uplaod single image on Cloudaynary
	const { isLoading, imageURL, uploadImage } = useCloudynaryImageUpload();
	const { isLoading: inProgress, updateProfile } = useUpdateProfile();

	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (profileImageFile) {
			uploadImage(profileImageFile);
		}
	}, [profileImageFile]);

	useEffect(() => {
		if (imageURL != "") {
			updateProfile({ image: imageURL }).then(() => {
				const post = {
					type: "image",
					text: `${user.name} updated this Profile Picture`,
					url: imageURL,
				};
				axios
					.post(`${VITE_API_URL}/post/create`, post, {
						headers: { Authorization: token },
					})
					.then(refresh);
			});
		}
	}, [imageURL, VITE_API_URL]);

	return tabletView ? (
		<TabPresentation
			{...{ user, visitor, setProfileImageFile, isLoading, inProgress, inView }}
		/>
	) : (
		<Flex w={"100%"} h="100%" direction="column">
			{/*---:: Cover Image ::---*/}
			<Box aria-labelledby="cover-image" w={"100%"} h="65%" pos={"relative"}>
				<BackgroundImage
					w={"100%"}
					h="100%"
					bgp={"0 10%"}
					src={
						user.cover == ""
							? "https://picsum.photos/1920/1080?random"
							: user.cover
					}
					sx={{ borderRadius: "0 0 0.5rem 0.5rem" }}>
					<Group
						sx={{
							position: "absolute",
							bottom: "5%",
							right: "2%",
						}}>
						{!visitor && (
							<FileButton
								onChange={setCoverImage}
								accept="image/png,image/jpeg">
								{(props) => (
									<Button
										variant={"default"}
										leftIcon={<FaCamera />}
										{...props}>
										Edit Cover Photo
									</Button>
								)}
							</FileButton>
						)}
					</Group>
				</BackgroundImage>
			</Box>

			{/*---:: Profile photo and etc ::---*/}
			<Flex w="100%" h={"25%"} gap="1rem" align={"center"}>
				<Box className="photo-view-upload-container">
					<Modal
						opened={open}
						onClose={() => setOpen(false)}
						size="xl"
						centered
						closeButtonProps={modalCloseButtonStyle}
						transitionProps={{ transition: "fade", duration: 200 }}>
						<img
							style={{
								width: "100%",
								height: "100%",
								maxHeight: "80vh",
								objectFit: "contain",
							}}
							src={user.image}
							alt="Preview"
						/>
					</Modal>
					<img
						style={{
							width: "100%",
							height: "100%",
							objectFit: "cover",
							borderRadius: "50%",
						}}
						src={user.image}
						alt="ds"
					/>
					{/* image uplaod */}
					{visitor ? (
						<FaEye
							size={22}
							onClick={() => setOpen(true)}
							style={{
								position: "absolute",
								bottom: "5%",
								right: "5%",
								filter: "drop-shadow(0 0 5px rgba(0,0,0,0.2))",
								zIndex: 7,
								backgroundColor: "white",
								padding: "0.5rem",
								boxSizing: "content-box",
								borderRadius: "50%",
							}}
						/>
					) : (
						<FileButton
							onChange={setProfileImageFile}
							accept="image/png,image/jpeg">
							{(props) => (
								<ActionIcon
									size={"xl"}
									sx={{
										position: "absolute",
										bottom: "5%",
										right: "5%",
										filter: "drop-shadow(0 0 5px rgba(0,0,0,0.2))",
										zIndex: 7,
									}}
									bg="white"
									radius={"xl"}
									{...props}>
									<FaCamera size={22} color="black" />
								</ActionIcon>
							)}
						</FileButton>
					)}

					<Box
						w="100%"
						h="100%"
						sx={{ zIndex: 6 }}
						top="0"
						left="0"
						onClick={() => setOpen(true)}
						pos="absolute">
						<LoadingOverlay
							sx={{ borderRadius: "50%" }}
							loaderProps={{ color: "dark" }}
							visible={isLoading || inProgress}
						/>
					</Box>
				</Box>

				<Flex sx={{ flex: "1" }} direction={"column"} gap="0.5rem">
					<Title ref={ref}>{user.name}</Title>
					<Text fw={500} c="dimmed">
						624 Friends
					</Text>
					<Flex direction={"row"} justify={"space-between"}>
						<Avatar.Group spacing="sm">
							<Avatar src="https://picsum.photos/200?random" radius="xl" />
							<Avatar src="https://picsum.photos/200?random=2" radius="xl" />
							<Avatar src="https://picsum.photos/200?random=3" radius="xl" />
							<Avatar src="https://picsum.photos/200?random=4" radius="xl" />
							<Avatar src="https://picsum.photos/200?random=5" radius="xl" />
							<Avatar src="https://picsum.photos/200?random=6" radius="xl" />
							<Avatar radius="xl">+5</Avatar>
						</Avatar.Group>
						{visitor ? (
							<Button leftIcon={<MdChat size={22} />} size="md">
								Send a message
							</Button>
						) : (
							<Group pr={"1rem"}>
								<Button leftIcon={<MdAdd />}>Add to Story</Button>
								<Button
									variant="outline"
									color="gray"
									leftIcon={<FaPencilAlt />}>
									Edit Profile
								</Button>
							</Group>
						)}
					</Flex>
				</Flex>
			</Flex>

			<Divider m={"0.25rem"} color="black" />
			{/*---:: Navs ::---*/}

			<Flex
				justify={"space-between"}
				align="center"
				sx={{
					flex: 1,
				}}>
				<Flex h="100%" align={"center"}>
					{inView ? (
						[
							"Posts",
							"About",
							"Friends",
							"Photos",
							"Videos",
							"Check-ins",
							"More",
						].map((e, i) => (
							<TexTab selected={i === 0} key={e}>
								{e}
							</TexTab>
						))
					) : (
						<AvatarButton src={user.image} name={user.name} />
					)}
				</Flex>

				<Box mr="1rem">
					<TbDots size={20} />
				</Box>
			</Flex>
		</Flex>
	);
}

export default ProfilePresentation;
