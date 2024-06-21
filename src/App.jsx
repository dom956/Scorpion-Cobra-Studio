import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarMenu from './Components/NavbarMenu';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from "./Pages/Projects";
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import Gamepage from './Pages/Gamepage';
import Footer from './Components/Footer';
import "./App.css";


function App() {
  return (
    <Router>
        <div>
                <NavbarMenu/>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/gamepage/:gameId" element={<Gamepage />} />
                        <Route path="/*" element={<ErrorPage />} />
                    </Routes>
                </div>
                <Footer className="footer" />
            </div>
    </Router>
  );
}

export default App;
