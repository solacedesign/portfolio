import { HeroSection } from "./components/HeroSection";
import { HomeAboutSection } from "./components/HomeAboutSection";
import HomeExtraProjects from "./components/HomeExtraProjects";
import HomeFinalComponent from "./components/HomeFinalComponent";
import { HomeProjectsSection } from "./components/HomeProjectsSection";
import { HomeVideo } from "./components/HomeVideo";
import LogoSlider from "./components/LogoSlider";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <HomeAboutSection/>
      <HomeProjectsSection/>
      <HomeVideo/>
      <LogoSlider/>
      <HomeExtraProjects/>
      <HomeFinalComponent/>
    </div>
  );
}
