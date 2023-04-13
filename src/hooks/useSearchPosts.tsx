import axios, { AxiosResponse } from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { PostType } from "../types";
import useAlert from "./useAlert";

const { VITE_API_URL, VITE_TOKEN_SECRET } = import.meta.env;

function useSearchPosts(user_id?: string) {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [posts, setPosts] = useState<PostType[]>([]);
	const Alert = useAlert();
	const getPosts = useCallback(async () => {
		setIsError(false);
		setIsLoading(true);
		try {
			const { data }: AxiosResponse<PostType[]> = await axios.get(
				VITE_API_URL + "/posts/all",
				{
					params: user_id ? { user_id } : {},
					headers: { Authorization: VITE_TOKEN_SECRET },
				},
			);
			setPosts(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
			Alert("503 Server Error", "error");
		}
	}, [VITE_TOKEN_SECRET]);

	useEffect(() => {
		getPosts();
	}, []);

	return { isLoading, isError, posts, getPosts };
}

export default useSearchPosts;
