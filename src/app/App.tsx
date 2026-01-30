import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { EducationAndMore } from "./components/EducationAndMore";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CertificatesPage } from "./components/CertificatesPage"; // Make sure this import path is correct

// Portfolio Page Component (your main page)
function PortfolioPage() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <EducationAndMore />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

// Main App Component with routing
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Main portfolio page */}
          <Route path="/" element={<PortfolioPage />} />
          
          {/* Certificates page */}
          <Route path="/certificates" element={<CertificatesPage />} />
          
          {/* You can add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}