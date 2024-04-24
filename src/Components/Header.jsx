import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


 function Header() {
  return (
    <div>
       <Navbar expand="lg" >
      <Container>
      <Navbar.Brand href="#home">
            
            <b style={{color:'black',fontSize:'40px',fontWeight:'bolder'}}><i class="fa-brands fa-slack"></i>Landrick</b>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">  
          <div>            
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </div>
            <Nav.Link href="#home" style={{color:'black',fontSize:'18px',fontWeight:'bolder'}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:'black',fontSize:'18px',fontWeight:'bolder'}}>Landing</Nav.Link>
            <Nav.Link href="#home" style={{color:'black',fontSize:'18px',fontWeight:'bolder'}}>Pages</Nav.Link>
            <Nav.Link href="#home" style={{color:'black',fontSize:'18px',fontWeight:'bolder'}}>Demos</Nav.Link>
            <Nav.Link href="#home" style={{color:'black',fontSize:'18px',fontWeight:'bolder'}}>Docs</Nav.Link>
            <NavDropdown title="Components" id="basic-nav-dropdown" style={{color:'grey',fontSize:'18px',fontWeight:'bolder'}}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav><Form inline >
        <Row>
          <Col xs="auto">
            <Form.Control 
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className='btn btn-dark'>Submit</Button>
          </Col>
        </Row>
      </Form>
        </Navbar.Collapse>

        
      </Container>
    </Navbar>
       </div>
  )
}
export default Header
