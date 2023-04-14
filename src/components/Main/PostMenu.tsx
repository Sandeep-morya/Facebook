import { Menu } from "@mantine/core";
import React from "react";
import { FaEye, FaPen, FaPenAlt, FaTrash } from "react-icons/fa";
import { TbDots } from "react-icons/tb";
import { useUserProfile } from "../../Provider/UserContextProvider";

type Props = {
	id: string;
	onView: () => void;
};

function PostMenu({ id, onView }: Props) {
	const { userdata } = useUserProfile();
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
				{id === userdata?._id && (
					<Menu.Item icon={<FaPenAlt size={14} />}>Edit</Menu.Item>
				)}

				{id === userdata?._id && <Menu.Divider />}

				{id === userdata?._id && (
					<Menu.Item c="red" icon={<FaTrash size={14} />}>
						Delete
					</Menu.Item>
				)}
			</Menu.Dropdown>
		</Menu>
	);
}

export default PostMenu;
