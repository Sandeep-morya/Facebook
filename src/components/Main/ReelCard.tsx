import { Box, Flex, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React, { useMemo } from "react";
import { MdPlayArrow } from "react-icons/md";
import { randomNumber } from "../../hooks/useRandomName";

type Props = {
	image: string;
};

function ReelCard({ image }: Props) {
	const { hovered, ref } = useHover();
	const views = useMemo(() => randomNumber(10, 999), []);
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
					backgroundImage: `url(${image})`,
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
					{`${views}K`}
				</Text>
			</Flex>
		</Flex>
	);
}

export default ReelCard;
