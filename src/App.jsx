import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About  from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact  from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import "./index.css";

export default function App() {
  useEffect(() => {
    document.title = "Ragavendra Avula | DevOps Engineer";
  }, []);

  return (
    <Router>
      <div style={{ background: 'var(--dark-bg)', color: '#e2e8f0', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}