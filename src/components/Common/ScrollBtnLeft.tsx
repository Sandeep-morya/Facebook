import { ActionIcon } from "@mantine/core";
import React from "react";
import { TfiAngleLeft } from "react-icons/tfi";

type Props = {};

function ScrollBtnLeft({}: Props) {
	return (
		<ActionIcon
			size={"xl"}
			radius="xl"
			bg={"white"}
			sx={{
				position: "absolute",
				left: "2%",
				top: "50%",
				boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
				transform: "translateY(-50%)",
				zIndex: 10,
			}}>
			<TfiAngleLeft />
		</ActionIcon>
	);
}

export default ScrollBtnLeft;
