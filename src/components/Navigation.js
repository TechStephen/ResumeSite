import React from 'react';
import Logo from './images/logo.png';
import { BsFillHouseFill } from "react-icons/bs";
import { AiFillMail, AiFillQuestionCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Container, Row, Col, Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Navbar, Nav, NavDropdown, FormControl, Collapse, Accordion, AccordionCollapse, AccordionCollapseProps, AccordionToggle, AccordionToggleProps } from 'react-bootstrap';

function Navigation() {
    return(
      <>
        <IconContext.Provider value={{ className: "icons"  }}>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
              <img
                src={ Logo }
                width="80"
                height="72.5"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"><BsFillHouseFill />  Home</Nav.Link>
              <Nav.Link href="/About"><AiFillQuestionCircle />  About Me</Nav.Link>
              <Nav.Link href="/Contactus"><AiFillMail />  Contact Me</Nav.Link>
            </Nav>
            <Form inline>
              <Button variant="outline-info">
                <a href="mailto:stephenschmitz518@gmail.com">Hire me  <FaHandshake /></a>
              </Button>
            </Form>
            </Navbar.Collapse>
          </Navbar>
        </IconContext.Provider>
      </>
    );
}

export default Navigation;