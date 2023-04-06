import { Divider, Flex, Group } from "@mantine/core";
import React from "react";
import { MdSearch, MdVideoCall } from "react-icons/md";
import { TbDots } from "react-icons/tb";
import BirthdayTilte from "../Common/BirthdayTile";
import ContactTile from "../Common/ContactTile";
import Heading from "../Common/Heading";

type Props = {};
const birthdays = ["Abcd Kumar", "Wxyz Singh"];
const contacts = [
	{
		image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1678602063/oxnlfafq7qpsgfoc1pxb.jpg",
		name: "Akash Maurya",
		story: "story",
	},
	{
		image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1679979261/vljtdwgtwepb3crtxuz0.jpg",
		name: "Aman Kumar",
	},
	{
		image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1678601937/fwvaymxjldryfebzvuic.jpg",
		name: "Manish Maurya",
		story: "story",
	},
	{
		image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1678602449/c1p4arbxsprozvgmceps.jpg",
		name: "Rahul Singh",
	},
	{
		image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1678601728/rlkg4oiye47k8wlmgelj.jpg",
		name: "Arun kumar Mishra",
	},
	{
		image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1679936596/rqbqh1ki5nzvriex8krk.jpg",
		name: "Gulabchand Maurya",
		story: "story",
	},
	{
		image:
			"https://res.cloudinary.com/due9pi68z/image/upload/v1678602248/ek1moyke57owokpfphcc.jpg",
		name: "Sanjay Maurya",
	},
];

function Contacts({}: Props) {
	return (
		<Flex w="100%" direction={"column"}>
			<Flex
				w="20rem"
				sx={{ alignSelf: "flex-end" }}
				direction={"column"}
				gap="1rem">
				{/*---:: Birthdays ::---*/}
				<Heading name="Birthdays" />
				<Flex direction={"column"} gap="0.5rem">
					{birthdays.map((person) => (
						<BirthdayTilte key={person} name={person} />
					))}
				</Flex>

				<Divider />

				<Flex justify={"space-between"} align="center">
					<Heading name="Contacts" />
					<Flex gap={"1rem"}>
						<MdVideoCall size={20} /> <MdSearch size={20} />{" "}
						<TbDots size={20} />
					</Flex>
				</Flex>

				{/*---:: Online Contacts ::---*/}
				<Flex direction={"column"}>
					{contacts.map((person, index) => (
						<ContactTile
							key={person.name + index}
							src={person.image}
							name={person.name}
							story={person.story}
						/>
					))}
				</Flex>
			</Flex>
		</Flex>
	);
}

export default Contacts;
