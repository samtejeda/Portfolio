import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sam — Developer",
  description: "iOS & web developer portfolio",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
    </>
  );
}
