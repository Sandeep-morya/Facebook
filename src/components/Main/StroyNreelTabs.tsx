import { Box, Flex, Tabs } from "@mantine/core";
import React, { useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import CreateStoryCard from "../Common/CreateStoryCard";
import ReelCard from "./ReelCard";
import StoryCard from "./StoryCard";

type Props = {};

function StroyNreelTabs({}: Props) {
	const [activeTab, setActiveTab] = useState<string | null>("Stories");
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
			<Tabs.Panel value="Stories" h="12rem">
				<Flex gap={"0.5rem"} h="100%">
					<CreateStoryCard />
					<StoryCard />
					<StoryCard />
					<StoryCard />
					<StoryCard />
				</Flex>
			</Tabs.Panel>

			<Tabs.Panel value="Reels" h="12rem">
				<Flex gap={"0.5rem"} h="100%">
					<ReelCard />
					<ReelCard />
					<ReelCard />
					<ReelCard />
					<ReelCard />
				</Flex>
			</Tabs.Panel>
		</Tabs>
	);
}

export default StroyNreelTabs;
