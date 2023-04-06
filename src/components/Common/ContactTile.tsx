import { Avatar, Box, Flex, Text, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";

type Props = {
	name: string;
	src?: string;
	online?: boolean;
	story?: string;
};

const ContactTile = ({ name, src, online = true, story }: Props) => {
	const { hovered, ref } = useHover();

	return (
		<Flex
			ref={ref}
			bg={hovered ? "#dddddd" : "transparent"}
			w={"100%"}
			align="center"
			sx={{ borderRadius: "0.5rem" }}
			gap={"1rem"}
			p="0.5rem">
			<Box sx={{ width: "2.5rem", height: "2.5rem", position: "relative" }}>
				<Avatar
					size={story ? "85%" : "100%"}
					sx={{
						filter: "drop-shadow(0 0 5px rgba(0,0,0,0.15))",
						boxShadow: "inset 0 0 5px 10px white",
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%,-50%)",
					}}
					radius="xl"
					color={"blue"}
					src={src}
					alt={name}
				/>
				{story && (
					<Box
						sx={{
							width: "2.5rem",
							height: "2.5rem",
							position: "absolute",
							inset: "0",
							borderRadius: "50%",
							outline: ".15rem solid #0076CE",
						}}></Box>
				)}
				<Box
					bg={online ? "#51CF66" : "gray"}
					sx={{
						width: "0.7rem",
						height: "0.7rem",
						position: "absolute",
						bottom: "0",
						right: "0",
						borderRadius: "50%",
						border: "0.15rem solid white",
					}}></Box>
			</Box>
			<Title order={5} fw={500} c="black">
				{name}
			</Title>
		</Flex>
	);
};

export default ContactTile;
