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

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [contactPageClicked, setContactPageClicked] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleContactPage = () => {
    setContactPageClicked(!contactPageClicked);
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
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"}>Home</Nav.Link>
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"} href="#">About</Nav.Link>
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
    {!contactPageClicked ?
      <HomePage /> : null}

      <footer>
        <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} fixed="bottom">
          <Container className="justify-content-center">
            <Nav>
              <Nav.Link className={darkMode ? "dark-theme" : "light-theme"}>Version 1.0.0</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </footer>
    </div>
  );
}

export default App;
