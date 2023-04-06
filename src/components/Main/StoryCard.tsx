import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import Havatar from "../Common/Havatar";

type Props = {};

function StoryCard({}: Props) {
	return (
		<Flex
			w={"7rem"}
			direction="column"
			h="100%"
			sx={{
				borderRadius: "0.5rem",
				overflow: "hidden",
				boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 8px",
				position: "relative",
			}}>
			<Box
				sx={{
					width: "100%",
					height: "100%",
					backgroundImage: `url(https://res.cloudinary.com/due9pi68z/image/upload/v1679380793/ezbgodogpxxel4aokkfg.jpg)`,
					backgroundSize: "150%",
					filter: "brightness(70%)",
					backgroundPosition: "center",
				}}></Box>
			<Box
				sx={{
					position: "absolute",
					top: "5%",
					left: "10%",
				}}>
				<Havatar
					online={true}
					name="arm"
					src="https://res.cloudinary.com/due9pi68z/image/upload/v1679380793/ezbgodogpxxel4aokkfg.jpg"
					story="s"
				/>
			</Box>

			<Text
				sx={{
					position: "absolute",
					bottom: "5%",
					left: "10%",
					lineHeight: "1rem",
				}}
				fw={600}
				fz="sm"
				c="white">
				Arun Kumar mishra
			</Text>
		</Flex>
	);
}

export default StoryCard;
