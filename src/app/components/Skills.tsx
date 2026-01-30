import { Code2, Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { motion } from "motion/react";

interface Skill {
  category: string;
  items: { name: string; level?: string }[];
}

const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Java", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "C", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "Ballerina", level: "Advanced" },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Spring Boot", level: "Advanced" },
      { name: "Maven" },
      { name: "NPM" },
      { name: "Yarn" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", level: "Advanced" },
      { name: "SQL Databases", level: "Advanced" },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git & GitHub" },
      { name: "Postman" },
      { name: "Figma" },
      { name: "Arduino" },
      { name: "Jira", level: "Project Management" },
    ],
  },
  {
    category: "Specialized Skills",
    items: [
      { name: "AI/ML", level: "Intermediate" },
      { name: "Gemini API" },
      { name: "Compiler Design" },
      { name: "DSL Development" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-b from-slate-300 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mb-12 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-blue-600" />
                    <h3 className="text-xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                      {skillCategory.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-800 hover:from-blue-100 hover:to-cyan-100 px-3 py-1.5 text-sm border border-blue-200 transition-all duration-300 cursor-default"
                        >
                          {skill.name}
                          {skill.level && (
                            <span className="ml-1 text-xs opacity-75">• {skill.level}</span>
                          )}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}