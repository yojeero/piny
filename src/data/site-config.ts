import teamData from "@/data/team.json";
import type { SiteConfig, TeamMember } from "@/data/types";

const siteUrl = (import.meta.env.SITE ?? "https://pintin.pages.dev").replace(
  /\/$/,
  "",
);

const siteConfig: SiteConfig = {
  title: "PINTIN",
  titleSeparator: "",
  url: siteUrl,
  description: "Tech Blog",
  logo: {
    src: "",
    alt: "PINTIN",
  },
  author: "Yojee",
  image: {
    src: "/assets/team/yojee.webp",
    alt: "Yojee - Full Stack Developer",
  },
};

export const team = teamData as TeamMember[];

export default siteConfig;
