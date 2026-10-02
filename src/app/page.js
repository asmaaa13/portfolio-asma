import AboutPreview from "@/components/sections/AboutPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Skills />
      <FeaturedProjects />
      <ContactCTA />
    </>
  );
}
