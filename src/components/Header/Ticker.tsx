import { Box } from "@mantine/core";
import React from "react";

type Props = {
	count: number;
};

function Ticker({ count }: Props) {
	return (
		<Box
			sx={{
				position: "absolute",
				right: "-10%",
				visibility: count ? "visible" : "hidden",
				top: "-10%",
				fontSize: "0.8rem",
				fontWeight: 500,
				backgroundColor: "#ff1122",
				color: "white",
				borderRadius: "5rem",
				padding: "0.1rem 0.3rem",
			}}>
			{count}
		</Box>
	);
}

export default Ticker;
