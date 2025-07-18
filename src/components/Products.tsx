
import { useState } from "react";
import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

// Mock product data
const products = [
  {
    id: 1,
    name: "Emerald Spine Dragon",
    description: "Articulated flexi-dragon with 32 interlocking segments for maximum movement range.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=800&auto=format&fit=crop",
    category: "dragons"
  },
  {
    id: 2,
    name: "Quantum Dragonlet",
    description: "Miniature version with glow-in-the-dark filament ideal for desks and small spaces.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1518709911915-712d5fd04677?q=80&w=800&auto=format&fit=crop",
    category: "dragons"
  },
  {
    id: 3,
    name: "Helix Dragon",
    description: "Double-twisted design creates a mesmerizing spiral effect when in motion.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1577493340036-39375571a8ba?q=80&w=800&auto=format&fit=crop",
    category: "dragons"
  },
  {
    id: 4,
    name: "Neural Interface Stand",
    description: "Biomimetic headphone stand inspired by neural networks.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f3?q=80&w=800&auto=format&fit=crop",
    category: "inventions"
  },
  {
    id: 5,
    name: "Holographic Display Module",
    description: "Smartphone amplifier that creates pseudo-holographic effects.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1624969862293-b084f804a213?q=80&w=800&auto=format&fit=crop",
    category: "inventions"
  },
  {
    id: 6,
    name: "Quantum Desktop Organizer",
    description: "Modular organizational system with infinite configurations.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1618004652321-13a63e576b80?q=80&w=800&auto=format&fit=crop",
    category: "inventions"
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
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-hatchery-mint/10"></div>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 right-0 p-2">
          <div className="hexagon bg-black/60 backdrop-blur-sm border border-hatchery-mint/30 p-2">
            <p className="text-hatchery-mint font-orbitron text-sm">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-orbitron text-lg text-hatchery-mint mb-2">{product.name}</h3>
        <p className="text-hatchery-light/70 text-sm mb-4 flex-grow">{product.description}</p>
        <button className="bg-hatchery-mint/10 hover:bg-hatchery-mint/20 border border-hatchery-mint/50 
                          hover:border-hatchery-mint text-hatchery-mint text-sm py-2 rounded-sm 
                          transition-colors font-orbitron tracking-wide">
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
      <div className="absolute inset-0 opacity-40">
        <img 
          src="/lovable-uploads/ecbbc397-2946-461c-99a7-ddda8d11e2f2.png" 
          alt="Laboratory background"
          className="w-full h-full object-contain bg-hatchery-dark"
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
