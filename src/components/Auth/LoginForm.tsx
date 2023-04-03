import {
	Box,
	Button,
	Divider,
	PasswordInput,
	Text,
	TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { Link } from "react-router-dom";
import usePasswordValidation from "../../hooks/usePasswordValidation";

type Props = {
	open: () => void;
	handleLogin: (values: { email: string; password: string }) => void;
};

function LoginForm({ handleLogin, open }: Props) {
	const validatePassword = usePasswordValidation();

	const loginForm = useForm({
		initialValues: {
			email: "",
			password: "",
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
			password: (value) => validatePassword(value),
		},
	});
	return (
		<Box
			component="form"
			onSubmit={loginForm.onSubmit((values) => handleLogin(values))}
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
				size="lg"
				{...loginForm.getInputProps("email")}
			/>
			<PasswordInput
				placeholder="Password"
				size="lg"
				{...loginForm.getInputProps("password")}
			/>
			<Button sx={{ fontSize: "1.2rem" }} size="lg" type="submit">
				Log in
			</Button>
			<Text align="center" color={"blue"} component={Link} to="/">
				Forgotten password?
			</Text>
			<Divider />
			<Button
				onClick={open}
				sx={{ alignSelf: "center", fontSize: "1.2rem" }}
				color={"green"}
				size="lg">
				Create new Account
			</Button>
		</Box>
	);
}

export default LoginForm;
