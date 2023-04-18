import { createContext, useContext, useMemo, PropsWithChildren } from "react";
import { io, Socket } from "socket.io-client";

import { useUserProfile } from "./UserContextProvider";

const SocketContext = createContext(null as Socket | null);

export function useSocket() {
	return useContext(SocketContext);
}

function SocketProvider({ children }: PropsWithChildren) {
	const { userdata } = useUserProfile();
	const socket = useMemo(() => {
		return io("http://localhost:8080", {
			query: { user: userdata?._id },
		});
	}, []);

	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
}

export default SocketProvider;
