import { Avatar, Box, Flex, Text, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
	name: string;
	src: string;
	redirectOn?: string;
};

const AvatarButton = ({ name, src, redirectOn }: Props) => {
	const { hovered, ref } = useHover();
	const navigate = useNavigate();
	return (
		<Flex
			ref={ref}
			bg={hovered ? "#dddddd" : "transparent"}
			w={"100%"}
			align="center"
			sx={{ borderRadius: "0.5rem" }}
			gap={"1rem"}
			onClick={() => (redirectOn ? navigate(`/${redirectOn}`) : {})}
			p="0.5rem">
			<Avatar
				size={"2.5rem"}
				sx={{
					filter: "drop-shadow(0 0 5px rgba(0,0,0,0.1))",
				}}
				radius="xl"
				color={"blue"}
				src={src}
				alt={name}
			/>

			<Title order={5} fw={500} c="black">
				{name}
			</Title>
		</Flex>
	);
};

export default AvatarButton;
