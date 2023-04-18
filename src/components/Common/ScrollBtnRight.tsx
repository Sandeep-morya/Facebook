import { ActionIcon } from "@mantine/core";
import React from "react";
import { TfiAngleRight } from "react-icons/tfi";
type Props = {
	onClick: () => void;
};

function ScrollBtnRight({ onClick }: Props) {
	return (
		<ActionIcon
			size={"xl"}
			radius="xl"
			onClick={onClick}
			bg={"white"}
			sx={{
				position: "absolute",
				right: "2%",
				top: "50%",
				boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
				transform: "translateY(-50%)",
				zIndex: 10,
				"&:active": { margin: "0" },
			}}>
			<TfiAngleRight />
		</ActionIcon>
	);
}

export default ScrollBtnRight;
