import { Text } from "@mantine/core";
import React from "react";

type Props = {
	children: React.ReactNode;
};

function Ftext({ children }: Props) {
	return (
		<Text c={"rgba(0,0,0,0.7)"} fz="sm">
			{children}
		</Text>
	);
}

export default Ftext;
