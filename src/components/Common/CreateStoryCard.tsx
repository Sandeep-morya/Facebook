import { Box, Flex, Image, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import { MdAdd } from "react-icons/md";
import Ftext from "../Footer/Ftext";

type Props = {};

function CreateStoryCard({}: Props) {
	const { hovered, ref } = useHover();
	return (
		<Flex
			w={"7rem"}
			miw="7rem"
			ref={ref}
			direction="column"
			h="100%"
			sx={{
				borderRadius: "0.5rem",
				overflow: "hidden",
				boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 8px",
			}}>
			<Box
				sx={{
					width: "100%",
					height: "80%",
					position: "relative",
					backgroundImage: `url(https://res.cloudinary.com/due9pi68z/image/upload/v1679380793/ezbgodogpxxel4aokkfg.jpg)`,
					backgroundSize: hovered ? "155%" : "150%",
					backgroundPosition: "center",
					transition: "all 0.1s",
				}}>
				<Box
					bg={"blue"}
					sx={{
						position: "absolute",
						top: "90%",
						width: "30px",
						height: "30px",
						left: "50%",
						transform: "translateX(-50%)",
						borderRadius: "50%",
						zIndex: 10,
						outline: "0.3rem solid white",
						display: "grid",
						placeItems: "center",
					}}>
					<MdAdd size={30} color="white" />
				</Box>
			</Box>
			<Box w="100%" sx={{ flexGrow: 1 }} bg={"white"} p="0.7rem">
				<Text
					fw={700}
					fz="xs"
					mt="0.5rem"
					c="dark"
					align="center"
					sx={{ transform: "translateY(25%)" }}>
					Create Story
				</Text>
			</Box>
		</Flex>
	);
}

export default CreateStoryCard;
