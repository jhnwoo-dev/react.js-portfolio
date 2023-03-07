import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Main Structure
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Pages
import { AboutMe } from "./components/pages/AboutMe";
import { Contact } from "./components/pages/Contact";
import { Portfolio } from "./components/pages/Portfolio";
import { Resume } from "./components/pages/Resume";

import "./styles.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<AboutMe />} />
                    <Route
                        path="react.js-portfolio/about-me"
                        element={<AboutMe />}
                    />
                    <Route
                        path="react.js-portfolio/portfolio"
                        element={<Portfolio />}
                    />
                    <Route
                        path="react.js-portfolio/contact"
                        element={<Contact />}
                    />
                    <Route
                        path="react.js-portfolio/resume"
                        element={<Resume />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
