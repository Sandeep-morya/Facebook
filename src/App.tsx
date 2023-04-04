import { MantineProvider, Text, Button, Stack } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import AllRoutes from "./Routes";

export default function App() {
	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				breakpoints: {
					xs: "30em",
					sm: "48em",
					md: "64em",
					lg: "74em",
					xl: "100em",
				},
			}}>
			<Notifications />
			<AllRoutes />
		</MantineProvider>
	);
}
