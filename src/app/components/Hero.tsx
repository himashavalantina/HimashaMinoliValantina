import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import profileImage from "../../assets/9e1e53fcd359b64c302256e1c1e038bc4c7cbd44.png";


export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-32 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-start order-2 md:order-2 md:pl-0 md:pr-0 md:-ml-1"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-spin-slow opacity-20"></div>
              <img
                src={profileImage}
                alt="Himasha Valantina"
                className="relative w-78 h-78 md:w-110 md:h-110 rounded-full object-cover border-4 border-white/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-blue-400 mb-3 text-lg tracking-wide uppercase">Welcome to my portfolio</p>
              <h1 className="text-6xl md:text-7xl mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent font-bold">
                Himasha Valantina
              </h1>
              <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <p className="text-2xl text-blue-300">
                  Computer Science Student
                </p>
              </div>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
                Undergraduate at <span className="text-blue-400 font-semibold">SLIIT</span> | Passionate about
                <span className="text-cyan-400 font-semibold"> AI/ML Engineering </span>,
                <span className="text-purple-400 font-semibold"> FullStack Software Development</span> &
                <span className="text-blue-400 font-semibold"> Innovation</span>
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 justify-center md:justify-start mb-8"
            >
              <a
                href="https://github.com/himashavalantina"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20 hover:border-blue-400 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                  <Github className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/himasha-valantina-798a9833b"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20 hover:border-blue-400 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                  <Linkedin className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
                </Button>
              </a>
              <a
                href="mailto:himashavalantina55@gmail.com"
                className="group"
              >
                <Button variant="outline" size="icon" className="bg-white/10 border-white/20 hover:bg-white/20 hover:border-blue-400 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                  <Mail className="h-5 w-5 group-hover:text-blue-400 transition-colors" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}