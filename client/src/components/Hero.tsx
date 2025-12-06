import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@assets/583dd7c7138da18575d74ed21a583f256a0307433c5f1af734c3fe8827c44_1764981140804.jpeg";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Whimsical Blobs - Warm tones, no purple */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000" />
      
      <div className="container mx-auto px-6 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 border border-primary/20 bg-primary/5 text-primary text-sm font-mono mb-6 rounded-full">
                Hello, I'm Andrés 👋
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 leading-tight text-gray-900"
            >
              Technologist & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500">Social Scientist.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed"
            >
               Exploring the intersection of secure systems, AI, and human behavior. Building tools that empower people, locally and privately.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="h-12 px-8 text-base rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}>
                See My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <div className="flex items-center gap-4 ml-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/50 hover:bg-white hover:text-primary transition-all shadow-sm hover:shadow-md">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/in/andresgomezsar" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/50 hover:bg-white hover:text-primary transition-all shadow-sm hover:shadow-md">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Image Content - Smaller */}
          <motion.div 
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
             <div className="relative w-64 h-64 md:w-72 md:h-72">
                {/* Abstract shapes behind image - warm tones */}
                <div className="absolute -inset-3 bg-orange-200/40 rounded-[2rem] -rotate-6 transform" />
                <div className="absolute -inset-3 bg-teal-200/40 rounded-[2rem] rotate-3 transform" />
                
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
                  <img 
                    src={profileImg} 
                    alt="Andrés Gómez Sarmiento" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}