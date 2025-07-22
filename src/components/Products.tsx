
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Hexagon, ChevronLeft, ChevronRight } from "lucide-react";

// Slideshow component for product images
const ProductSlideshow = ({ images, price, isCrystalDragon = false, isRoseDragon = false, isFrogula = false }: { images: (string | { video: string })[]; price: number; isCrystalDragon?: boolean; isRoseDragon?: boolean; isFrogula?: boolean }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomPhase, setZoomPhase] = useState(0);
  const [circlePhase, setCirclePhase] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Navigation functions
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setZoomPhase(0);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setZoomPhase(0);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, currentImageIndex === images.length - 1 ? 6000 : 3000); // Extra 3 seconds on last slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length, currentImageIndex]);

  useEffect(() => {
    if (isCrystalDragon && currentImageIndex === images.length - 1) {
      const zoomTimer = setTimeout(() => setZoomPhase(1), 500);
      const circleTimer = setTimeout(() => setCirclePhase(1), 1000);
      return () => {
        clearTimeout(zoomTimer);
        clearTimeout(circleTimer);
      };
    } else if (!isCrystalDragon && !isFrogula && currentImageIndex === images.length - 1) {
      const zoomTimer = setTimeout(() => setZoomPhase(1), 500);
      const circleTimer = setTimeout(() => setCirclePhase(1), 1000);
      return () => {
        clearTimeout(zoomTimer);
        clearTimeout(circleTimer);
      };
    } else {
      setZoomPhase(0);
      setCirclePhase(0);
    }
  }, [currentImageIndex, isCrystalDragon, isFrogula, images]);

  return (
    <div 
      ref={containerRef}
      className="relative h-48 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes drawCircle {
            to {
              stroke-dashoffset: 0;
            }
          }
        `
      }} />

      <div className="absolute inset-0 bg-hatchery-mint/10"></div>
      {images.map((image, index) => {
        if (typeof image === 'string') {
          return (
            <img 
              key={image}
              src={image} 
              alt={`Product view ${index + 1}`}
              className={`w-full h-full object-contain transition-all duration-1000 absolute inset-0 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              } ${
                index === currentImageIndex && isCrystalDragon && currentImageIndex === images.length - 1 && zoomPhase === 1
                  ? 'scale-[2.5] transform origin-top-right translate-x-8' 
                  : index === currentImageIndex && !isCrystalDragon && !isRoseDragon && currentImageIndex === images.length - 1 && zoomPhase === 1
                  ? 'scale-150 transform origin-center' 
                  : index === currentImageIndex && (isRoseDragon || (!isCrystalDragon && currentImageIndex !== images.length - 1))
                  ? 'animate-slow-zoom' 
                  : ''
              }`}
            />
          );
        } else if (typeof image === 'object' && 'video' in image) {
          return (
            <video
              key={image.video}
              src={image.video}
              className={`w-full h-full object-contain transition-all duration-1000 absolute inset-0 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              autoPlay
              loop
              muted
              playsInline
            />
          );
        }
        return null;
      })}

      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-hatchery-mint/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronLeft className="text-hatchery-mint h-5 w-5 animate-pulse hover:animate-bounce" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-hatchery-mint/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronRight className="text-hatchery-mint h-5 w-5 animate-pulse hover:animate-bounce" />
      </button>

      {/* Price indicator */}
      <div className="absolute top-0 right-0 p-2 z-10">
        <span className="bg-hatchery-mint/20 text-hatchery-mint font-orbitron text-sm px-4 py-1 rounded-full shadow-md">
          {`$${price}`}
        </span>
      </div>
      
      {/* Red sharpie circle animation */}
      {isCrystalDragon && currentImageIndex === images.length - 1 && circlePhase === 1 && (
        <div className="absolute top-8 right-52 w-12 h-12 z-20 pointer-events-none">
          {/* Drawing circle */}
          <svg className="w-12 h-12" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="red"
              strokeWidth="3"
              strokeDasharray="126"
              strokeDashoffset="126"
              style={{
                animation: 'drawCircle 2s ease-in-out forwards'
              }}
            />
          </svg>
        </div>
      )}
      
      {/* Spider circle animation */}
      {!isCrystalDragon && !isRoseDragon && currentImageIndex === images.length - 1 && circlePhase === 1 && (
        <div className="absolute top-20 right-60 w-12 h-12 z-20 pointer-events-none">
          {/* Drawing circle */}
          <svg className="w-12 h-12" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="red"
              strokeWidth="3"
              strokeDasharray="126"
              strokeDashoffset="126"
              style={{
                animation: 'drawCircle 2s ease-in-out forwards'
              }}
            />
          </svg>
        </div>
      )}
      
      {/* Frogula circle animation */}
      {isFrogula && currentImageIndex === images.length - 1 && circlePhase === 1 && (
        <div className="absolute top-8 right-1/2 translate-x-1/2 w-12 h-12 z-20 pointer-events-none">
          <svg className="w-12 h-12" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="red"
              strokeWidth="3"
              strokeDasharray="126"
              strokeDashoffset="126"
              style={{
                animation: 'drawCircle 2s ease-in-out forwards'
              }}
            />
          </svg>
        </div>
      )}
      
      {/* Image indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentImageIndex 
                ? 'bg-hatchery-mint' 
                : 'bg-hatchery-mint/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Mock product data
const products = [
  {
    id: 1,
    name: "Mushroom Spider Collection",
    description: "Tiny articulated jumping spider + mushroom cap. Tactile, pocket-safe, classroom-friendly fidget.",
    price: 9.98,
    images: [
      "/mushroom-1.png",
      "/mushroom-2.png", 
      "/mushroom-4.png",
      "/mushroom-3.png"
    ],
    category: "dragons"
  },
  {
    id: 2,
    name: "Cinderwing Crystal Dragon [2025 Edition]",
    description: "Limited edition crystal dragon with advanced articulation and premium materials.",
    price: 29.99,
    images: [
      "/crystal-1.png",
      "/crystal-2.png", 
      "/crystal-3.png",
      "/crystal-4.png",
      "/crystal-5.png",
      "/crystal-6.png",
      "/crystal-7.png",
      "/crystal-8.png",
      "/crystal-9.png",
      "/crystal-10.png",
      "/crystal-11.png"
    ],
    category: "dragons"
  },
  {
    id: 3,
    name: "Rose Dragon",
    description: "Elegant rose-themed dragon with intricate floral details and graceful design.",
    price: 19.99,
    images: [
      "/rose-1.png",
      "/rose-2.png", 
      "/rose-3.png"
    ],
    category: "dragons"
  },
  {
    id: 4,
    name: "Count Frogula",
    description: "A whimsical frog vampire with a flair for the dramatic.",
    price: 14.99,
    images: [
      "/frog-1.png",
      "/frog-2.png",
      { video: "/count-frogula-video.mp4" }
    ],
    category: "dragons"
  }
];

const categories = [
  { id: "all", label: "ALL PRODUCTS" },
  { id: "dragons", label: "FLEXI-DRAGONS" },
  { id: "inventions", label: "INVENTIONS" }
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <motion.div 
      className="sci-fi-card flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Image Container */}
      {product.images ? (
        <ProductSlideshow 
          images={product.images as (string | { video: string })[]} 
          price={product.price} 
          isCrystalDragon={product.name === "Cinderwing Crystal Dragon [2025 Edition]"}
          isRoseDragon={product.name === "Rose Dragon"}
          isFrogula={product.name === "Count Frogula"}
        />
      ) : null}
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-orbitron text-lg text-hatchery-mint mb-2">{product.name}</h3>
        <p className="text-hatchery-light/70 text-sm mb-4 flex-grow">{product.description}</p>
        <button className="bg-hatchery-mint/20 hover:bg-hatchery-mint/30 border border-hatchery-mint/60 
                          hover:border-hatchery-mint text-hatchery-mint text-sm py-3 px-4 rounded-md 
                          transition-all duration-300 font-orbitron tracking-wider hover:scale-105
                          shadow-lg hover:shadow-hatchery-mint/20">
          ADD TO CART
        </button>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/laboratory-background.png" 
          alt="Laboratory background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hatchery-dark/80"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hatchery-mint/30 to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-glow mb-4">
            <span className="text-hatchery-mint">LABORATORY</span> SPECIMENS
          </h2>
          <p className="text-hatchery-light/70 max-w-2xl mx-auto">
            Each creation is meticulously designed, tested, and 3D-printed to exacting specifications.
            Discover our current collection of available specimens.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex justify-center space-x-2 md:space-x-6 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 font-orbitron text-xs md:text-sm tracking-wide transition-all
                ${activeCategory === category.id 
                  ? "bg-hatchery-mint/20 text-hatchery-mint border-b-2 border-hatchery-mint" 
                  : "bg-transparent text-hatchery-light/60 hover:text-hatchery-light"}`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      {/* Hexagon Decoration */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <Hexagon className="text-hatchery-mint/20 h-16 w-16 animate-pulse-slow" />
          <Hexagon className="text-hatchery-mint/30 h-12 w-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </section>
  );
};

export default Products;
