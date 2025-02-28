import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { MdPhoneInTalk } from 'react-icons/md';
import { AiTwotoneMail, AiFillGithub } from 'react-icons/ai';
import { GiTalk } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { Container, Row, Col, Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Navbar, Nav, NavDropdown, FormControl, Collapse, Accordion, AccordionCollapse, AccordionCollapseProps, AccordionToggle, AccordionToggleProps, Table, TableProps } from 'react-bootstrap';

function Contact(){
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                setData(response)
            })
            .catch(error => {
                console.error(error)
            })
        
        Aos.init();
    }, []);
    return(
        <>
            <IconContext.Provider value={{ className: "contact-icons" }}>
                <div className="contact-img">
                    <Container>
                        <div className="contact-content" data-aos="fade-down" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                            <h1><strong>Contact</strong></h1>
                            <Row>
                                <Col>
                                    <Card className="mb-4">
                                        <Card.Body>
                                            <Card.Title><MdPhoneInTalk /></Card.Title>
                                            <Card.Title>Personal Phone Number</Card.Title>
                                            <Card.Text>Feel free to call or text me at this number!</Card.Text>
                                            <Button variant="outline-info">704-620-8684</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className="mb-4">
                                        <Card.Body>
                                            <Card.Title><GiTalk /></Card.Title>
                                            <Card.Title>Email Address</Card.Title>
                                            <Card.Text>Feel free to email me at this address!</Card.Text>
                                            <Button variant="outline-info">stephenschmitz518@gmail.com</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default Contact;