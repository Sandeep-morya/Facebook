import { Flex } from "@mantine/core";
import React from "react";
import StroyNreelTabs from "./StroyNreelTabs";
import UploadPost from "./UploadPost";

type Props = {};

function Feeds({}: Props) {
	return (
		<Flex direction="column" gap={"1rem"}>
			<StroyNreelTabs />
			<UploadPost
				firstName="Sandeep"
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1679380793/ezbgodogpxxel4aokkfg.jpg"
			/>{" "}
		</Flex>
	);
}

export default Feeds;
