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
  return <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-hatchery-mint/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[15%] w-60 h-60 bg-hatchery-mint/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] left-[30%] w-20 h-20 bg-hatchery-mint/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Splash Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-[17%]">
          <source src="/brown-hair-splash.mp4" type="video/mp4" />
        </video>
        {/* Fallback image if video doesn't load */}
        <img 
          src="/bucket-hat-splash.png" 
          alt="Splash Background" 
          className="w-full h-full object-cover opacity-[17%] absolute inset-0 z-0"
          style={{ display: 'none' }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            const video = target.parentElement?.querySelector('video') as HTMLVideoElement;
            if (video) {
              video.style.display = 'none';
              target.style.display = 'block';
            }
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <div className="text-center">
          
          <h1 className="text-6xl md:text-9xl mb-8 text-glow font-extrabold">
            <div className="flex justify-center items-baseline gap-4">
              <span className="text-hatchery-mint font-extralight text-4xl md:text-6xl">HATCHERY</span>
              <span className="text-hatchery-light font-extralight text-6xl md:text-8xl">no.7</span>
            </div>
          </h1>
          
          
          
          <div className="flex flex-col items-center mt-8">
            {/* Top Arrow */}
            <div className="mb-0.5 animate-bounce">
              <ChevronDown className="text-hatchery-mint h-8 w-8" />
            </div>
            
            <img 
              src="/LOGO_BUTTONv3.png" 
              alt="Explore Collection" 
              className="h-36 w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
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
      
      {/* Cinderwing3D Licensed Badge */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
        <span className="text-hatchery-mint/70 text-xs font-orbitron tracking-wide">
          Cinderwing3D Licensed
        </span>
        <img 
          src="/authorizedsellerbadge.png" 
          alt="Authorized Seller Badge" 
          className="w-16 h-16"
        />
      </div>
    </section>;
};
export default Hero;