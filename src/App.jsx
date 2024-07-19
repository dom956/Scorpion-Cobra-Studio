import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarMenu from './Components/NavbarMenu';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from "./Pages/Projects";
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import Project from './Pages/Project';
import Footer from './Components/Footer';
import Category from './Pages/Category';
import "./App.css";


function App() {
  return (
    <Router>
        <div className='app-wrapper'>
                <NavbarMenu/>
                <div className='main-content'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/project/:id" element={<Project />} />
                        <Route path="/category/:categoryName" element={<Category />} />
                        <Route path="/*" element={<ErrorPage />} />
                    </Routes>
                </div>
                <Footer className="footer" />
            </div>
    </Router>
  );
}

export default App;
