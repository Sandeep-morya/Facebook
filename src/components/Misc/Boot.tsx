import { Image, Loader, Stack, Text } from "@mantine/core";

const Boot = () => {
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				display: "grid",
				placeItems: "center",
				overflow: "hidden",
			}}>
			<Image width={"6rem"} height={"6rem"} src={"/logo.png"} alt="logo" />
			<Stack
				align={"center"}
				style={{
					position: "absolute",
					bottom: "5%",
					left: "50%",
					transform: "translateX(-50%)",
				}}>
				<Loader />
				<Text fw={500} c="dimmed">
					Cold Start: This may take upto 30s..
				</Text>
			</Stack>
		</div>
	);
};

export default Boot;
