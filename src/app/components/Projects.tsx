import { FolderGit2, ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import distributedImg from "../../assets/distributd.png";
import healthVaultImg from "../../assets/ballerina.jpeg";
import serangoImg from "../../assets/serango.jpeg";
import vibeWriteImg from "../../assets/vibewrite.png";

// Use placeholder images for missing files
const testLangImg = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Distributed File Storage System",
    description: "A distributed file storage system built with Go, React, TypeScript, and Raft consensus algorithm for high availability and fault tolerance.",
    technologies: ["Go", "React", "TypeScript", "Raft"],
    githubLink: "https://www.linkedin.com/posts/himasha-valantina-798a9833b_im-happy-to-share-our-distributed-file-storage-activity-7409159843254706176-ue53?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFVpe2QBgy_GPEovx2EnDt5jtAfCV_KpK4E",
    image: distributedImg,
  },
  {
    title: "Health Vault",
    description: "A secure health record management system using Ballerina language with REST APIs for medical data storage and retrieval.",
    technologies: ["Ballerina", "REST API"],
    githubLink: "",
    image: healthVaultImg,
  },
  {
    title: "SeranGo",
    description: "AI-powered serendipity discovery platform using machine learning algorithms to find unexpected connections and insights.",
    technologies: ["JavaScript", "springboot", "gemini api", "MongoDB"],
    githubLink: "https://github.com/himashavalantina/Serango-the-foreign-guide-.git",
    image: serangoImg,
  },
  {
    title: "TestLang++",
    description: "A custom programming language compiler designed and implemented from scratch using C and Java for educational purposes.",
    technologies: ["Compiler Design", "Java", "typescript", "tailwindcss", "Node.js"],
    githubLink: "https://github.com/himashavalantina/testlang-plus-compiler.git",
    image: testLangImg, // Using placeholder URL
  },
  {
    title: "VibeWrite",
    description: "AI-assisted writing tool that helps generate creative content based on mood and writing style analysis using Python ML libraries.",
    technologies: ["NLP Libraries", "java", "Tailwindcss", "MongoDB", "SpringBoot"],
    githubLink: "https://github.com/Thejandeera/SE-Group4-VibeWrite.git",
    image: vibeWriteImg,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
              <FolderGit2 className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-600 mb-12 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    fallbackSrc="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

                  {/* Project Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-red-50 text-red-600 border border-red-200 text-xs hover:bg-red-100 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-slate-100 text-slate-600 border border-slate-200 text-xs"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* View Project Link */}
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm hover:gap-3 transition-all group/link"
                    whileHover={{ x: 5 }}
                  >
                    View Project
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}