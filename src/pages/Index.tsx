
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Process from "../components/Process";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-hatchery-dark text-hatchery-light overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
