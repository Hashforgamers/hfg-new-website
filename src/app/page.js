import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeatureSection";
import Footer from "@/components/FooterSection";
import IndiaGamingSection from "@/components/GameSection";
import HashShop from "@/components/HashShop";
import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemSection";
import TryNow from "@/components/TryNow";


export default function Page() {
  return (
    <div className=" min-h-screen w-screen">
      <Hero/>
      <AboutSection/>
      {/* Add other sections here */}
      <TryNow/>
      <FeaturesSection/>
      <HashShop/>
      <ProblemsSection/>
      <IndiaGamingSection/>
      <Footer/>
    </div>
  )
}
