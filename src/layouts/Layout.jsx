import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <main className="w-full overflow-hidden">
    <Navbar />
      {children}
    <Footer />
    </main>
  );
};

export default Layout;
