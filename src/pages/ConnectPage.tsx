import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useUserProfile } from "../Provider/UserContextProvider";

type Props = {};

function ConnectPage({}: Props) {
	const { room } = useParams();
	const { userdata } = useUserProfile();

	const myMeeting = async (element: HTMLDivElement) => {
		const AppID = 1181006195;
		const serverSecret = "e5b6e9f185c9f368c40476dfaaf537e7";

		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			AppID,
			serverSecret,
			room!,
			userdata!._id,
			userdata?.name,
		);

		ZegoUIKitPrebuilt.create(kitToken).joinRoom();
	};

	return (
		<div>
			<div ref={myMeeting} />
		</div>
	);
}

export default ConnectPage;
