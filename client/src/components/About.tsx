import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I am a Technologist and Computational Social Scientist with a background in Political Science and Data Analytics from UCSD.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My work focuses on the intersection of technology and society, specifically how secure systems and AI can be deployed responsibly. I founded Cognos, Inc. to address the practical challenges of private, cost-effective LLM deployment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Outside of technical work, I research the societal impacts of these technologies, aiming to bridge the gap between complex systems and human utility.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-xl relative">
              <div className="absolute -top-6 -right-6 bg-accent text-white p-4 rounded-2xl shadow-lg">
                 <GraduationCap className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">UCSD</h3>
              <p className="text-primary font-medium mb-6">B.S. Political Science — Data Analytics</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium text-gray-900">Honors</p>
                    <p className="text-gray-600">GPA: 3.92 • Cum Laude</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="font-medium text-gray-900">Minor</p>
                    <p className="text-gray-600">Computational Social Science</p>
                  </div>
                </div>

                <div className="bg-secondary/30 p-4 rounded-xl">
                   <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold">Focus:</span> Data & Model Programming, Machine Learning, PySpark, Dask, NLP, Game Theory, Computational Linguistics.
                    </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}