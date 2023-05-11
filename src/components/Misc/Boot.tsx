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
			<Image
				width={"5rem"}
				height={"5rem"}
				sx={{
					filter:
						"brightness(0) saturate(100%) invert(48%) sepia(47%) saturate(3676%) hue-rotate(187deg) brightness(95%) contrast(90%);",
				}}
				src={
					"https://res.cloudinary.com/due9pi68z/image/upload/v1683515232/f2nrexkkzmzb6l2kadve.png"
				}
				alt="logo"
			/>
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
					Heating up the server
				</Text>
			</Stack>
		</div>
	);
};

export default Boot;
