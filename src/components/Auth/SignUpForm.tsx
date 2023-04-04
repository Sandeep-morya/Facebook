import {
	Box,
	Button,
	Flex,
	Group,
	Input,
	LoadingOverlay,
	NativeSelect,
	Radio,
	Text,
	TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { Link } from "react-router-dom";
import useDate from "../../hooks/useDate";
import useGetRangeArray from "../../hooks/useGetRangeArray";
import usePasswordValidation from "../../hooks/usePasswordValidation";

type Props = {
	handleSignup: (values: {
		name: string;
		dob: string;
		mobile: string;
		gender: string;
		password: string;
	}) => void;
	loading: boolean;
};

const SignUpForm = ({ handleSignup, loading }: Props) => {
	const rangeArray = useGetRangeArray();
	const validatePassword = usePasswordValidation();
	const date = useDate();
	const signupForm = useForm({
		initialValues: {
			name: "",
			surname: "",
			mobile: "",
			password: "",
			gender: "male",
			day: "5",
			month: "1",
			year: "1998",
		},

		// :: Validation ::
		validate: {
			name: (value) => (value.trim().length < 3 ? "Name is Required" : null),
			mobile: (value) =>
				/^[6-9]\d{9}$/.test(value) ? null : "Invalid Mobile Number",
			password: (value) => validatePassword(value),
		},

		// :: Final Output ::
		transformValues: (values) => ({
			name: `${values.name} ${values.surname}`,
			dob: `${values.day}/${Number(values.month) + 1}/${values.year}`,
			mobile: values.mobile,
			gender: values.gender,
			password: values.password,
		}),
	});
	return (
		<Box
			sx={{
				w: "100%",
				display: "flex",
				flexDirection: "column",
				marginTop: "1rem",
				gap: "1rem",
				position: "relative",
			}}
			autoComplete="off"
			component="form"
			onSubmit={signupForm.onSubmit((values) => handleSignup(values))}>
			<LoadingOverlay visible={loading} />
			<Flex justify={"space-between"} gap="1rem">
				{/*---:: name ::---*/}
				<TextInput
					placeholder="Name"
					size={"md"}
					{...signupForm.getInputProps("name")}
				/>

				{/*---:: surname ::---*/}
				<TextInput
					placeholder="Surname"
					size={"md"}
					{...signupForm.getInputProps("surname")}
				/>
			</Flex>

			{/*---:: email or mobile ::---*/}
			<TextInput
				size={"md"}
				placeholder="Mobile Number"
				{...signupForm.getInputProps("mobile")}
			/>

			{/*---:: password ::---*/}
			<TextInput
				type="password"
				placeholder="New Password"
				size={"md"}
				autoComplete="off"
				{...signupForm.getInputProps("password")}
			/>

			{/*---:: Date of Birth ::---*/}
			<Input.Wrapper label="Date of birth ?">
				<Flex justify={"space-between"} gap="1rem">
					<NativeSelect
						style={{ flexGrow: "1" }}
						data={rangeArray(1, 31)}
						{...signupForm.getInputProps("day")}
					/>
					<NativeSelect
						style={{ flexGrow: "1" }}
						data={[
							{ value: "0", label: "Jan" },
							{ value: "1", label: "Feb" },
							{ value: "2", label: "Mar" },
							{ value: "3", label: "Apr" },
							{ value: "4", label: "May" },
							{ value: "5", label: "Jun" },
							{ value: "6", label: "Jul" },
							{ value: "7", label: "Aug" },
							{ value: "8", label: "Sep" },
							{ value: "9", label: "Oct" },
							{ value: "10", label: "Nov" },
							{ value: "11", label: "Dec" },
						]}
						{...signupForm.getInputProps("month")}
					/>
					<NativeSelect
						style={{ flexGrow: "1" }}
						data={rangeArray(date.getFullYear() - 118, date.getFullYear(), {
							reverse: true,
						})}
						{...signupForm.getInputProps("year")}
					/>
				</Flex>
			</Input.Wrapper>

			{/*---:: Gender Select ::---*/}
			<Radio.Group
				name="favoriteFramework"
				label="Gender ?"
				{...signupForm.getInputProps("gender")}>
				<Group mt="xs">
					<Radio value="male" label="Male" />
					<Radio value="female" label="Female" />
					<Radio value="transgender" label="Transgender" />
				</Group>
			</Radio.Group>
			<Text fz="xs">
				People who use our service may have uploaded your contact information to
				Facebook. <Link to="/">Learn more</Link>.
			</Text>
			<Text fz="xs">
				By clicking Sign Up, you agree to our{" "}
				<Link to="/">Terms, Privacy Policy</Link> and{" "}
				<Link to="/">Cookies Policy</Link>. You may receive SMS notifications
				from us and can opt out at any time.
			</Text>

			<Button
				sx={{ alignSelf: "center", fontSize: "1.2rem" }}
				color={"green"}
				type="submit"
				size="md">
				Sign Up
			</Button>
		</Box>
	);
};

export default SignUpForm;
