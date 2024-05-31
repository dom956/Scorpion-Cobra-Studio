import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarMenu from './Components/NavbarMenu';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from "./Pages/Projects";
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import Copyright from './Components/Copyright';


function App() {
  return (
    <Router>
      <div>
        <NavbarMenu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
         <Copyright/>
      </div>
    </Router>
  );
}

export default App;
