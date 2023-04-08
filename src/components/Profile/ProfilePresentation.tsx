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
	LoadingOverlay,
} from "@mantine/core";
import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

type Props = {};

function ProfilePresentation({}: Props) {
	const [file, setFile] = useState<File | null>(null);
	const [loading, setLoading] = useState(false);
	return (
		<Flex
			w={"100%"}
			h="100%"
			sx={{ border: "1px solid red" }}
			direction="column">
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
			<Flex w="100%" h={"25%"} sx={{ border: "1px solid red" }}>
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
			</Flex>
		</Flex>
	);
}

export default ProfilePresentation;
