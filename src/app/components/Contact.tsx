import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            I'm actively seeking internship opportunities and open to collaborations. 
            Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Mail,
              title: "Email",
              content: "himashavalantina55@gmail.com",
              link: "mailto:himashavalantina55@gmail.com",
              color: "from-blue-600 to-cyan-600",
              delay: 0,
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              content: "himasha-valantina",
              link: "https://linkedin.com/in/himasha-valantina-798a9833b",
              color: "from-purple-600 to-pink-600",
              delay: 0.1,
            },
            {
              icon: Github,
              title: "GitHub",
              content: "himashavalantina",
              link: "https://github.com/himashavalantina",
              color: "from-cyan-600 to-blue-600",
              delay: 0.2,
            },
          ].map((contact) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: contact.delay }}
            >
              <Card className="p-8 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 group h-full">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`bg-gradient-to-r ${contact.color} p-4 rounded-2xl mb-4 shadow-lg`}
                  >
                    <contact.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl mb-3 text-white">{contact.title}</h3>
                  <a
                    href={contact.link}
                    target={contact.title !== "Email" ? "_blank" : undefined}
                    rel={contact.title !== "Email" ? "noopener noreferrer" : undefined}
                    className="text-blue-300 hover:text-blue-200 transition-colors break-all group-hover:underline"
                  >
                    {contact.content}
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Card className="p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 max-w-2xl mx-auto">
            <p className="text-slate-200 mb-6 text-lg leading-relaxed">
              Feel free to reach out for <span className="text-blue-400 font-semibold">internships</span>, 
              <span className="text-purple-400 font-semibold"> collaborations</span>, or just to 
              <span className="text-cyan-400 font-semibold"> connect</span>!
            </p>
            <motion.a
              href="mailto:himashavalantina55@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white px-10 py-6 text-lg shadow-lg hover:shadow-blue-500/50 transition-all">
                <Send className="mr-2 h-5 w-5" />
                Send a Message
              </Button>
            </motion.a>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}