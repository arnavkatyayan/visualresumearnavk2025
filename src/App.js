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
import DsAlgoPage from './DsAlgoPage';
import swal from 'sweetalert';
import VisualResumeLogo from './visual-resume-logo.png';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("home"); // Tracks current active page
  const [prevPage, setPrevPage] = useState("");
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleNavigation = (page) => {
    if (page === currentPage) {
      swal("Error", "We are on the same page", "error");
      return;
    }
    
    setPrevPage(currentPage); 
    setCurrentPage(page);
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
      {/* <Navbar bg={darkMode ? "dark" : "light"} expand="lg" className='nav-bg'>
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
      </Navbar> */}
      <Navbar 
  bg={darkMode ? "dark" : "light"} 
  expand="lg" 
  style={{ 
    width: "100%", 
    position: "fixed", 
    top: 0, 
    left: 0, 
    zIndex: 1000, 
    padding: "10px 20px"
  }}
>
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse 
      id="basic-navbar-nav" 
      style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
    >
      <Nav style={{ display: "flex", alignItems: "center", gap: "15px", flexWrap: "nowrap" }}>
        <Nav.Link 
          style={{ color: darkMode ? "white" : "black", textDecoration: "none", fontWeight: "bold" }} 
          onClick={() => handleNavigation("home")}
          className="hover-underline"
        >
          Home
        </Nav.Link>
        <Nav.Link 
          style={{ color: darkMode ? "white" : "black", textDecoration: "none", fontWeight: "bold" }} 
          onClick={() => handleNavigation("about")}
          className="hover-underline"
        >
          About
        </Nav.Link>
        <div 
          style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer", padding: "5px 10px", borderRadius: "5px", backgroundColor: darkMode ? "#333" : "#f0f0f0" }}
        >
          {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
          <ReactSwitch onChange={toggleDarkMode} checked={darkMode} />
        </div>
        <h1 style={{ whiteSpace: "nowrap", fontSize: "28px",marginLeft:"10vw", fontWeight: "bold", color: darkMode ? "white" : "black" }}>
          Arnav Katyayan
        </h1>
      </Nav>
      <Nav style={{ display: "flex", alignItems: "center", gap: "15px", flexWrap: "nowrap" }}>
              <Nav.Link
                style={{
                  color: darkMode ? "white" : "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                onClick={() => handleNavigation("DSA")}
                className="hover-underline"
              >
                Data Structures and Algorithms
              </Nav.Link>
        <Nav.Link 
          style={{ color: darkMode ? "white" : "black", textDecoration: "none", fontWeight: "bold" }} 
          onClick={() => handleNavigation("project")}
          className="hover-underline"
        >
          Projects
        </Nav.Link>
        <Nav.Link 
          style={{ color: darkMode ? "white" : "black", textDecoration: "none", fontWeight: "bold" }} 
          onClick={() => handleNavigation("contact")}
          className="hover-underline"
        >
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

      {/* Conditional Rendering Based on Current Page */}
      {currentPage === "home" && <HomePage />}
      {currentPage === "about" && <AboutPage darkMode={darkMode} />}
      {currentPage === "project" && <ProjectsPage darkMode={darkMode} />}
      {currentPage === "contact" && <ContactPage darkMode={darkMode} />}
      {currentPage === "DSA" && <DsAlgoPage darkMode={darkMode} />}

      {/* Footer */}
      <footer>
        <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} fixed="bottom">
          <Container className="justify-content-center">
            <Nav className='footer-version'>
              <div className="footer-content">
                <img src={VisualResumeLogo} className='visual-resume-logo'/>
                <h6 className='text-align-center'>
                  Version: 1.0.4
                  {/* <a
                    href="https://github.com/arnavkatyayan/visualresumearnavk2025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={!darkMode? 'visual-resume-css':'visual-resume-css darkModeColor'}
                  >
                    VisualResumeRepository
                  </a> */}
                </h6>
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
