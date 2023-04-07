import { Flex } from "@mantine/core";
import React from "react";
import Post from "./Post";
import StroyNreelTabs from "./StroyNreelTabs";
import UploadPost from "./UploadPost";

type Props = {};

function Feeds({}: Props) {
	return (
		<Flex
			w={{
				xs: "100%",
				sm: "100%",
				md: "100%",
				lg: "80%",
				xl: "55%",
			}}
			m="auto"
			direction="column"
			gap={"1rem"}>
			<StroyNreelTabs />
			<UploadPost
				firstName="Sandeep"
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1679380793/ezbgodogpxxel4aokkfg.jpg"
			/>

			{/*---:: All Posts ::---*/}

			<Flex
				direction={"column"}
				gap="1rem"
				w="100%"
				h={"auto"}
				align={"flex-start"}>
				<Post />
				<Post />
			</Flex>
		</Flex>
	);
}

export default Feeds;
