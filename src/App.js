import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import HomePage from './HomePage';
import { useState, useEffect } from 'react';
import { Switch, FormControlLabel } from "@mui/material";
import ReactSwitch from 'react-switch';
import { dark } from '@mui/material/styles/createPalette';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [contactPageClicked, setContactPageClicked] = useState(false);
  const [homePageClicked, setHomePageClicked] = useState(false);
  const [aboutPageClicked, setAboutPageClicked] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleContactPage = () => {
    setContactPageClicked(!contactPageClicked);
  }

  const handleHomePage = () => {
    setHomePageClicked(!homePageClicked);
  }

  const handleAboutPage = () => {
    setAboutPageClicked(!aboutPageClicked);
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      
      <Navbar bg={darkMode ? "dark" : "light"} expand="lg" className='nav-bg'>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto margin-right-nav">
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"} onClick={handleHomePage}>Home</Nav.Link>
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"} href="#" onClick={handleAboutPage}>About</Nav.Link>
              <div className="dark-mode-btn">
                {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
                <ReactSwitch onChange={toggleDarkMode} checked={darkMode}/>
              </div>

            
              <h1 className="my-name">Arnav Katyayan</h1>
            </Nav>
            <Nav className="me-auto margin-left-nav">
            
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"} href="#">Data Structures & Algo</Nav.Link>
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"} href="#">Projects</Nav.Link>
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"} onClick={handleContactPage}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    {contactPageClicked ?
    <ContactPage darkMode={darkMode}/>:null}
    {aboutPageClicked ?
    <AboutPage darkMode={darkMode}/>:null}
    {!homePageClicked ?
      <HomePage /> : null}

      <footer>
        <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} fixed="bottom">
          <Container className="justify-content-center">
            <Nav className='footer-version'>
              <div className="footer-content">
                <span>📧 <a href="mailto:arnavkatyayan99@gmail.com">Email</a></span> |
                <span>🔗 <a href="https://www.linkedin.com/in/yourprofile" target="_blank">LinkedIn</a></span> |
                <span>📞 +91 8851454409</span> |
                <span>🐱 <a href="https://github.com/yourgithub" target="_blank">GitHub</a></span> |
                <span>⚡ <a href="https://leetcode.com/yourprofile" target="_blank">LeetCode</a></span> |
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
