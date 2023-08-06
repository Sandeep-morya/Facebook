import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Provider/AuthContextProvider";
import SocketProvider from "./Provider/SocketContextProvider";
createRoot(document.getElementById("root") as HTMLElement).render(
	<BrowserRouter>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</BrowserRouter>,
);
