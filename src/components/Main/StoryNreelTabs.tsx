import { ActionIcon, Box, Flex, Tabs } from "@mantine/core";
import React, { useRef, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import CreateStoryCard from "../Common/CreateStoryCard";
import ReelCard from "./ReelCard";
import StoryCard from "./StoryCard";
import { TfiAngleRight } from "react-icons/tfi";
import ScrollBtnRight from "../Common/ScrollBtnRight";
import ScrollBtnLeft from "../Common/ScrollBtnLeft";

function StoryNreelTabs() {
	const [activeTab, setActiveTab] = useState<string | null>("Stories");
	const firstRef = useRef<HTMLDivElement>(null);
	const secondRef = useRef<HTMLDivElement>(null);

	// :: left button state management for reels ::
	const [showFirstLeftButton, setShowFirstLeftButton] = useState(false);

	// :: right button state management for reels ::
	const [showFirstRightButton, setShowFirstRightButton] = useState(true);

	// :: left button state management for story ::
	const [showSecondLeftButton, setShowSecondLeftButton] = useState(false);

	// :: right button state management for story ::
	const [showSecondRightButton, setShowSecondRightButton] = useState(true);

	const handleFirstRefScroll = (left: number) => {
		if (firstRef.current) {
			const scrollableWidth =
				firstRef.current.scrollWidth - firstRef.current.clientWidth;
			firstRef.current.scrollBy({ left, behavior: "smooth" });
			setShowFirstLeftButton(firstRef.current.scrollLeft + left > 0);
			setShowFirstRightButton(
				firstRef.current.scrollLeft < scrollableWidth - left,
			);
		}
	};

	const handleSecondRefScroll = (left: number) => {
		if (secondRef.current) {
			const scrollableWidth =
				secondRef.current.scrollWidth - secondRef.current.clientWidth;
			setShowSecondLeftButton(secondRef.current.scrollLeft + left > 0);
			setShowSecondRightButton(
				secondRef.current.scrollLeft < scrollableWidth - left,
			);
			secondRef.current.scrollBy({ left, behavior: "smooth" });
		}
	};

	return (
		<Tabs
			value={activeTab}
			onTabChange={setActiveTab}
			defaultValue={"Stories"}
			bg={"white"}
			variant="pills"
			p={"1rem"}
			sx={{ borderRadius: "0.5rem" }}>
			<Tabs.List grow sx={{ marginBottom: "1rem" }}>
				<Tabs.Tab
					sx={{ fontWeight: 500, fontSize: "1rem" }}
					icon={<FaBookOpen size={22} />}
					value="Stories">
					Stories
				</Tabs.Tab>
				<Tabs.Tab
					sx={{ fontWeight: 500, fontSize: "1rem" }}
					icon={<BiMoviePlay size={22} />}
					value="Reels">
					Reels
				</Tabs.Tab>
			</Tabs.List>
			<Tabs.Panel value="Stories" h="12rem" pos={"relative"}>
				<Flex
					gap={"0.5rem"}
					h="100%"
					ref={secondRef}
					sx={{
						overflowX: "scroll",
						"&::-webkit-scrollbar": { display: "none" },
						"-ms-overflow-style": "none" /* IE 11 */,
						scrollbarWidth: "none",
					}}>
					{showSecondLeftButton && (
						<ScrollBtnLeft onClick={() => handleSecondRefScroll(-300)} />
					)}

					<CreateStoryCard />
					{new Array(20).fill("reel").map((e, i) => (
						<StoryCard
							key={e + i}
							image={`https://picsum.photos/400/600?random=${i + 1}`}
						/>
					))}
				</Flex>
				{showSecondRightButton && (
					<ScrollBtnRight onClick={() => handleSecondRefScroll(300)} />
				)}
			</Tabs.Panel>

			<Tabs.Panel value="Reels" h="12rem" pos={"relative"}>
				{showFirstLeftButton && (
					<ScrollBtnLeft onClick={() => handleFirstRefScroll(-300)} />
				)}

				<Flex
					ref={firstRef}
					gap={"0.5rem"}
					h="100%"
					sx={{
						overflowX: "scroll",
						"&::-webkit-scrollbar": { display: "none" },
						"-ms-overflow-style": "none" /* IE 11 */,
						scrollbarWidth: "none",
					}}>
					{new Array(20).fill("reel").map((e, i) => (
						<ReelCard
							key={e + i}
							image={`https://picsum.photos/400/600?random=${(i + 1) * 3}`}
						/>
					))}
				</Flex>
				{showFirstRightButton && (
					<ScrollBtnRight onClick={() => handleFirstRefScroll(300)} />
				)}
			</Tabs.Panel>
		</Tabs>
	);
}

export default StoryNreelTabs;
