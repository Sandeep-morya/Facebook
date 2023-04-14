import {
	createStyles,
	Title,
	Text,
	Button,
	Container,
	Group,
	rem,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
	root: {
		paddingTop: rem(80),
		paddingBottom: rem(120),
		height: "100vh",
		backgroundColor: theme.fn.variant({
			variant: "filled",
			color: theme.primaryColor,
		}).background,
	},

	label: {
		textAlign: "center",
		fontWeight: 900,
		fontSize: rem(220),
		lineHeight: 1,
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
		color: theme.colors[theme.primaryColor][3],

		[theme.fn.smallerThan("sm")]: {
			fontSize: rem(120),
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		textAlign: "center",
		fontWeight: 900,
		fontSize: rem(38),
		color: theme.white,

		[theme.fn.smallerThan("sm")]: {
			fontSize: rem(32),
		},
	},

	description: {
		maxWidth: rem(540),
		margin: "auto",
		marginTop: theme.spacing.xl,
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
		color: theme.colors[theme.primaryColor][1],
	},
}));

function ServerError() {
	const { classes } = useStyles();
	const navigate = useNavigate();

	return (
		<div className={classes.root}>
			<Container>
				<div className={classes.label}>503</div>
				<Title className={classes.title}>Internal Server Error...</Title>
				<Text size="lg" align="center" className={classes.description}>
					Our servers could not handle your request. Don&apos;t worry, our
					development team was already notified. Try refreshing the page.
				</Text>
				<Group position="center">
					<Button onClick={() => navigate("/home")} variant="white" size="md">
						Go to Homepage
					</Button>
				</Group>
			</Container>
		</div>
	);
}

export default ServerError;
