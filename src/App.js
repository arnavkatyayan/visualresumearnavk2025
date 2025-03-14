import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import HomePage from './HomePage';
import { useState, useEffect } from 'react';
import ReactSwitch from 'react-switch';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("home"); // Tracks current active page

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page); // Update the state to show only the selected page
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      
      {/* Navbar */}
      <Navbar bg={darkMode ? "dark" : "light"} expand="lg" className='nav-bg'>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto margin-right-nav">
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"} onClick={() => handleNavigation("home")}>Home</Nav.Link>
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"} onClick={() => handleNavigation("about")}>About</Nav.Link>
              <div className="dark-mode-btn">
                {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
                <ReactSwitch onChange={toggleDarkMode} checked={darkMode}/>
              </div>
              <h1 className="my-name">Arnav Katyayan</h1>
            </Nav>
            <Nav className="me-auto margin-left-nav">
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"} onClick={() => handleNavigation("DSA")}>Data Structures & Algo</Nav.Link>
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"} onClick={() => handleNavigation("project")}>Projects</Nav.Link>
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"} onClick={() => handleNavigation("contact")}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Conditional Rendering Based on Current Page */}
      {currentPage === "home" && <HomePage />}
      {currentPage === "about" && <AboutPage darkMode={darkMode} />}
      {currentPage === "project" && <ProjectsPage darkMode={darkMode} />}
      {currentPage === "DSA" && <ContactPage darkMode={darkMode} />}

      {/* Footer */}
      <footer>
        <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} fixed="bottom">
          <Container className="justify-content-center">
            <Nav className='footer-version'>
              <div className="footer-content">
                <span>📧 <a href="mailto:arnavkatyayan99@gmail.com">Email</a></span> |
                <span>🔗 <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></span> |
                <span>📞 +91 8851454409</span> |
                <span>🐱 <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">GitHub</a></span> |
                <span>⚡ <a href="https://leetcode.com/yourprofile" target="_blank" rel="noopener noreferrer">LeetCode</a></span> |
              </div>
              <p className='text-align-center'>© 2025 Arnav Katyayan. All rights reserved.</p>
            </Nav>
          </Container>
        </Navbar>
      </footer>
    </div>
  );
}

export default App;
