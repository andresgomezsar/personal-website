import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      skills: ["English", "Spanish"],
      color: "border-amber-200 bg-amber-50"
    },
    {
      name: "Programming",
      skills: ["Python", "R", "SQL", "TypeScript", "React"],
      color: "border-teal-200 bg-teal-50"
    },
    {
      name: "Data & AI",
      skills: ["PyTorch", "Keras", "scikit-learn", "Pandas", "Whisper", "OpenAI API"],
      color: "border-blue-200 bg-blue-50"
    },
    {
      name: "Tools",
      skills: ["Git", "VS Code", "PostgreSQL", "Power BI", "Tableau", "Docker"],
      color: "border-orange-200 bg-orange-50"
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">Technical Toolbox</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-3xl border-2 ${category.color} hover:scale-105 transition-transform duration-300 cursor-default`}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="text-sm text-gray-700 bg-white/80 px-3 py-1 rounded-lg shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}