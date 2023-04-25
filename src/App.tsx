import { MantineProvider, Text, Button, Stack } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Boot from "./components/Misc/Boot";
import AllRoutes from "./Routes";

export default function App() {
	const [loading, setLoading] = useState(true);

	const heatUpTheServer = useCallback(async () => {
		await axios.get(import.meta.env.VITE_API_URL);
		setLoading(false);
	}, []);

	useEffect(() => {
		heatUpTheServer();
	}, [heatUpTheServer]);
	// return <Boot />;
	return loading ? (
		<Boot />
	) : (
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
