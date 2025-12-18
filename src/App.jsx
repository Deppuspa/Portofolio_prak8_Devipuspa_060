import { HashRouter, Routes, Route } from "react-router-dom"
import NavbarSection from './components/NavbarSection';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default  function App() {
  

  return (
    <HashRouter>
      <NavbarSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
      
  )
}


