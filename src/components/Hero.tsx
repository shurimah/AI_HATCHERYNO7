import { ChevronDown } from "lucide-react";
const Hero = () => {
  const handleScroll = () => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-hatchery-mint/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[15%] w-60 h-60 bg-hatchery-mint/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] left-[30%] w-20 h-20 bg-hatchery-mint/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/dfa98178-9f3f-4df0-83b8-3e3c3ef349a2.png" 
          alt="Dragon laboratory scene"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-hatchery-dark/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="rounded-sm">
          
          <h1 className="text-5xl md:text-7xl mb-6 text-glow font-extrabold">
            <span className="text-hatchery-mint text-center px-0 my-0 font-extralight text-3xl">HATCHERY</span> <span className="text-hatchery-light">NO.7</span>
          </h1>
          
          
          
          <button onClick={handleScroll} className="font-extralight">
            EXPLORE COLLECTION
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-hatchery-mint h-8 w-8" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hatchery-mint/30 to-transparent"></div>
      <div className="absolute bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-hatchery-mint/20 to-transparent"></div>
    </section>;
};
export default Hero;