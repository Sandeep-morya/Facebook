import { Menu } from "@mantine/core";
import axios from "axios";
import React, { useCallback, useState } from "react";
import { FaEye, FaPen, FaPenAlt, FaTrash } from "react-icons/fa";
import { TbDots } from "react-icons/tb";
import useAlert from "../../hooks/useAlert";
import { useToken } from "../../Provider/AuthContextProvider";
import { useUserProfile } from "../../Provider/UserContextProvider";

type Props = {
	id: string;
	user: string;
	onView: () => void;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
	setInEditMode: React.Dispatch<React.SetStateAction<boolean>>;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const { VITE_API_URL } = import.meta.env;

function PostMenu({
	id,
	user,
	setVisible,
	setInEditMode,
	setOpen,
	onView,
}: Props) {
	const { userdata } = useUserProfile();
	const { token } = useToken();
	const Alert = useAlert();

	const deletePost = useCallback(async () => {
		try {
			const { data } = await axios.delete(`${VITE_API_URL}/post/delete/${id}`, {
				headers: { Authorization: token },
			});
			Alert("Post Deleted Successfull", "success");
			setVisible(false);
		} catch (error) {
			Alert(String(error), "error");
		}
	}, [VITE_API_URL, token]);

	return (
		<Menu trigger="hover" shadow="md" width={150}>
			<Menu.Target>
				<TbDots size={25} />
			</Menu.Target>

			<Menu.Dropdown>
				<Menu.Label>Options</Menu.Label>
				<Menu.Item onClick={onView} icon={<FaEye size={14} />}>
					View
				</Menu.Item>
				{user === userdata?._id && (
					<Menu.Item
						onClick={() => {
							setInEditMode(true);
							setOpen(true);
						}}
						icon={<FaPenAlt size={14} />}>
						Edit
					</Menu.Item>
				)}

				{user === userdata?._id && <Menu.Divider />}

				{user === userdata?._id && (
					<Menu.Item onClick={deletePost} c="red" icon={<FaTrash size={14} />}>
						Delete
					</Menu.Item>
				)}
			</Menu.Dropdown>
		</Menu>
	);
}

export default PostMenu;
