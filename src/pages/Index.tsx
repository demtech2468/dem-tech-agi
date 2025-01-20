import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProperties />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;