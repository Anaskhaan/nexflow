import "./App.css";
import { useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServicesDetail from "./components/ServiceComponent/ServicesDetail";
import Portfolio from "./pages/Portfolio";
import MeetingForm from "./pages/Meeting";
import PortfolioDetails from "./components/PortfolioComponents/PortfolioDetails";

const ScrollToTop = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);
  return null;
};

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Meeting" element={<MeetingForm />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Portfolio/:id" element={<PortfolioDetails />} />

            <Route path="/Services" element={<Services />} />
            <Route path="/Services/:id" element={<ServicesDetail />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
