import { ActionIcon, useMantineTheme } from "@mantine/core";
import React, { CSSProperties } from "react";

type Props = {
	children: React.ReactNode;
	onClick: () => void;
	style: any;
};

function ScrollToBtn({ children, onClick, style }: Props) {
	const theme = useMantineTheme();
	return (
		<ActionIcon
			onClick={onClick}
			bg={theme.colors.gray[1]}
			sx={{
				position: "fixed",
				...style,

				zIndex: 1000,
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
