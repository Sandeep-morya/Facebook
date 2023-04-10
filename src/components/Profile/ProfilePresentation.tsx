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
} from "@mantine/core";
import React, { useState } from "react";
import { FaCamera, FaPencilAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { TbDots } from "react-icons/tb";
import TexTab from "./TexTab";

type Props = {};

function ProfilePresentation({}: Props) {
	const [file, setFile] = useState<File | null>(null);
	const [loading, setLoading] = useState(false);
	return (
		<Flex w={"100%"} h="100%" direction="column">
			{/*---:: Cover Image ::---*/}
			<Box aria-labelledby="cover-image" w={"100%"} h="65%" pos={"relative"}>
				<BackgroundImage
					w={"100%"}
					h="100%"
					bgp={"0 10%"}
					src="https://scontent.fluh1-1.fna.fbcdn.net/v/t39.30808-6/240517748_1615155945344887_5561738681943572943_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=S4CksW-kh7gAX_o9H80&_nc_oc=AQmaxLyTEEPym8WutmVL0ndjWtGiV6Q2Jlbh1gl4-Z_wZ8tADacSUgQiBRqrBj0JZbY&_nc_ht=scontent.fluh1-1.fna&oh=00_AfCCr7wWlRXCIN5jnGLYkIzgY7BgsoXsJ-kfgz3g1VDgjQ&oe=643600CA"
					sx={{ borderRadius: "0 0 0.5rem 0.5rem" }}>
					<Group
						sx={{
							position: "absolute",
							bottom: "5%",
							right: "2%",
						}}>
						<FileButton onChange={setFile} accept="image/png,image/jpeg">
							{(props) => (
								<Button variant={"default"} leftIcon={<FaCamera />} {...props}>
									Edit Cover Photo
								</Button>
							)}
						</FileButton>
					</Group>
				</BackgroundImage>
			</Box>

			{/*---:: Profile photo and etc ::---*/}
			<Flex w="100%" h={"25%"} gap="1rem" align={"center"}>
				<Box className="photo-view-upload-container">
					<img
						className="profile-photo"
						src={
							"https://scontent.fluh1-1.fna.fbcdn.net/v/t39.30808-6/240517748_1615155945344887_5561738681943572943_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=S4CksW-kh7gAX_o9H80&_nc_oc=AQmaxLyTEEPym8WutmVL0ndjWtGiV6Q2Jlbh1gl4-Z_wZ8tADacSUgQiBRqrBj0JZbY&_nc_ht=scontent.fluh1-1.fna&oh=00_AfCCr7wWlRXCIN5jnGLYkIzgY7BgsoXsJ-kfgz3g1VDgjQ&oe=643600CA"
						}
						alt="ds"
					/>
					{/* image uplaod */}
					<FileButton onChange={() => {}} accept="image/png,image/jpeg">
						{(props) => (
							<ActionIcon
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
								<FaCamera color="black" />
							</ActionIcon>
						)}
					</FileButton>

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
							visible={loading}
						/>
					</Box>
				</Box>

				<Flex sx={{ flex: "1" }} direction={"column"} gap="0.5rem">
					<Title>{"Sandeep Morya"}</Title>
					<Text fw={500} c="dimmed">
						624 Friends
					</Text>
					<Flex direction={"row"} justify={"space-between"}>
						<Avatar.Group spacing="sm">
							<Avatar src="https://picsum.photos/200?random=1" radius="xl" />
							<Avatar src="https://picsum.photos/200?random=2" radius="xl" />
							<Avatar src="https://picsum.photos/200?random=3" radius="xl" />
							<Avatar src="https://picsum.photos/200?random=4" radius="xl" />
							<Avatar src="https://picsum.photos/200?random=5" radius="xl" />
							<Avatar src="https://picsum.photos/200?random=6" radius="xl" />
							<Avatar radius="xl">+5</Avatar>
						</Avatar.Group>

						<Group pr={"1rem"}>
							<Button leftIcon={<MdAdd />}>Add to Story</Button>
							<Button variant="outline" color="gray" leftIcon={<FaPencilAlt />}>
								Edit Profile
							</Button>
						</Group>
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
					position: "sticky",
					top: "100rem",
				}}>
				<Flex h="100%">
					{[
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
					))}
				</Flex>

				<Box mr="1rem">
					<TbDots size={20} />
				</Box>
			</Flex>
		</Flex>
	);
}

export default ProfilePresentation;
