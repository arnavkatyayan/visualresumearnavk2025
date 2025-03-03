import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import HomePage from './HomePage';
import {useState} from 'react';
function App() {

  const [homeBtnClicked,setHomeBtnClicked] = useState(false);

  const handleHome = () => {
    setHomeBtnClicked(true);
  }
  return (
    <div>
    <Navbar bg="light" expand="lg" className='nav-bg'>
      <Container >
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto margin-right-nav">
            <Nav.Link onClick={handleHome}>Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            
          </Nav>
          <Nav className="me-auto margin-left-nav">
            <Nav.Link href="#">Data Structures & Algo</Nav.Link>
            <Nav.Link href="#">Projects</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <HomePage/>
    <footer>
    <Navbar bg="dark" variant="dark" fixed="bottom">
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
