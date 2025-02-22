import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <main >
        <Outlet /> {/* Render nested routes */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
