import React, { useState, useContext, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import {
	Stack,
	Flex,
	Image,
	Title,
	Box,
	Text,
	Divider,
	Modal,
} from "@mantine/core";
import Footer from "../components/Footer/Footer";

import { useDisclosure } from "@mantine/hooks";
import SignUpForm from "../components/Auth/SignUpForm";
import LoginForm from "../components/Auth/LoginForm";
import useAlert from "../hooks/useAlert";
import { LoginApi, SignupApi } from "../api/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useToken } from "../Provider/AuthContextProvider";

const AuthenticationPage = () => {
	const Alert = useAlert();
	const location = useLocation();
	const { token, replaceToken } = useToken();

	const navigate = useNavigate();
	const [opened, { open, close }] = useDisclosure(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	// :: Handle Login ::
	async function handleLogin(values: { mobile: string; password: string }) {
		try {
			setLoading(true);
			const data = await LoginApi(values);
			setLoading(false);
			data.message === "Login Successful"
				? Alert(data.message, "success")
				: Alert(data.message, "warning");

			if (data.message === "Login Successful") {
				replaceToken(data.token);
			}
		} catch (error) {
			Alert("Internal Server Error", "error");
			setLoading(false);
			setError(true);
		}
	}
	console.log({ token });

	// :: Handle Signup ::
	async function handleSignup(values: {
		name: string;
		dob: string;
		mobile: string;
		gender: string;
		password: string;
	}) {
		try {
			setLoading(true);
			const data = await SignupApi(values);
			setLoading(false);
			data.message === "Registration Successful"
				? Alert(data.message, "success")
				: Alert(data.message, "warning");

			if (data.message === "Registration Successful") {
				replaceToken(data.token);
			}
		} catch (error) {
			Alert("Internal Server Error", "error");
			setLoading(false);
			setError(true);
		}
	}

	if (token) {
		return <Navigate to={location.state || "/"} />;
	}
	if (error) {
		return <Navigate to={"/error"} state={location.pathname} />;
	}

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
					{/*---:: Login Form ::---*/}
					<LoginForm {...{ handleLogin, open, loading }} />

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
			{/*---:: Modal ::---*/}
			<Modal
				opened={opened}
				onClose={close}
				title={
					<Flex direction={"column"}>
						<Title order={1}>Sign Up</Title>
						<Text fs={"sm"}>It's quick and easy.</Text>
					</Flex>
				}
				centered>
				<Divider />
				{/*---:: SignUpForm ::---*/}

				<SignUpForm {...{ handleSignup, loading }} />
			</Modal>
		</Stack>
	);
};

export default AuthenticationPage;
