import { Text } from "@mantine/core";
import React from "react";
import useTimeAgo from "../../hooks/useTimeAgo";

type Props = {
	time: number;
};

function TimeAgo({ time }: Props) {
	const timeago = useTimeAgo(new Date(time));
	return <Text size="xs">{timeago}</Text>;
}

export default TimeAgo;
