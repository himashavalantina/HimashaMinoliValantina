import { Heart } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>by Himasha Valantina</span>
          </div>
          <p className="mb-2 text-slate-500">
            © 2026 Himasha Valantina. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            Built with <span className="text-blue-400">React</span>, <span className="text-blue-400">TypeScript</span>, and <span className="text-cyan-400">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}