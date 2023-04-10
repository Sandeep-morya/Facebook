import { Box, Text } from "@mantine/core";
import React from "react";

type Props = {
	children: React.ReactNode;
	selected?: boolean;
};

function TexTab({ children, selected }: Props) {
	return (
		<Box
			sx={{
				width: "5rem",
				display: "flex",
				flexDirection: "column",

				height: "100%",
			}}>
			<Box
				sx={{
					width: "100%",
					display: "grid",
					placeItems: "center",
					fontWeight: 600,
					height: "100%",
					margin: "0.25rem 0",
					borderRadius: "0.5rem",
					"&:hover": { backgroundColor: "rgba(0,0,0,0.1)" },
					color: selected ? "#0076CE" : "black",
				}}>
				{children}
			</Box>
			<div
				style={{
					width: "100%",
					visibility: selected ? "visible" : "hidden",
					height: "0.2rem",
					borderRadius: "1rem",
					background: "#0076CE",
				}}></div>
		</Box>
	);
}

export default TexTab;
