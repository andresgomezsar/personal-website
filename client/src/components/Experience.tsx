import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Founder",
      company: "Cognos",
      location: "Los Angeles, CA",
      period: "May 2025 -- Dec 2025",
      description: [
        "Created developer tools to integrate AI voice wearable API data with web applications.",
        "Developed custom MCP server integrating Limitless AI Pendant with Oura Ring data to let Claude or ChatGPT access digital memories and health data.",
        "Met with potential investors, did product demos to stakeholders and managed cofounder team."
      ],
      tech: ["MCP", "API", "LLMs", "Python"]
    },
    {
      title: "Analyst, Information Security — Human Risk & Analytics",
      company: "Sony Pictures Entertainment",
      location: "Culver City, CA",
      period: "Jun 2023 -- May 2025",
      description: [
        "Built ETL pipelines that unified network telemetry to measure human risk, drive targeted training, and close the loop on risky behaviors across 12,000+ employees.",
        "Delivered the first Human Risk Analytics tool from proof-of-concept to production, creating a scalable framework for measuring and reducing employee-driven security risk.",
        "Improved phishing resilience by running the phishing simulation program and cybersecurity onboarding for all new employees, leading to record-high report rates and record-low click rates.",
        "Maintained and expanded Human Risk Dashboards in Tableau and Power BI for Senior Executives."
      ],
      tech: ["ETL", "Tableau", "Power BI", "Splunk"]
    },
    {
      title: "NSF REU Research Fellow",
      company: "University of Southern California — Security and Political Economy Lab",
      location: "Los Angeles, CA",
      period: "Jun 2022 -- Aug 2022",
      description: [
        "Supported research on the resource curse theory in civil conflict by conducting qualitative analyses and synthesizing findings for a paper prepared for academic publication.",
        "Performed hypothesis testing, organized results into a comprehensive research appendix, and produced a structured codebook for data analysis.",
        "Enhanced accessibility of data-science training by translating instructional materials into Spanish, extending resources to international research assistants."
      ],
      tech: ["Data Science", "Research", "Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">Journey</h2>
        </motion.div>

        <div className="relative border-l-2 border-gray-100 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-2 w-5 h-5 rounded-full bg-white border-4 border-teal-500" />
              
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">{exp.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
                    <Calendar className="w-3 h-3 mr-2" />
                    {exp.period}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 font-medium mb-4">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {exp.company}
                </div>
                
                <ul className="list-disc list-outside ml-4 space-y-2 text-gray-600 mb-4 text-base leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}