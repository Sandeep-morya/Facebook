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
				src={
					"https://res.cloudinary.com/due9pi68z/image/upload/v1680333681/ntpzmiiotgzmn9loafur.png"
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
