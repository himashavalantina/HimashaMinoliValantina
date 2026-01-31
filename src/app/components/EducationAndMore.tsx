import { GraduationCap, Award, Briefcase, BookOpen, Sparkle, TrendingUp, Users, Lightbulb, ExternalLink, ChevronRight, Calendar, Shield, Star, Trophy } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { motion } from "motion/react";
// Update all imports in CertificatesPage.tsx to use "../../assets/cetificates/"
import uiux from "../../assets/cetificates/uiux.png";
import hackathon from "../../assets/cetificates/mora.png";
import aiml1 from "../../assets/cetificates/aiml1.png";
import { useNavigate } from "react-router-dom"; // Already imported

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
  delay: number;
}

// Updated certificate data with more professional details
const certificates: Certificate[] = [
  {
    title: "AI/ML Engineer Certification",
    description: "Completed comprehensive AI/ML engineering program covering neural networks, deep learning, and practical applications of artificial intelligence.",
    issuer: "SLIIT Centre for Open and Distance Education",
    date: "Jan 2026",
    image: aiml1,
    category: "Artificial Intelligence",
    color: "from-blue-600 to-cyan-500",
    icon: <Sparkle className="h-5 w-5" />,
    achievements: [
      "Machine Learning Fundamentals",
      "Neural Network Architecture",
      "Real-world AI Applications"
    ],
    delay: 0,
  },
  {
    title: "MoraXtreme 9.0 Hackathon",
    description: "Competed in 24-hour intensive hackathon organized by IEEE, collaborating in team 'Syntax Free' to develop innovative solutions.",
    issuer: "IEEE Computer Society, University of Moratuwa",
    date: "Oct 2024",
    image: hackathon,
    category: "Competitive Programming",
    color: "from-purple-600 to-pink-500",
    icon: <Trophy className="h-5 w-5" />,
    achievements: [
      "24-hour Time Constraint",
      "Team Collaboration",
      "Rapid Prototyping"
    ],
    delay: 0.1,
  },
  {
    title: "UI/UX Designathon",
    description: "Participated in national-level design competition demonstrating user-centered design principles and creative problem-solving.",
    issuer: "BCS Student Chapter of KDU",
    date: "2025",
    image: uiux,
    category: "Design Excellence",
    color: "from-indigo-600 to-purple-500",
    icon: <Star className="h-5 w-5" />,
    achievements: [
      "User-Centered Design",
      "Creative Problem Solving",
      "Design Thinking"
    ],
    delay: 0.2,
  },
];

export function EducationAndMore() {
  const navigate = useNavigate(); // Add this line

  const handleViewAllCertificates = () => {
    // Navigate to certificates page
    navigate('/certificates');
  };

  return (
    <section id="education" className="py-24 px-4 md:px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden max-w-[100vw]">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Education Section - Increased bottom margin */}
        <div className="mb-32"> {/* Changed from mb-20 to mb-32 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Education
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
            <Card className="p-4 md:p-10 shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"></div>
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-gradient-to-br from-blue-100 to-cyan-100 p-4 rounded-2xl shadow-lg"
                >
                  <GraduationCap className="h-10 w-10 text-blue-600" />
                </motion.div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl mb-2 bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-xl text-blue-600 mb-2">
                    Sri Lanka Institute of Information Technology (SLIIT)
                  </p>
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                      Currently Pursuing
                    </Badge>
                    <Badge variant="outline" className="border-blue-300 text-blue-700">
                      Undergraduate Student
                    </Badge>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-4 flex items-center justify-center md:justify-start gap-2">
                      <Sparkle className="h-4 w-4 text-blue-600" />
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      {[
                        "Data Structures & Algorithms",
                        "Database Management Systems",
                        "Object-Oriented Programming",
                        "Web Technologies",
                        "Software Engineering",
                        "Artificial Intelligence",
                        "Machine Learning",
                        "Compiler Design",
                        "Computer Networks"
                      ].map((course) => (
                        <motion.div
                          key={course}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge variant="outline" className="border-blue-200 text-slate-700 hover:bg-blue-50 hover:border-blue-400 transition-all">
                            {course}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced Certifications & Achievements Section */}
        <div id="certifications" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Certifications & Achievements
                </h2>
              </div>
              <p className="text-lg text-slate-800 max-w-2xl mx-auto mb-8">
                Validated credentials and notable accomplishments demonstrating expertise and commitment to professional growth
              </p>
              <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-12 rounded-full"></div>
            </div>
          </motion.div>

          {/* Featured Certificates Grid - Enhanced Design */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12">
            {certificates.map((cert) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: cert.delay }}
              >
                <Card className="overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                  {/* Certificate Header */}
                  <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${cert.color} p-6`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                          {cert.icon}
                        </div>
                        <div>
                          <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 text-xs">
                            {cert.category}
                          </Badge>
                          <h3 className="text-xl font-bold text-white mt-2">{cert.title}</h3>
                        </div>
                      </div>
                      <Shield className="h-8 w-8 text-white/30" />
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Issuer and Date */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 flex items-center justify-center">
                          <Calendar className="h-4 w-4 text-slate-600" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500">Issued</div>
                          <div className="text-sm font-semibold text-slate-800">{cert.date}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-slate-200 text-slate-600 text-xs">
                        {cert.issuer.split(',')[0]}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                      {cert.description}
                    </p>

                    {/* Key Achievements */}
                    {cert.achievements && (
                      <div className="mb-6">
                        <div className="text-xs font-semibold text-slate-700 mb-2">Key Achievements:</div>
                        <div className="space-y-1">
                          {cert.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                              <span className="text-xs text-slate-600">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(cert.image, '_blank')}
                        className="text-slate-600 hover:text-slate-900"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Certificate
                      </Button>
                      <Badge className={`bg-gradient-to-r ${cert.color} text-white border-0`}>
                        Verified
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Professional Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 border-0 bg-gradient-to-br from-slate-50 to-white shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-xl shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Continuous Professional Development
                    </h3>
                    <p className="text-slate-600">
                      These certifications represent ongoing commitment to learning and skill development in
                      cutting-edge technologies, preparing for advanced roles in software engineering and AI development.
                    </p>
                  </div>
                </div>
                <Button
                  onClick={handleViewAllCertificates} // This now uses the updated function
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                >
                  View All Credentials
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Work Experience
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mb-12 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-4 md:p-10 shadow-xl border-0 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>

              <div className="relative z-10 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                  <h3 className="text-2xl text-purple-900">Seeking Internship Opportunities</h3>
                </div>
                <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                  Currently seeking internship opportunities to apply academic knowledge in professional settings.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  While I don't have formal work experience yet, my extensive project portfolio demonstrates practical
                  application of software development skills, including full-stack development, AI integration, and
                  database management. Through academic projects and hackathons, I have developed strong problem-solving
                  abilities, collaboration skills, and the capacity to deliver quality software solutions under deadlines.
                  I am eager to contribute to innovative teams and gain hands-on industry experience.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Portfolio Extras */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Additional Activities
              </h2>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-600 to-blue-600 mb-12 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Open Source Contributions",
                description: "Actively contributing to open-source projects on GitHub, collaborating with developers worldwide, and sharing code solutions with the developer community.",
                icon: Github,
                color: "from-slate-500 to-slate-700",
                delay: 0,
              },
              {
                title: "Technical Writing",
                description: "Writing technical blogs and articles on software development topics, AI/ML concepts, and programming tutorials to share knowledge with fellow developers.",
                icon: BookOpen,
                color: "from-blue-500 to-cyan-500",
                delay: 0.1,
              },
              {
                title: "Workshops & Seminars",
                description: "Regular participant in tech workshops and seminars covering topics like cloud computing, DevOps practices, emerging frameworks, and industry best practices.",
                icon: Users,
                color: "from-purple-500 to-pink-500",
                delay: 0.2,
              },
              {
                title: "Project Management",
                description: "Experienced in using Jira for project management, task tracking, and agile development practices. Comfortable working in collaborative team environments with version control systems.",
                icon: TrendingUp,
                color: "from-green-500 to-emerald-500",
                delay: 0.3,
              },
              {
                title: "Community Engagement",
                description: "Volunteer in tech community events, helping organize coding workshops and mentoring junior students in programming fundamentals and software development.",
                icon: Users,
                color: "from-orange-500 to-red-500",
                delay: 0.4,
              },
              {
                title: "Continuous Learning",
                description: "Committed to staying updated with the latest technology trends through online courses, documentation reading, and hands-on experimentation with new frameworks and tools.",
                icon: Lightbulb,
                color: "from-yellow-500 to-orange-500",
                delay: 0.5,
              },
            ].map((activity) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: activity.delay }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activity.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`bg-gradient-to-r ${activity.color} p-3 rounded-xl mb-4 inline-block shadow-lg`}
                    >
                      <activity.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg mb-3 text-slate-900 font-semibold">
                      {activity.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// GitHub icon component
function Github({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}