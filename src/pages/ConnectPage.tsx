import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useUserProfile } from "../Provider/UserContextProvider";
import FixedButton from "../components/Common/FixedButton";
import { MdHome } from "react-icons/md";

type Props = {};

function ConnectPage({}: Props) {
	const { room } = useParams();
	const { userdata } = useUserProfile();
	const [home, setHome] = useState(false);

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
	if (home) {
		return <Navigate to={"/"} />;
	}

	return (
		<div>
			<div ref={myMeeting} />
			<FixedButton
				style={{ top: "2rem", left: "2rem" }}
				onClick={() => setHome(true)}>
				<MdHome />
			</FixedButton>
		</div>
	);
}

export default ConnectPage;
