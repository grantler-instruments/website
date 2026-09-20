import type { Config } from "@react-router/dev/config";
import { things } from "./src/data/things";
import { events } from "./src/data/events";

export default {
  appDirectory: "src",
  ssr: false,
  prerender: [
    "/",
    "/about",
    "/things",
    "/events",
    "/contact",
    "/404",
    ...things.map((thing) => `/things/${thing.slug}`),
    ...events.map((event) => `/events/${event.id}`),
  ],
} satisfies Config;
