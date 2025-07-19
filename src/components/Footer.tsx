
import { Hexagon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-hatchery-darker relative overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hatchery-mint/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center mb-8 md:mb-0">
            <div className="relative">
              <img 
                src="/logo-1.png" 
                alt="Hatchery No.7 Logo" 
                className="h-20 w-20 mr-3"
              />
              <div className="absolute -inset-1 bg-hatchery-mint/10 rounded-full blur-md -z-10"></div>
            </div>
            <div>
              <div className="font-orbitron text-hatchery-mint font-bold text-xl tracking-wider">HATCHERY NO.7</div>
              <div className="text-hatchery-light/50 text-xs">Precision-crafted specimens</div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Home", "Products", "Process", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-orbitron text-sm tracking-wider text-hatchery-light/60 hover:text-hatchery-mint transition-colors flex items-center"
              >
                <Hexagon className="h-3 w-3 mr-2 text-hatchery-mint/50" />
                {item.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-12 pt-6 border-t border-hatchery-mint/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-hatchery-light/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Hatchery No.7 • All specimens protected
          </div>
          
          <div className="flex space-x-6">
            {["Privacy", "Terms", "Support"].map((item) => (
              <a 
                key={item} 
                href="#"
                className="text-hatchery-light/50 text-sm hover:text-hatchery-mint transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
