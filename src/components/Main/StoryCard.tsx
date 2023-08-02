import { Box, Flex, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React, { useState } from "react";
import useRandomName from "../../hooks/useRandomName";
import Havatar from "../Common/Havatar";
import { modalCloseButtonStyle } from "./Post";

type Props = {
	image: string;
	name?: string;
	noAvatar?: boolean;
};

function StoryCard({ image, name, noAvatar }: Props) {
	const { hovered, ref } = useHover();
	const randomName = useRandomName();
	const [open, setOpen] = useState(false);

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
				onClick={() => setOpen(true)}
				sx={{
					width: "100%",
					height: "100%",
					backgroundImage: `url(${image})`,
					backgroundSize: hovered ? "155%" : "150%",
					filter: "brightness(75%)",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					transition: "all 0.1s",
				}}></Box>
			{!noAvatar && (
				<Box
					sx={{
						position: "absolute",
						top: "5%",
						left: "10%",
					}}>
					<Havatar online={true} name="arm" src={image} story="s" />
				</Box>
			)}

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
				{name || randomName}
			</Text>
			{/* Modal */}
			<Modal
				opened={open}
				onClose={() => setOpen(false)}
				fullScreen
				style={{ backgroundColor: "red" }}
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
					src={image}
					alt="Preview"
				/>
			</Modal>
		</Flex>
	);
}

export default StoryCard;
