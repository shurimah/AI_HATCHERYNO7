import { ChevronDown, ChevronUp } from "lucide-react";
const Hero = () => {
  const handleScroll = () => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      const offset = 150; // Increased offset to account for larger navbar height
      const elementPosition = productsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center p-0 m-0">
      {/* Shared Splash Container */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover bg-black opacity-[30%]">
          <source src="/final-splash-dna.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container mx-auto px-0 relative z-10 flex flex-col items-center justify-center h-full">
        <div className="text-center">
          
          <h1 className="text-6xl md:text-9xl mb-8 text-glow font-extrabold">
            <div className="flex justify-center items-baseline gap-4">
              <span className="text-hatchery-mint font-extralight text-4xl md:text-6xl">HATCHERY</span>
              <span className="text-hatchery-light font-extralight text-6xl md:text-8xl">no.7</span>
            </div>
          </h1>
          
          
          
          <div className="flex flex-col items-center mt-8">
            
            <img 
              src="/yellow-button.png" 
              alt="Explore Collection" 
              className="h-44 w-auto cursor-pointer transition-transform duration-300 hover:scale-110 rounded-full"
              onClick={handleScroll}
            />
          </div>
          
          {/* Bottom Arrow */}
          <div className="flex justify-center mt-2 animate-bounce">
            <ChevronDown className="text-hatchery-mint h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hatchery-mint/30 to-transparent"></div>
      <div className="absolute bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-hatchery-mint/20 to-transparent"></div>
      
    </section>;
};
export default Hero;