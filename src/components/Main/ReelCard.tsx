import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import { MdPlayArrow } from "react-icons/md";

type Props = {};

function ReelCard({}: Props) {
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

			<Flex
				w="100%"
				sx={{ position: "absolute", bottom: "5%", left: "5%" }}
				align="baseline">
				<MdPlayArrow
					color="white"
					size="1rem"
					style={{ transform: "translateY(20%)" }}
				/>
				<Text fw={700} fz="sm" c="white">
					123K
				</Text>
			</Flex>
		</Flex>
	);
}

export default ReelCard;
