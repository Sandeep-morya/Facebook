export interface UserProfileType {
	_id: string;
	name: string;
	image: string;
	cover: string;
	email: string;
	mobile: string;
	dob: string;
	gender: string;
	friends: string[];
	followers: string[];
	followings: string[];
	chats: string[];
	posts: string[];
	createdAt: string;
	updatedAt: string;
	__v: number;
}

export interface CloudinaryResponse {
	asset_id: string;
	public_id: string;
	version: number;
	version_id: string;
	signature: string;
	width: number;
	height: number;
	format: string;
	resource_type: string;
	created_at: string;
	tags: string[];
	bytes: number;
	type: string;
	etag: string;
	placeholder: boolean;
	url: string;
	secure_url: string;
	access_mode: string;
	original_filename: string;
	error?: {
		message: string;
	};
}
