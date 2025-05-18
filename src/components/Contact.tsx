
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Received",
        description: "Thank you for your message. We'll respond within 48 hours.",
        duration: 5000,
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-[20%] left-[10%] w-60 h-60 bg-hatchery-mint/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-glow mb-4">
            <span className="text-hatchery-mint">CONTACT</span> LAB
          </h2>
          <p className="text-hatchery-light/70 max-w-2xl mx-auto">
            Have questions about our specimens or custom requests? Our research team is ready to assist.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="sci-fi-card p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron text-xl text-hatchery-mint mb-6 text-center">TRANSMISSION FORM</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-hatchery-light/90 text-sm mb-1 font-orbitron">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-hatchery-mint/30 focus:border-hatchery-mint/70 focus:outline-none
                            rounded-sm py-2 px-3 text-hatchery-light transition-colors"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-hatchery-light/90 text-sm mb-1 font-orbitron">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/30 border border-hatchery-mint/30 focus:border-hatchery-mint/70 focus:outline-none
                            rounded-sm py-2 px-3 text-hatchery-light transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-hatchery-light/90 text-sm mb-1 font-orbitron">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black/30 border border-hatchery-mint/30 focus:border-hatchery-mint/70 focus:outline-none
                            rounded-sm py-2 px-3 text-hatchery-light transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 font-orbitron tracking-wider transition-all
                          ${isSubmitting
                            ? "bg-hatchery-mint/5 text-hatchery-mint/50 border border-hatchery-mint/20"
                            : "bg-hatchery-mint/10 hover:bg-hatchery-mint/20 text-hatchery-mint border border-hatchery-mint/50 hover:border-hatchery-mint"
                          }`}
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </motion.div>
          
          {/* Info Card */}
          <motion.div
            className="sci-fi-card p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-orbitron text-xl text-hatchery-mint mb-6 text-center">LABORATORY INFO</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-hatchery-light/80 font-orbitron text-sm mb-2">LABORATORY HOURS</h4>
                <p className="text-hatchery-mint">Mon - Fri: 9:00 - 18:00 <br />Sat: 10:00 - 15:00</p>
              </div>
              
              <div>
                <h4 className="text-hatchery-light/80 font-orbitron text-sm mb-2">SPECIMEN PICKUP</h4>
                <p className="text-hatchery-mint">Available by appointment</p>
              </div>
              
              <div>
                <h4 className="text-hatchery-light/80 font-orbitron text-sm mb-2">SHIPPING INFO</h4>
                <p className="text-hatchery-light/70">All specimens are carefully packaged in anti-static containers and shipped via secure courier services.</p>
              </div>
              
              <div className="pt-4">
                <p className="text-hatchery-light/70 text-sm">For urgent inquiries or custom specimen requests, please use the communication form or contact our direct research line.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
