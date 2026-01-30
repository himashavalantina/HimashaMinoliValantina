import { User, Sparkles, Rocket, Code } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
              <User className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mb-12 rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-10 shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I am a <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text font-semibold">passionate and driven</span> undergraduate Computer Science student at SLIIT (Sri Lanka Institute of Information Technology), 
                with a strong foundation in software development, artificial intelligence, and machine learning. My technical journey spans 
                multiple programming languages and frameworks, including <strong className="text-blue-700">Java, Python, JavaScript, TypeScript, and React</strong>, 
                enabling me to build versatile and innovative solutions.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                I thrive on solving complex problems and transforming ideas into functional applications. From developing 
                <strong className="text-purple-700"> AI-powered travel guides</strong> to creating <strong className="text-cyan-700">custom compilers and health management systems</strong>, 
                I continuously seek opportunities to learn, innovate, and contribute to real-world computing projects. My hands-on 
                experience with tools like <strong className="text-blue-700">Spring Boot, MongoDB, Node.js, and Figma</strong> has equipped me with the skills 
                to tackle full-stack development challenges.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                I am eager to apply my knowledge in professional settings, particularly in roles that allow me to work on 
                <strong className="text-blue-700"> cutting-edge technologies, AI/ML applications, and software innovation</strong>. I am actively seeking 
                internship opportunities where I can contribute meaningfully while continuing to grow as a software engineer.
              </p>

              {/* Key highlights */}
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100"
                >
                  <Sparkles className="h-6 w-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Innovation First</h4>
                    <p className="text-sm text-slate-600">Constantly exploring new technologies and creative solutions</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100"
                >
                  <Rocket className="h-6 w-6 text-purple-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Fast Learner</h4>
                    <p className="text-sm text-slate-600">Quick to adapt and master new frameworks and tools</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100"
                >
                  <Code className="h-6 w-6 text-cyan-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Clean Code</h4>
                    <p className="text-sm text-slate-600">Writing maintainable, scalable, and efficient code</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}