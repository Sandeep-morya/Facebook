import {
	Box,
	Button,
	Divider,
	PasswordInput,
	Text,
	TextInput,
	LoadingOverlay,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { Link } from "react-router-dom";
import usePasswordValidation from "../../hooks/usePasswordValidation";

type Props = {
	open: () => void;
	handleLogin: (values: { mobile: string; password: string }) => void;
	loading: boolean;
};

function LoginForm({ handleLogin, open, loading }: Props) {
	const validatePassword = usePasswordValidation();

	const loginForm = useForm({
		initialValues: {
			mobile: "",
			password: "",
		},

		validate: {
			mobile: (value) =>
				/^[6-9]\d{9}$/.test(value) ? null : "Invalid Mobile Number",
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
				position: "relative",
				padding: "1rem",
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				aspectRatio: "1",
			}}>
			<LoadingOverlay visible={loading} />
			<TextInput
				placeholder="Mobile Number"
				autoComplete="off"
				size="lg"
				{...loginForm.getInputProps("mobile")}
			/>
			<PasswordInput
				placeholder="Password"
				autoComplete="on"
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
