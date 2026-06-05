// To apply hover state from Panel to Thumbnail we need to jump through a bunch
// of hoops because we cant do it with regular CSS

import { createContext } from "svelte";

interface HoverContext {
  hovering: boolean;
}

export const [getHoverContext, setHoverContext] = createContext<HoverContext>();
