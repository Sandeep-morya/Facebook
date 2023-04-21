import { useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt, ZegoUser } from "@zegocloud/zego-uikit-prebuilt";
import { useUserProfile } from "../Provider/UserContextProvider";
import FixedButton from "../components/Common/FixedButton";
import { MdHome } from "react-icons/md";
import { useEffect, useState } from "react";

type Props = {};

function ConnectPage({}: Props) {
	const { room } = useParams();
	const { userdata } = useUserProfile();
	const navigate = useNavigate();
	const [zegoInstance, setZegoInstance] = useState<ZegoUIKitPrebuilt>();

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

		const zc = ZegoUIKitPrebuilt.create(kitToken);
		setZegoInstance(zc);
		zc.joinRoom();
	};

	const handleHomeClick = () => {
		if (zegoInstance) {
			zegoInstance.destroy();
			navigate("/");
			location.reload();
		}
	};

	useEffect(() => {
		window.document.title = `Facebook - Stream`;
	}, []);

	return (
		<div>
			<div ref={myMeeting} />
			<FixedButton
				style={{ top: "2rem", left: "2rem" }}
				onClick={handleHomeClick}>
				<MdHome />
			</FixedButton>
		</div>
	);
}

export default ConnectPage;
