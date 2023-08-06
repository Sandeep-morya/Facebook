import { createContext, useContext, useMemo, PropsWithChildren } from "react";
import { io, Socket } from "socket.io-client";

import { useUserProfile } from "./UserContextProvider";

const SocketContext = createContext(null as Socket | null);

export function useSocket() {
	return useContext(SocketContext);
}

const { VITE_API_URL } = import.meta.env;

function SocketProvider({ children }: PropsWithChildren) {
	const { userdata } = useUserProfile();
	const socket = useMemo(() => {
		if (userdata) {
			return io(VITE_API_URL, { query: { user: userdata._id } });
		} else {
			return null;
		}
	}, [userdata]);

	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
}

export default SocketProvider;
