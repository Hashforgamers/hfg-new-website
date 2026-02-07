import AppShell from '@/components/AppShell';

import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeatureSection";
import IndiaGamingSection from "@/components/GameSection";
import HashShop from "@/components/HashShop";
import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemSection";
import TryNow from "@/components/TryNow";

export default function Page() {
  return (
    <AppShell>
      <div className="min-h-screen w-screen">
        <Hero />
        <AboutSection />
        <TryNow />
        <FeaturesSection />
        <HashShop />
        <ProblemsSection />
        <IndiaGamingSection />
      </div>
    </AppShell>
  );
}
