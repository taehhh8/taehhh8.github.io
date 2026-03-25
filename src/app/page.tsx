import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Experience from '@/components/Experience/Experience';
import Contact from '@/components/Contact/Contact';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Navigation />
      <ThemeToggle />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Experience />
        <Contact />
      </main>
    </>
  );
}