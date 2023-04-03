import React from "react";
import {
	Stack,
	Flex,
	Image,
	Title,
	Box,
	Text,
	TextInput,
	Button,
	PasswordInput,
	Divider,
} from "@mantine/core";
import Footer from "../components/Footer/Footer";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";

type Props = {};

const AuthenticationPage = (props: Props) => {
	const form = useForm({
		initialValues: {
			email: "",
			password: "",
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
		},
	});

	return (
		<Stack w={"100%"}>
			{/*---:: Heading & Login Form ::---*/}
			<Flex
				w={"100%"}
				bg="#F0F2F5"
				gap={"2rem"}
				direction={{ base: "column", sm: "row" }}
				p={{
					xs: "0 1rem",
					sm: "0 1rem",
					md: "0 2rem",
					lg: "0 10rem",
					xl: "0 28rem",
				}}
				h={{
					xs: "100vh",
					sm: "100vh",
					md: "100vh",
					lg: "100vh",
					xl: "75vh",
				}}>
				{/*---:: Left Side (Headings)::---*/}
				<Flex
					w={{
						xs: "100%",
						sm: "100%",
						md: "100%",
						lg: "50%",
						xl: "60%",
					}}
					direction={"column"}
					mt={{
						xs: "2%",
						sm: "5%",
						md: "20%",
						lg: "20%",
						xl: "20%",
					}}
					gap={"0.5rem"}>
					<Box w={"45%"}>
						<Image
							w={"100%"}
							src={
								"https://res.cloudinary.com/due9pi68z/image/upload/v1680507858/dnpjtjjqrvjvkslrqxxp.png"
							}
							alt="facebook-logo-name"
						/>
					</Box>
					<Text c="rgba(0,0,0,0.9)" fw={500} fz="1.7rem" lts={"1px"}>
						Facebook helps you connect and share with the people in your life.
					</Text>
				</Flex>

				{/*---:: Right Side (Login Form) ::---*/}
				<Flex
					justify={"center"}
					sx={{ flexFlow: "1" }}
					align="center"
					direction={"column"}
					w={{
						xs: "100%",
						sm: "100%",
						md: "100%",
						lg: "45%",
						xl: "45%",
					}}
					maw="550px"
					gap="1rem">
					<Box
						component="form"
						onSubmit={form.onSubmit((values) => alert(values))}
						bg={"white"}
						sx={{
							w: "100%",
							boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
							borderRadius: "0.5rem",

							padding: "1rem",
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
							aspectRatio: "1",
						}}>
						<TextInput
							placeholder="Email address or phone number"
							size="xl"
							{...form.getInputProps("email")}
						/>
						<PasswordInput
							placeholder="Password"
							size="xl"
							{...form.getInputProps("password")}
						/>
						<Button size="xl" type="submit">
							Log in
						</Button>
						<Text align="center" color={"blue"} component={Link} to="/">
							Forgotten password?
						</Text>
						<Divider />
						<Button
							sx={{ alignSelf: "center" }}
							color={"green"}
							size="xl"
							type="submit">
							Create new Account
						</Button>
					</Box>
					<Text align="center">
						<Text component="span" fw="700">
							Create a Page
						</Text>{" "}
						for a celebrity, brand or business.
					</Text>
				</Flex>
			</Flex>

			{/*---:: Footer ::---*/}
			<Flex
				w={"100%"}
				p={{
					xs: "1rem 0.5rem",
					sm: "1rem 1rem",
					md: "1rem 2rem",
					lg: "1rem 10rem",
					xl: "1rem 28rem",
				}}
				pb="3rem">
				<Footer />
			</Flex>
		</Stack>
	);
};

export default AuthenticationPage;
