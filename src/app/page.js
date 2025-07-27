import Image from "next/image";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { HomeAboutSection } from "./components/HomeAboutSection";
import { HomeProjectsSection } from "./components/HomeProjectsSection";
import { HomeVideo } from "./components/HomeVideo";
import LogoSlider from "./components/LogoSlider";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <HomeAboutSection></HomeAboutSection>
      <HomeProjectsSection></HomeProjectsSection>
      <HomeVideo></HomeVideo>
      <LogoSlider></LogoSlider>
    </div>
  );
}
