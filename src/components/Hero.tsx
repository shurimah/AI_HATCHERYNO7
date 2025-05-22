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
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 mx-0 my-[113px]">
          <source src="/ZOOMBOI.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center my-0 py-[240px]">
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            <span className="text-hatchery-mint text-center text-4xl my-[5px] px-0">HATCHERY</span> <span className="text-hatchery-light">NO.7</span>
          </h1>
          
          
          
          <button onClick={handleScroll} className="bg-hatchery-mint/10 hover:bg-hatchery-mint/20 border border-hatchery-mint/50 font-orbitron tracking-wider transition-all hover:border-hatchery-mint hover:border-glow px-[26px] font-bold text-base rounded-2xl my-[127px] py-[19px] text-[#7fded3]/[0.61]">
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