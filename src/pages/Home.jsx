import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import HomeServices from "../components/HomeServices";
import HomeProjects from "../components/HomeProjects";
import HomeCareers from "../components/HomeCareers";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeProjects />
      <HomeCareers />
      <Contact />
    </>
  );
}
