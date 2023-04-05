import { ActionIcon, Box } from "@mantine/core";
import React from "react";
import { IconType } from "react-icons";
import Ticker from "./Ticker";

type Props = {
	Icon: IconType;
	notficationCount: number;
};

const IconButton = ({ Icon, notficationCount }: Props) => {
	return (
		<ActionIcon
			sx={{ position: "relative" }}
			bg={"#e0e2e5"}
			size={"xl"}
			radius={"xl"}
			variant="filled">
			<Icon color="black" size="1.5rem" />
			<Ticker count={notficationCount} />
		</ActionIcon>
	);
};

export default IconButton;
