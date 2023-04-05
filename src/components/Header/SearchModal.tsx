import { ActionIcon, Box, Center, Divider, Flex, Input } from "@mantine/core";
import React, { Dispatch, SetStateAction } from "react";
import { FaSearch } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";

type Props = {
	setShowSearchModal: Dispatch<SetStateAction<boolean>>;
};

const SearchModal = ({ setShowSearchModal }: Props) => {
	return (
		<Flex
			direction={"column"}
			bg="white"
			sx={{
				position: "fixed",
				width: "22rem",
				maxHeight: "600px",
				top: "0",
				left: "0",
				zIndex: 50,
				boxShadow:
					"rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
				borderRadius: "0.5rem",
			}}>
			<Divider />
			<Flex
				p={"1rem"}
				h={"4rem"}
				align="center"
				justify={"space-around"}
				gap={"0.5rem"}>
				<ActionIcon onClick={() => setShowSearchModal(false)}>
					<BsArrowLeft size={25} />
				</ActionIcon>
				<Input
					size={"md"}
					variant="filled"
					icon={<FaSearch />}
					placeholder="Search Facebook"
					radius="xl"
				/>
			</Flex>
			<Center p={"1rem"}> No Results Found</Center>
			<Flex></Flex>
		</Flex>
	);
};

export default SearchModal;
