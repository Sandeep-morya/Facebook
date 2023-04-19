import { ActionIcon } from "@mantine/core";
import React from "react";
import { TfiAngleRight } from "react-icons/tfi";
import Button from "../Misc/BubbleButton";
type Props = {
	onClick: () => void;
};

function ScrollBtnRight({ onClick }: Props) {
	return (
		<Button
			colorScheme="rgb(255,255,255,1)"
			onClick={onClick}
			style={{
				position: "absolute",
				right: "2%",
				background: "rgba(255,255,255,0.7)",
				top: "50%",
				padding: "1rem",
				boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
				transform: "translateY(-50%)",
				zIndex: 10,
			}}>
			<TfiAngleRight color="black" />
		</Button>
	);
}

export default ScrollBtnRight;
