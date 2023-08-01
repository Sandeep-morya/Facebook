import {
	ActionIcon,
	Box,
	Center,
	Divider,
	Flex,
	Input,
	Loader,
	Stack,
	Text,
	useMantineTheme,
} from "@mantine/core";
import React, {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from "react";
import { FaSearch } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import axios, { AxiosResponse } from "axios";
import { FriendType } from "../../types";
import useAlert from "../../hooks/useAlert";
import { useDebouncedValue } from "@mantine/hooks";
import AvatarButton from "../Common/AvatarButton";
import { BarLoader } from "react-spinners";

type Props = {
	setShowSearchModal: Dispatch<SetStateAction<boolean>>;
};

const { VITE_API_URL, VITE_TOKEN_SECRET } = import.meta.env;
const prefix = "fb_user_searches";

const SearchModal = ({ setShowSearchModal }: Props) => {
	const [query, setQuery] = useState("");
	const {
		colors: { blue },
	} = useMantineTheme();

	const [isLoading, setIsLoading] = useState(false);
	const [users, setUsers] = useState<FriendType[]>([]);

	const Alert = useAlert();

	const [debounced] = useDebouncedValue(query, 500);

	const getAllUsers = useCallback(
		async (query: string) => {
			setIsLoading(true);

			try {
				const { data }: AxiosResponse<FriendType[]> = await axios.get(
					VITE_API_URL + "/users/all",
					{
						params: {
							q: query,
						},
						headers: { Authorization: VITE_TOKEN_SECRET },
					},
				);
				setUsers(data);

				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				Alert("503 Server Error", "error");
			}
		},
		[VITE_TOKEN_SECRET],
	);

	useEffect(() => {
		if (debounced) {
			getAllUsers(debounced);
		}
	}, [debounced]);

	return (
		<Flex
			direction={"column"}
			w={"22rem"}
			bg="white"
			sx={{
				position: "fixed",
				maxHeight: "500px",
				overflowY: "scroll",
				"&::-webkit-scrollbar": { display: "none" },
				"-ms-overflow-style": "none" /* IE 11 */,
				scrollbarWidth: "none",
				top: "0",
				left: "0",
				zIndex: 50,
				boxShadow:
					"rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
				borderRadius: "0.5rem",
			}}>
			{isLoading && <BarLoader width={"100%"} color={blue[5]} />}
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
					placeholder="Search Meetbook"
					radius="xl"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</Flex>
			<Box p={"1rem"}>
				{users.length ? (
					users.map((user) => (
						<Flex
							direction={"column"}
							w={"100%"}
							key={user._id + "search_result"}>
							<AvatarButton
								src={user.image}
								name={user.name}
								redirectOn={user._id}
							/>
						</Flex>
					))
				) : (
					<Text ta="center">No Results Found</Text>
				)}
			</Box>
			<Flex></Flex>
		</Flex>
	);
};

export default SearchModal;
