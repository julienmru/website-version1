import { Hero } from "@/components/Hero";
import { AudienceSection } from "@/components/AudienceSection";
import { LearnMore } from "@/components/LearnMore";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <AudienceSection />
      <LearnMore />
      <BlogSection />
      <Footer />
    </main>
  );
};

export default Index;
