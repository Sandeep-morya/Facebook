import { Box, Flex, Modal, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React, { useMemo, useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { randomNumber } from "../../hooks/useRandomName";
import { modalCloseButtonStyle } from "./Post";

type Props = {
	image: string;
};

function ReelCard({ image }: Props) {
	const { hovered, ref } = useHover();
	const views = useMemo(() => randomNumber(10, 999), []);
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

export default ReelCard;
