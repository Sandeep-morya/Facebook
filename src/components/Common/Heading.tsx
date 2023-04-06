import { Title } from "@mantine/core";
import React from "react";

type Props = {
	name: string;
};

function Heading({ name }: Props) {
	return (
		<Title fw={500} fz="lg" c="dark">
			{name}
		</Title>
	);
}

export default Heading;
