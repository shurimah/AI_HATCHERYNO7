import { ChevronDown } from "lucide-react";
const Hero = () => {
  const handleScroll = () => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      const offset = 100; // Offset to account for navbar height
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
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
          <source src="/buck-hat-splash.mov" type="video/quicktime" />
          <source src="/buck-hat-splash.mov" type="video/mp4" />
        </video>
        {/* Fallback image if video doesn't load */}
        <img 
          src="/bucket-hat-splash.png" 
          alt="Splash Background" 
          className="w-full h-full object-cover opacity-30 absolute inset-0 z-0"
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
      <div className="container mx-auto px-6 relative z-10 pt-32">
        <div className="text-center">
          
          <h1 className="text-6xl md:text-9xl mb-8 text-glow font-extrabold">
            <div className="flex justify-center items-center gap-4">
              <span className="text-hatchery-mint font-extralight text-4xl md:text-6xl">HATCHERY</span>
              <span className="text-hatchery-light font-extralight text-6xl md:text-8xl">no.7</span>
            </div>
          </h1>
          
          
          
          <div className="flex justify-center mt-8">
            <img 
              src="/explore-collection-button.png" 
              alt="Explore Collection" 
              className="h-36 w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={handleScroll}
              style={{ background: 'transparent' }}
            />
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-4 animate-bounce">
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