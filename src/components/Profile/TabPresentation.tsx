import {
	ActionIcon,
	Avatar,
	BackgroundImage,
	Box,
	Button,
	FileButton,
	Flex,
	Group,
	LoadingOverlay,
	Modal,
	Stack,
	Text,
	Title,
} from "@mantine/core";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";
import { FaCamera, FaEye, FaPencilAlt } from "react-icons/fa";
import { MdAdd, MdChat } from "react-icons/md";
import { TbDots } from "react-icons/tb";
import { UserProfileType } from "../../types";
import AvatarButton from "../Common/AvatarButton";
import TexTab from "./TexTab";

type Props = {
	user: UserProfileType;
	visitor: boolean;
	setProfileImageFile: React.Dispatch<React.SetStateAction<File | null>>;
	isLoading: boolean;
	inProgress: boolean;
	inView: boolean;
};

function TabPresentation({
	user,
	visitor,
	setProfileImageFile,
	isLoading,
	inProgress,
}: Props) {
	const [open, setOpen] = useState(false);
	const { ref, inView } = useInView({ threshold: 0.5 });

	return (
		<Flex
			w={"100%"}
			h="100%"
			mih="50vh"
			pos={"relative"}
			direction="column"
			justify={"space-between"}>
			{/*---:: Cover Image ::---*/}
			<Box
				aria-labelledby="cover-image"
				w={"100%"}
				mih="50%"
				ref={ref}
				h="20vh"
				pos={"relative"}>
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
							<FileButton onChange={() => {}} accept="image/png,image/jpeg">
								{(props) => (
									<ActionIcon size={"xl"} bg="white" radius={"xl"} {...props}>
										<FaCamera size={22} color="black" />
									</ActionIcon>
								)}
							</FileButton>
						)}
					</Group>
				</BackgroundImage>
			</Box>

			{/* Profile Photo */}
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					height: "40%",
					aspectRatio: "1",
					transform: "translate(-50%,-50%)",
				}}>
				<Modal
					opened={open}
					onClose={() => setOpen(false)}
					size="xl"
					transitionProps={{ transition: "fade", duration: 200 }}>
					<img
						style={{
							width: "100%",
							height: "100%",
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

						border: ".3rem solid white",
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
					pos="absolute">
					<LoadingOverlay
						sx={{ borderRadius: "50%" }}
						loaderProps={{ color: "dark" }}
						visible={isLoading || inProgress}
					/>
				</Box>
			</Box>
			<Flex direction={"column"} gap="0.5rem" align={"center"} pos="relative">
				<Title order={2}>{user.name}</Title>

				<Box sx={{ position: "absolute", right: "1rem", top: "-20%" }}>
					{visitor ? (
						<ActionIcon size="xl" bg="blue" radius={"xl"}>
							<MdChat size={22} color="white" />
						</ActionIcon>
					) : (
						<Stack pr={"1rem"}>
							<ActionIcon size="xl" bg="blue" radius={"xl"}>
								<MdAdd size={22} color="white" />
							</ActionIcon>
							<ActionIcon size="xl" bg="gray" radius={"xl"}>
								<FaPencilAlt size={22} color="white" />
							</ActionIcon>
						</Stack>
					)}
				</Box>

				<Avatar.Group spacing="sm">
					<Avatar src="https://picsum.photos/200?random" radius="xl" />
					<Avatar src="https://picsum.photos/200?random=2" radius="xl" />
					<Avatar src="https://picsum.photos/200?random=3" radius="xl" />
					<Avatar src="https://picsum.photos/200?random=4" radius="xl" />
					<Avatar src="https://picsum.photos/200?random=5" radius="xl" />
					<Avatar src="https://picsum.photos/200?random=6" radius="xl" />
					<Avatar radius="xl">+5</Avatar>
				</Avatar.Group>

				<Flex
					justify={"space-between"}
					align="center"
					w="100%"
					sx={{
						flex: 1,
					}}>
					<Flex w="100%" h="100%" align={"center"}>
						{inView ? (
							["Posts", "About", "Friends", "Photos"].map((e, i) => (
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
		</Flex>
	);
}

export default TabPresentation;
