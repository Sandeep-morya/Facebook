import { Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";

type Props = {
	children: React.ReactNode;
};

function Ftext({ children }: Props) {
	const { hovered, ref } = useHover();
	return (
		<Text
			ref={ref}
			sx={{ textDecoration: hovered ? "underline" : "none" }}
			c={"rgba(0,0,0,0.7)"}
			fz="sm">
			{children}
		</Text>
	);
}

export default Ftext;
