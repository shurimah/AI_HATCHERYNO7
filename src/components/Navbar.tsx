import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);

      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-hatchery-darker/10 backdrop-blur-md py-2" : "bg-transparent py-6"}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <img alt="Hatchery No.7 Logo"
          // Increased from h-10 w-10 to h-16 w-16
          style={{
            background: 'transparent'
          }} // Ensuring transparent background
          src="RAW_SPLASH_DARK_EGG.mp4" className="h-16 w-16 object-contain" />
          </div>
          <span className="font-orbitron text-hatchery-mint font-bold text-xl tracking-wider">HATCHERY NO.7</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {["Home", "Products", "Process", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="font-orbitron text-sm tracking-wider text-hatchery-light hover:text-hatchery-mint transition-colors">
              {item.toUpperCase()}
            </a>)}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-hatchery-mint hover:text-hatchery-accent transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed inset-0 bg-hatchery-darker/95 backdrop-blur-md z-40 transition-transform duration-300 transform
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {["Home", "Products", "Process", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="font-orbitron text-xl tracking-wider text-hatchery-light hover:text-hatchery-mint transition-colors">
              {item.toUpperCase()}
            </a>)}
        </div>
      </div>
    </nav>;
};
export default Navbar;