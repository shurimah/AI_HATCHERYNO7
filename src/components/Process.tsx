
import { motion } from "framer-motion";

const processSteps = [
  {
    id: 1,
    title: "CONCEPT DESIGN",
    description: "Each creation begins as a digital sketch, refined through multiple iterations for optimal articulation and aesthetics.",
    icon: "🧬"
  },
  {
    id: 2,
    title: "3D MODELING",
    description: "Designs are transformed into detailed 3D models, with precise measurements and interlocking mechanisms.",
    icon: "🔬"
  },
  {
    id: 3,
    title: "PROTOTYPE TESTING",
    description: "Multiple test prints undergo rigorous movement and durability testing in our laboratory environment.",
    icon: "⚗️"
  },
  {
    id: 4,
    title: "PRODUCTION",
    description: "Final models are printed using premium materials with exacting tolerances for optimal performance.",
    icon: "🔧"
  },
  {
    id: 5,
    title: "QUALITY CONTROL",
    description: "Each specimen is inspected, articulated, and certified before being prepared for shipping.",
    icon: "📋"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-8 left-0 w-full h-16 bg-gradient-to-b from-transparent to-hatchery-mint/5"></div>
      
      {/* Background Graphics */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-0 right-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzdGREVEMyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtZGFzaGFycmF5PSI1LDEwIi8+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-glow mb-4">
            <span className="text-hatchery-mint">LABORATORY</span> PROCESS
          </h2>
          <p className="text-hatchery-light/70 max-w-2xl mx-auto">
            Our scientific approach ensures that each specimen meets exacting standards for articulation, 
            durability, and aesthetic appeal.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="relative flex flex-col space-y-16 md:space-y-0 md:grid md:grid-cols-5">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-gradient-to-b from-hatchery-mint/70 via-hatchery-mint/40 to-hatchery-mint/70 transform -translate-x-1/2"></div>
          
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className={`relative ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-40'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Step Content */}
              <div className="sci-fi-card p-6 md:mx-4 h-full">
                <div className="text-center mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-hatchery-mint/10 border border-hatchery-mint/30 text-2xl">
                    {step.icon}
                  </span>
                </div>
                <h3 className="text-hatchery-mint font-orbitron text-lg mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-hatchery-light/70 text-sm text-center">
                  {step.description}
                </p>
              </div>
              
              {/* Connected Node (Desktop Only) */}
              <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-hatchery-dark border-2 border-hatchery-mint animate-pulse-slow"></div>
                <div className="w-4 h-4 rounded-full bg-hatchery-mint absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Bottom Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hatchery-mint/30 to-transparent"></div>
    </section>
  );
};

export default Process;
