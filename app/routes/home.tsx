import type { Route } from "./+types/home";
import Introduction from "~/home/introduction";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Introduction to React" },
    { name: "description", content: "Welcome to React Course!" },
  ];
}

export default function Home() {
  return <Introduction />;
}
