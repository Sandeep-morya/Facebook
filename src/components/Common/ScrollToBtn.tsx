import { ActionIcon, useMantineTheme } from "@mantine/core";
import React from "react";

type Props = {
	children: React.ReactNode;
	onClick: () => void;
};

function ScrollToBtn({ children, onClick }: Props) {
	const theme = useMantineTheme();
	return (
		<ActionIcon
			onClick={onClick}
			bg={theme.colors.gray[1]}
			sx={{
				position: "fixed",
				right: "5rem",
				bottom: "2rem",

				zIndex: 50,
				boxShadow:
					"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
			}}
			size={"xl"}
			radius="xl">
			{children}
		</ActionIcon>
	);
}

export default ScrollToBtn;
