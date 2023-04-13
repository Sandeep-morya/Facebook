import axios from "axios";
import React, { useCallback, useState } from "react";

type Props = {};

const { VITE_CLOUD_NAME, VITE_UPLOAD_PRESET, VITE_UPLOAD_URL, VITE_API_URL } =
	import.meta.env;

function useCloudynaryImageUpload() {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [imageURL, setImageURL] = useState("");

	const uploadImage = useCallback(async (file: File) => {
		setIsLoading(true);

		const formData = new FormData();

		try {
			formData.append("file", file);
			formData.append("upload_preset", VITE_UPLOAD_PRESET);
			formData.append("cloud_name", VITE_CLOUD_NAME);
			const { data } = await axios.post(VITE_UPLOAD_URL, formData);
			setImageURL(data.url);
			setIsLoading(false);
		} catch (error) {
			setIsError(true);
			setIsLoading(false);
		}
	}, []);

	return { isError, isLoading, imageURL, uploadImage };
}

export default useCloudynaryImageUpload;
