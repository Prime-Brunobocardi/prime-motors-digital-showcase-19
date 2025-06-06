
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import HowItWorks from "@/components/HowItWorks";
import Plans from "@/components/Plans";
import Examples from "@/components/Examples";
import VideoSection from "@/components/VideoSection";
import FAQ from "@/components/FAQ";
import SocialProof from "@/components/SocialProof";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Advantages />
      <HowItWorks />
      <Plans />
      <Examples />
      <VideoSection />
      <SocialProof />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
