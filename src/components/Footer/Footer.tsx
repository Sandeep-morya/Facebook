import { Box, Button, Divider, Flex, Stack, Text } from "@mantine/core";
import React from "react";
import Ftext from "./Ftext";
import { GoPlus } from "react-icons/go";
import useDate from "../../hooks/useDate";

type Props = {};

function Footer() {
	const date = useDate();
	return (
		<footer style={{ width: "100%" }}>
			<Flex direction={"column"} gap="0.5rem">
				<Flex direction={"row"} gap="1rem" rowGap={"0"} wrap={"wrap"}>
					<Ftext>{"English (UK)"}</Ftext>
					<Ftext>ਪੰਜਾਬੀ</Ftext>
					<Ftext>हिन्दी</Ftext>
					<Ftext>اردو</Ftext>
					<Ftext>मराठी</Ftext>
					<Ftext>ગુજરાતી</Ftext>
					<Ftext>বাংলা</Ftext>
					<Ftext>தமிழ்</Ftext>
					<Ftext>తెలుగు</Ftext>
					<Ftext>ಕನ್ನಡ</Ftext>
					<Ftext>മലയാളം</Ftext>
					<Button
						p="0 0.6rem"
						color={"dark"}
						bg={"rgba(0,0,0,0.05)"}
						variant="outline"
						compact>
						<GoPlus />
					</Button>
				</Flex>
				<Divider />
				<Flex direction={"row"} gap="1rem" rowGap={"0"} wrap={"wrap"}>
					<Ftext>Sign Up</Ftext>
					<Ftext>Log in</Ftext>
					<Ftext>Messenger</Ftext>
					<Ftext>Facebook Lite</Ftext>
					<Ftext>Watch</Ftext>
					<Ftext>Places Games</Ftext>
					<Ftext>Marketplace</Ftext>
					<Ftext>Meta Pay</Ftext>
					<Ftext>Meta Store</Ftext>
					<Ftext>Meta Quest</Ftext>
					<Ftext>Instagram</Ftext>
					<Ftext>Bulletin</Ftext>
					<Ftext>Fundraisers</Ftext>
					<Ftext>Services</Ftext>
					<Ftext>Voting</Ftext>
					<Ftext>Information Centre</Ftext>
					<Ftext>Privacy Policy</Ftext>
					<Ftext>Privacy Centre</Ftext>
					<Ftext>Groups</Ftext>
					<Ftext>About</Ftext>
					<Ftext>Create ad</Ftext>
					<Ftext>Create Page</Ftext>
					<Ftext>Developers</Ftext>
					<Ftext>Careers</Ftext>
					<Ftext>Cookies</Ftext>
					<Ftext>AdChoices</Ftext>
					<Ftext>Terms</Ftext>
					<Ftext>Help</Ftext>
					<Ftext>Contact uploading and non-users</Ftext>
				</Flex>
				<Text mt="0.5rem" fz="xs">
					Shadow Inc &copy; {date.getFullYear()}
				</Text>
			</Flex>
		</footer>
	);
}

export default Footer;
