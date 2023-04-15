import { Box, Button, Flex, Group, Text, useMantineTheme } from "@mantine/core";
import React from "react";

type Props = {};

function FriendCard({}: Props) {
	const theme = useMantineTheme();

	return (
		<Flex
			w={"11.2rem"}
			h="350px"
			direction={"column"}
			sx={{
				justifySelf: "flex-start",
				borderRadius: "0.5rem",
				overflow: "hidden",
				boxShadow: "0 0 5px rgba(0,0,0,0.2)",
			}}>
			<Box
				w="100%"
				h="55%"
				mih={"55%"}
				mah="55%"
				bgsz={"cover"}
				bg={
					"url(https://scontent.fluh1-1.fna.fbcdn.net/v/t39.30808-1/341266411_654879636447303_4705236171379181634_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=KLWj7FdsKb8AX9EP4_M&_nc_ht=scontent.fluh1-1.fna&oh=00_AfCjEUgwFyWW48y_3FCWHIX9KxMhWUkTjHbiePwJBHlUHA&oe=643F3495)"
				}></Box>
			<Flex
				sx={{ flex: 1 }}
				p="0.5rem"
				direction="column"
				justify={"space-between"}
				aria-labelledby="btns-texts"
				bg={"white"}>
				<Text fw={600} fz="1.1rem">
					{" "}
					Manish Kumar
				</Text>
				<Flex direction={"column"} gap="0.5rem">
					<Button size={"md"} variant={"light"}>
						Add Friend
					</Button>
					<Button size={"md"} variant={"light"} color={"dark"}>
						Remove
					</Button>
					{/* <Button size={"md"} variant={"filled"} color="green">
						Accept
					</Button>
					<Button size={"md"} variant={"outline"} color={"red"}>
						Reject
					</Button> */}
					{/* <Button size={"md"} variant={"filled"} color="blue">
						View Profile
					</Button>
					<Button size={"md"} variant={"light"} color={"teal"}>
						Send Message
					</Button> */}
				</Flex>
			</Flex>
		</Flex>
	);
}

export default FriendCard;
