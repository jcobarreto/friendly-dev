import type { Project } from "~/types";
import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import AboutPreview from "~/components/AboutPreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom website development" },
  ];
}

export async function loader({ request }: Route.LoaderArgs):Promise<{projects:Project[]}> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects?features=true`);
  const data = await res.json();

  return { projects: data };
}

export const HomePage = ({ loaderData }: Route.ComponentProps) => {

  // const now = new Date().toISOString();
  // if (typeof window !== "undefined") {
  //   console.log("Server Render at:", now);
  // } else {
  //      console.log("Client Hydration at:", now);
  // }

  const { projects } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
    </>
  );
}

export default HomePage;
