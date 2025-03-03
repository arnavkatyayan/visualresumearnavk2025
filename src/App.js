import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import HomePage from './HomePage';
import { useState, useEffect } from 'react';
import useDarkMode from 'use-dark-mode';

function App() {
  const darkMode = useDarkMode(false); // Initialize dark mode hook
  const [homeBtnClicked, setHomeBtnClicked] = useState(false);

  const handleHome = () => {
    setHomeBtnClicked(true);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode.value) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode.value]);

  return (
    <div className={darkMode.value ? "dark-theme" : "light-theme"}>
      <Navbar bg={darkMode.value ? "dark" : "light"} expand="lg" className='nav-bg'>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto margin-right-nav">
              <Nav.Link onClick={handleHome}>Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <button onClick={darkMode.toggle}>
                {darkMode.value ? "🌙 Dark Mode" : "☀️ Light Mode"}
              </button>
            </Nav>
            <Nav className="me-auto margin-left-nav">
              <Nav.Link href="#">Data Structures & Algo</Nav.Link>
              <Nav.Link href="#">Projects</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <HomePage />

      <footer>
        <Navbar bg={darkMode.value ? "dark" : "light"} variant={darkMode.value ? "dark" : "light"} fixed="bottom">
          <Container className="justify-content-center">
            <Nav>
              <Nav.Link>Version 1.0.0</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </footer>
    </div>
  );
}

export default App;
