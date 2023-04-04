import { ActionIcon } from "@mantine/core";
import React from "react";
import { IconType } from "react-icons";

type Props = {
	Icon: IconType;
};

const IconButton = ({ Icon }: Props) => {
	return (
		<ActionIcon bg={"#e0e2e5"} size={"xl"} radius={"xl"} variant="filled">
			<Icon color="black" size="1.5rem" />
		</ActionIcon>
	);
};

export default IconButton;
