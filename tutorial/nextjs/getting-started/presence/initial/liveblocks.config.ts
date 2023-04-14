import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: "{% LIVEBLOCKS_PUBLIC_KEY %}",
});

// Presence type

export const {
  RoomProvider,
  useOthers,
  // ...
} = createRoomContext(client);
