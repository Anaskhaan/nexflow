import AboutSection from "./(components)/AboutSection";
import FAQSection from "./(components)/FAQSection";
import HeroSection from "./(components)/HeroSection";
import ServicesSection from "./(components)/ServicesSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection/>
      <FAQSection />
    </div>
  );
};

export default page;