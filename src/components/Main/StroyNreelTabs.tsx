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

function StroyNreelTabs() {
	const [activeTab, setActiveTab] = useState<string | null>("Stories");
	const flexRef = useRef<HTMLDivElement>(null);

	const handleScrollLeft = () => {
		if (flexRef.current) {
			flexRef.current.scrollBy({ left: -200, behavior: "smooth" });
		}
	};

	const handleScrollRight = () => {
		if (flexRef.current) {
			flexRef.current.scrollBy({ left: 200, behavior: "smooth" });
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
					sx={{
						overflowX: "scroll",
						"&::-webkit-scrollbar": { display: "none" },
					}}>
					<CreateStoryCard />
					{new Array(10).fill("reel").map((e, i) => (
						<StoryCard
							key={e + i}
							image={`https://picsum.photos/400/600?random=${i + 1}`}
						/>
					))}
				</Flex>
				<ScrollBtnRight onClick={() => {}} />
			</Tabs.Panel>

			<Tabs.Panel value="Reels" h="12rem" pos={"relative"}>
				<ScrollBtnLeft onClick={handleScrollLeft} />
				<Flex
					ref={flexRef}
					gap={"0.5rem"}
					h="100%"
					sx={{
						overflowX: "scroll",
						"&::-webkit-scrollbar": { display: "none" },
					}}>
					{new Array(10).fill("reel").map((e, i) => (
						<ReelCard
							key={e + i}
							image={`https://picsum.photos/400/600?random=${(i + 1) * 3}`}
						/>
					))}
				</Flex>
				<ScrollBtnRight onClick={handleScrollRight} />
			</Tabs.Panel>
		</Tabs>
	);
}

export default StroyNreelTabs;
