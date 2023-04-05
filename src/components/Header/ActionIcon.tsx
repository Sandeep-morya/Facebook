import { ActionIcon, Box } from "@mantine/core";
import React from "react";
import { IconType } from "react-icons";
import Ticker from "./Ticker";

type Props = {
	Icon: IconType;
	title?: string;
	notficationCount?: number;
};

const IconButton = ({ Icon, title, notficationCount = 0 }: Props) => {
	return (
		<ActionIcon
			sx={{ position: "relative" }}
			bg={"#e0e0e0"}
			data-title={title}
			size={"xl"}
			radius={"xl"}
			variant="filled">
			<Icon color="black" size="1.5rem" />
			<Ticker count={notficationCount} />
		</ActionIcon>
	);
};

export default IconButton;
