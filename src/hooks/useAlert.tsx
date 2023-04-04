import { notifications } from "@mantine/notifications";
import React from "react";
import { MdCancel, MdCheck, MdNotifications, MdWarning } from "react-icons/md";

type AlertType = "success" | "error" | "warning";

const genColor = (type: AlertType | undefined) =>
	type === "success"
		? "green"
		: type === "error"
		? "red"
		: type === "warning"
		? "orange"
		: "blue";

const useAlert = () => {
	return (message: string, type?: AlertType, title?: string) => {
		notifications.show({
			title,
			message,
			color: genColor(type),

			icon:
				type === "success" ? (
					<MdCheck />
				) : type === "error" ? (
					<MdCancel />
				) : type === "warning" ? (
					<MdWarning />
				) : (
					<MdNotifications />
				),
			styles: (theme) => ({
				root: {
					borderColor: genColor(type),
					padding: "1rem",

					backgroundColor:
						type === "success"
							? theme.colors.green[1]
							: type === "error"
							? theme.colors.red[1]
							: type === "warning"
							? theme.colors.orange[1]
							: theme.colors.blue[1],
				},
				description: {
					fontSize: "0.9rem",
					fontWeight: 500,
				},
			}),
		});
	};
};

export default useAlert;
