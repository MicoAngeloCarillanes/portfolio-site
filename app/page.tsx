import Hero from "@/components/Hero";
import { FloatingNavbar } from '@/components/ui/FloatingNavbar'
import Grid from "@/components/Grid";
import Background from "@/components/Background";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full h-full">
        <FloatingNavbar 
          navItems={navItems}
        />
        <Background />
        <Hero />
        <Grid />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
