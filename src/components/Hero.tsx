import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScroll = () => {
    const productsSection = document.querySelector('#products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Restart video 0.1 seconds before it ends to create seamless loop
      if (video.currentTime >= video.duration - 0.1) {
        video.currentTime = 0;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);
  return <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-40 h-40 bg-hatchery-mint/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[15%] w-60 h-60 bg-hatchery-mint/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] left-[30%] w-20 h-20 bg-hatchery-mint/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-30 transition-opacity duration-300"
        >
          <source src="/background-loop.mp4" type="video/mp4" />
        </video>
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