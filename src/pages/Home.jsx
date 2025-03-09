import FAQs from "../components/FAQS";
import { About } from "../components/HomeComponents/About";
import Hero from "../components/HomeComponents/Hero";
import { Services } from "../components/HomeComponents/Services";
import GetTouch from "../components/HomeComponents/GetTouch";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <FAQs />
      <GetTouch />
    </div>
  );
}
