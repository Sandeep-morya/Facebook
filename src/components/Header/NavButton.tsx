import { ActionIcon, Flex, Title } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import React from "react";
import { IconType } from "react-icons";
import { BsGearFill, BsChevronRight } from "react-icons/bs";

type Props = {
	Icon: IconType;
	name: string;
	withAngle?: boolean;
	onClick?: () => void;
	active?: boolean;
};

function NavButton({ Icon, onClick, name, withAngle, active }: Props) {
	const { hovered, ref } = useHover();
	return (
		<Flex
			align="center"
			justify={"space-between"}
			p={"0.5rem"}
			w="100%"
			ref={ref}
			onClick={onClick}
			bg={hovered || active ? "#eeeeee" : "white"}
			sx={{ borderRadius: "0.5rem" }}>
			<Flex gap={"1rem"} align="center">
				<ActionIcon
					bg={active ? "blue" : "#e0e0e0"}
					sx={{ boxShadow: "0 0 3px gray" }}
					size={"lg"}
					radius={"xl"}
					variant="filled">
					<Icon color={active ? "white" : "black"} fontSize={"1.2rem"} />
				</ActionIcon>
				<Title order={5} fw={500} c="black">
					{name}
				</Title>
			</Flex>
			{withAngle && (
				<ActionIcon size={"lg"} radius={"xl"}>
					<BsChevronRight color="black" fontSize={"1.2rem"} />
				</ActionIcon>
			)}
		</Flex>
	);
}

export default NavButton;
