import FAQs from "../components/FAQS";
import CustomCursor from "../components/Helper/CustomCursor";
import { About } from "../components/HomeComponents/About";
import Hero from "../components/HomeComponents/Hero";
import { Services } from "../components/HomeComponents/Services";
import PortfolioCards from "../components/HomeComponents/PortfolioCards";
import GetTouch from "../components/HomeComponents/GetTouch";
export default function Home() {
  return (
    <div>
      <CustomCursor />
      <Hero />
      <About />
      <Services />
      <FAQs />
      <PortfolioCards />
      <GetTouch />



    </div>
  );
}
