import { Box, Flex, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import { MdPlayArrow } from "react-icons/md";

type Props = {};

function ReelCard({}: Props) {
	const { hovered, ref } = useHover();
	return (
		<Flex
			ref={ref}
			w={"7rem"}
			miw="7rem"
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
					backgroundSize: hovered ? "155%" : "150%",
					filter: "brightness(75%)",
					backgroundPosition: "center",
					transition: "all 0.1s",
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
