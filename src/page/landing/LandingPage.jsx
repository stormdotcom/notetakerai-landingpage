import Features from "./Features";
import HeroSection from "./HeroSection";
import Install from "./Install";
import Pricing from "./Pricing";
import WorkingModel from "./WorkingModel";

const LandingPage = () => {
  return (
    <section className="w-full">
      <HeroSection />
      <Features />
      <Pricing />
      <WorkingModel />
      <Install />
    </section>
  );
};

export default LandingPage;
