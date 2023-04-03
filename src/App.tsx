import { MantineProvider, Text, Button } from "@mantine/core";

export default function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Button>This is button from Mantine</Button>
		</MantineProvider>
	);
}
