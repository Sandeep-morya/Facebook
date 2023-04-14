import React, { useCallback, useEffect, useRef, useState } from "react";
import {
	Modal,
	Button,
	TextInput,
	useMantineTheme,
	Flex,
	Divider,
} from "@mantine/core";
import { useUserProfile } from "../../Provider/UserContextProvider";
import AvatarButton from "./AvatarButton";
import { MdEmojiEmotions } from "react-icons/md";
import DropZone from "./DropZone";
import axios from "axios";
import useAlert from "../../hooks/useAlert";
import { useToken } from "../../Provider/AuthContextProvider";
import useSearchPosts from "../../hooks/useSearchPosts";

interface Props {
	opened: boolean;
	close: () => void;
	refresh: () => void;
	name: string;
	image: string;
}
const { VITE_CLOUD_NAME, VITE_UPLOAD_PRESET, VITE_UPLOAD_URL, VITE_API_URL } =
	import.meta.env;

export default function UploadModal({
	opened,
	close,
	refresh,
	name,
	image,
}: Props) {
	const [files, setFiles] = useState<File[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const [imageURL, setImageURL] = useState("");
	const { token } = useToken();
	const Alert = useAlert();

	const theme = useMantineTheme();

	// :: Uplaod Post ::
	const uploadThisPost = useCallback(async () => {
		const text = inputRef.current?.value;
		if (text === "") {
			setIsError(true);
			return;
		} else {
			const type = imageURL === "" ? "text" : "image";

			const post = { text, type, url: imageURL };
			setIsLoading(true);
			try {
				const { data } = await axios.post(`${VITE_API_URL}/post/create`, post, {
					headers: { Authorization: token },
				});
				setIsLoading(false);
				Alert(data?.message, "success");
				refresh();
				close();
				setImageURL("");
				setFiles([]);
			} catch (error) {
				Alert("Something went wrong", "error");
			}
		}
	}, [inputRef, token, imageURL]);

	useEffect(() => {
		// :: files can be null  ::
		// :: Upload Image ::
		async function uploadPostImage() {
			setIsLoading(true);

			const formData = new FormData();

			try {
				formData.append("file", files[0]);
				formData.append("upload_preset", VITE_UPLOAD_PRESET);
				formData.append("cloud_name", VITE_CLOUD_NAME);
				const { data } = await axios.post(VITE_UPLOAD_URL, formData);
				setImageURL(data.url);
				setIsLoading(false);
			} catch (error) {
				setIsError(true);
				setIsLoading(false);
			}
		}

		if (files.length > 0) {
			uploadPostImage();
		} else {
			setImageURL("");
		}
	}, [files, VITE_CLOUD_NAME, VITE_UPLOAD_PRESET, VITE_UPLOAD_URL]);

	return (
		<Modal
			opened={opened}
			onClose={close}
			title="Create Post"
			size="md"
			centered>
			<Divider />
			<Flex direction={"column"} gap="1rem">
				<AvatarButton src={image} name={name} />
				<TextInput
					variant="unstyled"
					size={"md"}
					error={isError}
					onKeyDown={() => setIsError(false)}
					ref={inputRef}
					rightSection={
						<MdEmojiEmotions size={22} fill={theme.colors.gray[5]} />
					}
					placeholder={`Whats on your mind, ${name.split(" ")[0]}?`}
				/>
				<DropZone {...{ files, setFiles }} />
				<Button loading={isLoading} onClick={uploadThisPost} size={"md"}>
					Post
				</Button>
			</Flex>
		</Modal>
	);
}

// :: upload mulitple images ::
// async function uploadMulitpleImages(e: ChangeEvent<HTMLInputElement>) {
// 	setIsLoading(true);

// 	// :: e.target.files can be null also so we are returning the user ::
// 	if (!e.target.files || e.target.files.length === 0) {
// 		return;
// 	}

// 	// e.target.files.forEach(file=>formData.append("file", file))

// 	const uploads = [];
// 	for (let i = 0; i < e.target.files.length; i++) {
// 		setIsLoading(true);
// 		const formData = new FormData();
// 		formData.append("file", e.target.files[i]);
// 		formData.append("upload_preset", uplaod_preset);
// 		formData.append("cloud_name", cloud_name);
// 		try {
// 			const { data } = await axios.post(upload_url, formData);
// 			uploads.push(data.url);
// 			setIsLoading(false);
// 		} catch (error) {
// 			setIsLoading(false);
// 			setIsError(true);
// 			toastAlert("error", "failed in uploading image");
// 			return;
// 		}
// 	}
// 	setImages(uploads);
// }
