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
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
          <source src="/ZOOMBOI.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            <span className="text-hatchery-mint text-center text-4xl">HATCHERY</span> <span className="text-hatchery-light">NO.7</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-hatchery-light/80 max-w-2xl mb-10">
            Precision-crafted 3D-printed flexi-dragons and innovative creations, 
            designed with laboratory-grade attention to detail.
          </p>
          
          <button onClick={handleScroll} className="bg-hatchery-mint/10 hover:bg-hatchery-mint/20 text-hatchery-mint border border-hatchery-mint/50 
                     px-8 py-3 rounded-md font-orbitron tracking-wider transition-all 
                     hover:border-hatchery-mint hover:border-glow">
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