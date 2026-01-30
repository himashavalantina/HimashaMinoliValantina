// src/app/components/CertificatesPage.tsx
import {
  ArrowLeft, Shield, Calendar, ExternalLink,
  Award, Sparkle, Trophy, Star, Users,
  GraduationCap, Briefcase, BookOpen, Lightbulb
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";

// IMPORTANT: Updated paths to use "../../assets/cetificates/"
import uiux from "../../assets/cetificates/uiux.png";
import hackathon from "../../assets/cetificates/mora.png";
import aiml1 from "../../assets/cetificates/aiml1.png";
import aiml2 from "../../assets/cetificates/aiml2.png";
import codefest from "../../assets/cetificates/codefest.png";
import adaptic from "../../assets/cetificates/adaptic.png";

interface Certificate {
  title: string;
  description: string;
  issuer: string;
  date: string;
  image: string;
  credentialId?: string;
  category: string;
  color: string;
  icon: React.ReactNode;
  achievements?: string[];
}

const allCertificates: Certificate[] = [
  {
    title: "AI/ML Engineer Certification - Stage 2",
    description: "Completed comprehensive AI/ML engineering program covering neural networks, deep learning, and practical applications of artificial intelligence. This advanced certification validates expertise in machine learning pipelines and AI system design.",
    issuer: "SLIIT Centre for Open and Distance Education",
    date: "Jan 2026",
    image: aiml2,
    credentialId: "rzcnlekbm",
    category: "Artificial Intelligence",
    color: "from-blue-600 to-cyan-500",
    icon: <Sparkle className="h-5 w-5" />,
    achievements: [
      "Advanced Machine Learning Concepts",
      "Neural Network Architecture Design",
      "Production AI System Implementation",
      "Model Deployment & Optimization"
    ],
  },
  {
    title: "CODE FEST 2024 - Algothon Finalist",
    description: "Emerged as a Finalist in the Algothon competition under the Tertiary Category of CODE FEST 2024. Competed against top university teams in algorithm design and problem-solving challenges at Sri Lanka Institute of Information Technology.",
    issuer: "Faculty of Computing, Sri Lanka Institute of Information Technology",
    date: "Jan 2025",
    image: codefest,
    category: "Competitive Programming",
    color: "from-purple-600 to-pink-500",
    icon: <Trophy className="h-5 w-5" />,
    achievements: [
      "National Level Competition Finalist",
      "Advanced Algorithm Design",
      "Team-based Problem Solving",
      "Time-constrained Coding Challenges"
    ],
  },
  {
    title: "ADAPTIQ Challenge Finalist",
    description: "Recognized as a Finalist in ADAPTIQ, an intellectually stimulating challenge organized by the IEEE Women in Engineering Affinity Group of IIT. Demonstrated exceptional teamwork, analytical thinking, and problem-solving skills.",
    issuer: "IEEE Women in Engineering Affinity Group of IIT",
    date: "2025",
    image: adaptic,
    category: "Hackathon & Challenges",
    color: "from-indigo-600 to-purple-500",
    icon: <Award className="h-5 w-5" />,
    achievements: [
      "Team Collaboration (Team Nybble)",
      "Analytical Thinking & Problem-solving",
      "Competitive Programming Skills",
      "IEEE WIE Organized Event"
    ],
  },
  {
    title: "AI/ML Engineer Certification - Stage 1",
    description: "Completed foundational AI/ML engineering program covering machine learning fundamentals, data preprocessing, and basic neural networks.",
    issuer: "SLIIT Centre for Open and Distance Education",
    date: "Jan 2026",
    image: aiml1,
    category: "Artificial Intelligence",
    color: "from-blue-500 to-cyan-400",
    icon: <Sparkle className="h-5 w-5" />,
    achievements: [
      "Machine Learning Fundamentals",
      "Data Preprocessing Techniques",
      "Basic Neural Networks",
      "Supervised Learning Algorithms"
    ],
  },
  {
    title: "MoraXtreme 9.0 Hackathon",
    description: "Competed in 24-hour intensive hackathon organized by IEEE, collaborating in team 'Syntax Free' to develop innovative solutions for real-world problems.",
    issuer: "IEEE Computer Society, University of Moratuwa",
    date: "Oct 2024",
    image: hackathon,
    category: "Hackathon",
    color: "from-rose-600 to-pink-500",
    icon: <Users className="h-5 w-5" />,
    achievements: [
      "24-hour Time Constraint",
      "Team Collaboration & Leadership",
      "Rapid Prototyping & Development",
      "Problem-solving Under Pressure"
    ],
  },
  {
    title: "UI/UX Designathon",
    description: "Participated in national-level design competition demonstrating user-centered design principles, creative problem-solving, and innovative interface design.",
    issuer: "BCS Student Chapter of KDU",
    date: "2025",
    image: uiux,
    category: "Design Excellence",
    color: "from-green-600 to-emerald-500",
    icon: <Star className="h-5 w-5" />,
    achievements: [
      "User-Centered Design Methodology",
      "Creative Problem Solving",
      "Design Thinking Process",
      "Prototyping & Wireframing"
    ],
  },
];

export function CertificatesPage() {
  const navigate = useNavigate();

  // Group certificates by category
  const categories = Array.from(new Set(allCertificates.map(cert => cert.category)));

  // Stats calculations
  const totalCertificates = allCertificates.length;
  const totalCategories = categories.length;


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </button>

            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg">
                <Award className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-slate-900">Certificates & Achievements</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-500/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-4">
              Professional Certifications & Achievements
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              Verified credentials, competition achievements, and recognitions that demonstrate technical expertise,
              problem-solving abilities, and commitment to continuous learning in software development and AI/ML.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="px-4 py-1.5 text-sm border-blue-200 text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            <div className="h-1 w-32 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 mx-auto rounded-full"></div>
          </motion.div>


          {/* All Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {allCertificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                  {/* Certificate Header */}
                  <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${cert.color} p-6`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                        {cert.category}
                      </Badge>
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                          {cert.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {cert.title}
                        </h3>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-white/80" />
                          <span className="text-sm text-white/90">{cert.date}</span>
                        </div>
                        <Shield className="h-6 w-6 text-white/60" />
                      </div>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Issuer & Credential ID */}
                    <div className="mb-4">
                      <div className="text-xs text-slate-500 mb-1">Issued by</div>
                      <div className="text-sm font-medium text-slate-800 leading-relaxed">
                        {cert.issuer}
                      </div>
                      {cert.credentialId && (
                        <div className="mt-2">
                          <div className="text-xs text-slate-500 mb-1">Credential ID</div>
                          <div className="text-xs font-mono text-slate-600 bg-slate-50 p-1 rounded">
                            {cert.credentialId}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                      {cert.description}
                    </p>

                    {/* Key Achievements */}
                    {cert.achievements && (
                      <div className="mb-6">
                        <div className="text-xs font-semibold text-slate-700 mb-3 flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                          Key Competencies:
                        </div>
                        <div className="space-y-2">
                          {cert.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 mt-1.5"></div>
                              <span className="text-xs text-slate-600">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-100">
                      <Button
                        onClick={() => window.open(cert.image, '_blank')}
                        className="w-full bg-gradient-to-r from-slate-100 to-slate-50 hover:from-slate-200 hover:to-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300 transition-all group/btn"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        View Certificate
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <Card className="p-8 border-0 bg-gradient-to-br from-white to-blue-50 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl shadow-lg">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Development Journey</h3>
                  <p className="text-slate-600 mb-4">
                    This collection of certifications and achievements represents a dedicated journey in technology
                    education and professional growth. From AI/ML engineering certifications to competitive programming
                    achievements and hackathon participation, each credential reflects commitment to mastering cutting-edge
                    technologies and applying them to solve real-world problems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-200">
                      {totalCertificates} Achievements
                    </Badge>
                    <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                      {totalCategories} Skill Domains
                    </Badge>
                    <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-green-200">
                      Ongoing Learning
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-8 border-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-xl shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Download Certificate Portfolio
                    </h3>
                    <p className="text-slate-300">
                      Get a complete PDF portfolio of all certifications and achievements for professional reference
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => navigate('/contact')}
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl"
                  >
                    Request Portfolio
                  </Button>
                  <Button
                    onClick={() => navigate('/')}
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    Back to Home
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50"
      >
        <ArrowLeft className="h-5 w-5 rotate-90" />
      </button>
    </div>
  );
}