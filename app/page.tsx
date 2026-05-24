"use client";
import Icon from "./ui/icons/Icon";
import { useScrollManager } from "./hooks/useScrollManager";
import HomeSection from "./components/Home";
import AboutSection from "./components/About";

export default function Home() {
  useScrollManager();

  return (
    <>
      <HomeSection />
      <AboutSection />
    </>
  );
}
