import { Divider, Flex } from "@mantine/core";
import React from "react";
import AvatarButton from "../Common/AvatarButton";

type Props = {};

function Sidebar({}: Props) {
	return (
		<Flex
			direction={"column"}
			// h="100vh"
			// sx={{ overflowX: "scroll" }}

			w={"20rem"}
			align="flex-start">
			<AvatarButton
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1679227476/g2tb12nyfphkxayv6ood.jpg"
				name="Sandeep Morya"
			/>
			<AvatarButton
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1680723363/up49bubcrskek6eluya8.png"
				name="Friends"
			/>
			<AvatarButton
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1680723363/xpauakwxpbixn6kgjukw.png"
				name="Groups"
			/>
			<AvatarButton
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1680723363/rqhyodhwb6hwuq00obj3.png"
				name="Feeds"
			/>
			<AvatarButton
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1680723363/mfndegzdgaqwcp9pd2ss.png"
				name="Marketplace"
			/>
			<AvatarButton
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1680723363/c16h1aj1kvhxi0l1grj4.png"
				name="Watch"
			/>
			<AvatarButton
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1680723363/t8tsu0dss40pmups02q5.png"
				name="Memories"
			/>
			<AvatarButton
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1680723363/ygfegbhsitwlwtansmmd.png"
				name="Saved"
			/>
			<AvatarButton
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1680723363/ohrysisrpqwj2jlzfgzd.png"
				name="Pages"
			/>
			<AvatarButton
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1680723363/bjtwuaxusolzzedrbogu.png"
				name="Events"
			/>
			<AvatarButton
				src="https://res.cloudinary.com/due9pi68z/image/upload/v1680724306/def1m3xhz3i5la0p3fer.png"
				name="See more"
			/>
			<Divider />
		</Flex>
	);
}

export default Sidebar;
