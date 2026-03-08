import './App.css';
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
  const [currentPage, setCurrentPage] = useState("home");

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleNavigation = (page) => {
    if (page === currentPage) {
      swal("Error", "We are on the same page", "error");
      return;
    }
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

      <Navbar
        bg={darkMode ? "dark" : "light"}
        variant={darkMode ? "dark" : "light"}
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
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex align-items-center gap-3">
              <Nav.Link
                style={{ color: darkMode ? "white" : "black", fontWeight: "bold" }}
                onClick={() => handleNavigation("home")}
                className="hover-underline"
              >
                Home
              </Nav.Link>

              <Nav.Link
                style={{ color: darkMode ? "white" : "black", fontWeight: "bold" }}
                onClick={() => handleNavigation("about")}
                className="hover-underline"
              >
                About
              </Nav.Link>

              <div className="d-flex align-items-center justify-content-center my-3 my-lg-0 ms-lg-3 gap-2 p-2 rounded" style={{ backgroundColor: darkMode ? "#333" : "#f0f0f0", cursor: "pointer" }}>
                {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
                <ReactSwitch onChange={toggleDarkMode} checked={darkMode} height={20} width={40} />
              </div>
            </Nav>

            <Nav className="ms-auto d-flex align-items-center gap-3">
              <Nav.Link
                style={{ color: darkMode ? "white" : "black", fontWeight: "bold" }}
                onClick={() => handleNavigation("DSA")}
                className="hover-underline"
              >
                Data Structures and Algorithms
              </Nav.Link>

              <Nav.Link
                style={{ color: darkMode ? "white" : "black", fontWeight: "bold" }}
                onClick={() => handleNavigation("project")}
                className="hover-underline"
              >
                Projects
              </Nav.Link>

              <Nav.Link
                style={{ color: darkMode ? "white" : "black", fontWeight: "bold" }}
                onClick={() => handleNavigation("contact")}
                className="hover-underline"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Pages */}
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
                <img
                  src={VisualResumeLogo}
                  className='visual-resume-logo'
                  alt="Visual Resume Logo"
                />
                <h6 className='text-align-center'>
                  Version: 1.0.9
                </h6>
              </div>
              <p className='text-align-center'>© 2026 Arnav Katyayan. All rights reserved.</p>
            </Nav>
          </Container>
        </Navbar>
      </footer>

    </div>
  );
}

export default App;
