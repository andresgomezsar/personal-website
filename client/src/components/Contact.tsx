import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-gray-100"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">Let's Connect</h2>
          <p className="text-xl text-gray-600 mb-12">
             Have an idea? I'm always open to discussing new projects and collaborations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
            <a href="mailto:andresgomezsar@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group min-w-0">
              <div className="p-3 bg-teal-100 text-teal-600 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900 text-sm md:text-base">andresgomezsar@gmail.com</p>
              </div>
            </a>

            <a href="https://linkedin.com/in/andresgomezsar" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="font-medium text-gray-900">/in/andresgomezsar</p>
              </div>
            </a>

            <a href="https://cognos.me" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
              <div className="p-3 bg-orange-100 text-orange-600 rounded-xl group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Website</p>
                <p className="font-medium text-gray-900">cognos.me</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl">
              <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-900">Los Angeles, CA</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="px-10 h-14 text-lg rounded-full bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" asChild>
            <a href="mailto:andresgomezsar@gmail.com">Say Hello 👋</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}