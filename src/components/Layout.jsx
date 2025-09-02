import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { CalendlyFloatingButton } from "./CalendlyFloatingButton";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
      <CalendlyFloatingButton side="right" />
    </div>
  );
};

export default Layout;
