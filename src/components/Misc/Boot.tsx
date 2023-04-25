import { Image, Loader } from "@mantine/core";

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
				width={"7rem"}
				height={"7rem"}
				src={
					"https://res.cloudinary.com/due9pi68z/image/upload/v1680333681/ntpzmiiotgzmn9loafur.png"
				}
				alt="logo"
			/>
			<Loader
				style={{
					position: "absolute",
					bottom: "5%",
					left: "50%",
					transform: "translateX(-50%)",
				}}
			/>
		</div>
	);
};

export default Boot;
