import { ActionIcon, Divider, Flex } from "@mantine/core";
import React, { useCallback } from "react";
import NavButton from "./NavButton";
import { BsFillMoonFill, BsGearFill } from "react-icons/bs";
import { MdFeedback, MdOutlineHelp } from "react-icons/md";
import { ImExit } from "react-icons/im";
import Ftext from "../Footer/Ftext";
import useDate from "../../hooks/useDate";
import AvatarButton from "../Common/AvatarButton";
import FullLink from "../Common/FullLink";
import { useUserProfile } from "../../Provider/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../Provider/AuthContextProvider";
type Props = {};

function AccountModal({}: Props) {
	const date = useDate();
	const { isLoading, isError, userdata } = useUserProfile();
	const { removeToken } = useToken();

	if (!userdata) {
		return <></>;
	}
	return (
		<Flex
			direction={"column"}
			bg="white"
			p={"md"}
			gap="0.5rem"
			sx={{
				position: "absolute",
				width: "23rem",
				top: "150%",
				right: "0",
				zIndex: 50,
				boxShadow:
					"rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
				borderRadius: "0.5rem",
			}}>
			<Flex
				w="100%"
				h={"7rem"}
				p="0.5rem"
				justify={"space-between"}
				direction={"column"}
				sx={{
					boxShadow: "rgba(17, 17, 26, 0.5) 0px 0px 10px",
					borderRadius: "0.5rem",
					overflow: "hidden",
				}}>
				<AvatarButton
					src={userdata.image}
					name={userdata.name}
					redirectOn={userdata._id}
				/>
				<Divider size="xs" />
				<FullLink />
			</Flex>

			<Flex direction={"column"} mt="1rem">
				<NavButton Icon={BsGearFill} name="Settings & Privacy" withAngle />
				<NavButton Icon={MdOutlineHelp} name="Help & Support" withAngle />
				<NavButton
					Icon={BsFillMoonFill}
					name="Display & accessibility"
					withAngle
				/>
				<NavButton Icon={MdFeedback} name="Give Feedback" />
				<NavButton onClick={() => removeToken()} Icon={ImExit} name="Log Out" />
			</Flex>
			<Flex wrap={"wrap"} gap="0.5rem" rowGap={"0"}>
				<Ftext>Privacy</Ftext> &#183;
				<Ftext>Terms</Ftext> &#183;
				<Ftext>Advertising</Ftext> &#183;
				<Ftext>Ad choices</Ftext> &#183;
				<Ftext>Cookies</Ftext> &#183;
				<Ftext>More</Ftext> &#183;
				<Ftext>Meta &copy; {date.getFullYear()}</Ftext>
			</Flex>
		</Flex>
	);
}

export default AccountModal;
