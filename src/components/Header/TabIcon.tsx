import { Box, Flex } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import { IconType } from "react-icons";

type Props = {
	SelectedIcon: IconType;
	Icon: IconType;
	title: string;
	active?: boolean;
};

const TabIcon = ({ Icon, SelectedIcon, active, title }: Props) => {
	const { hovered, ref } = useHover();
	return (
		<Flex
			ref={ref}
			justify={"space-between"}
			direction="column"
			data-title={title}
			style={{
				flexGrow: "1",
				height: "4rem",
			}}>
			<Box
				style={{
					width: "100%",
					fontSize: "1.7rem",
					transform: "translateY(20%)",
					paddingTop: "0.2rem",
					textAlign: "center",
					backgroundColor: hovered ? "rgba(0,0,0,0.1)" : "white",
					borderRadius: "0.3rem",
				}}>
				{active ? <SelectedIcon color="#0076CE" /> : <Icon color="gray" />}
			</Box>
			<div
				style={{
					width: "100%",
					visibility: active ? "visible" : "hidden",
					height: "0.25rem",
					borderRadius: "1rem",
					background: "#0076CE",
				}}></div>
		</Flex>
	);
};

export default TabIcon;
