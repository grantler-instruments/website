import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("things", "routes/things.tsx"),
  route("things/:id", "routes/thing.tsx"),
  route("events", "routes/events.tsx"),
  route("events/:id", "routes/event.tsx"),
  route("contact", "routes/contact.tsx"),
  route("404", "routes/not-found.tsx"),
  route("*", "routes/not-found.tsx", { id: "catch-all" }),
] satisfies RouteConfig;
