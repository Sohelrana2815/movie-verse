import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto p-4">
      <Navbar />

      <main className="flex-1 mt-24">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
