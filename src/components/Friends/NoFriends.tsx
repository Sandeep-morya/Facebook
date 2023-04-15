import { Box } from "@mantine/core";
import React from "react";

type Props = {};

function NoFriends({}: Props) {
	return (
		<div
			style={{
				display: "grid",
				placeItems: "center",
				alignContent: "center",
				width: "100%",
				height: "80vh",
			}}>
			<img
				style={{ width: "200px", height: "auto" }}
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1681560411/vmjvjbusdiuy9gzyawfe.png"
				alt="no-frieds-png"
			/>
			<h3 style={{ color: "rgba(0,0,0,0.4)" }}>Oh! here is nothing.</h3>
		</div>
	);
}

export default NoFriends;
