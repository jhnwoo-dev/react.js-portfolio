import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Main Structure
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Pages
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import { Resume } from "./pages/Resume";

import "./styles.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
