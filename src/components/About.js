import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Image from 'react-bootstrap/Image';
import { IconContext } from "react-icons";
import { FcAbout, FcHome, FcGraduationCap, FcBusinessman } from "react-icons/fc";
import { Container, Row, Col, Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Navbar, Nav, NavDropdown, FormControl, Collapse, Accordion, AccordionCollapse, AccordionCollapseProps, AccordionToggle, AccordionToggleProps, Table, TableProps } from 'react-bootstrap';

function About(){
    useEffect(() => {
        Aos.init();
    }, []);
    return(
        <>  
            <IconContext.Provider value={{ className: "icons" }}>
                <div className="about-img">
                    <Container>
                        <div className="aboutme-content">
                            <Container>
                                <Row className="aboutme-row-one">

                                <Col>
                                    <div className="card-two" data-aos="fade-left" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                        <Card variant="primary" className="mb-3" bg="light" text="black">
                                            <div className="card-two-content">
                                                <Col xs={5} md={5}>
                                                    <Image src="me2.jpg" height="140px" width="130px" roundedCircle />
                                                </Col>
                                                <Card.Body>
                                                    <Card.Title>Stephen Schmitz</Card.Title>
                                                    <Card.Subtitle className="mb-2"><i>Full-Stack & Infrastructure Engineer</i></Card.Subtitle>
                                                    <Card.Text><FcGraduationCap /> Education: The University of North Carolina at Charlotte</Card.Text>
                                                    <Card.Text><FcHome />  Resides: Charlotte, NC</Card.Text>
                                                    <Card.Text><FcBusinessman />  Focus: Cloud/DevOps</Card.Text>
                                                </Card.Body>
                                            </div>
                                        </Card>
                                    </div>
                                </Col>

                                <Col>
                                    <div className="card-one" data-aos="fade-right" data-aos-duration="1500" data-aos-easing="ease-in-sine">
                                        <Card className="mb-3" bg="light" text="black">
                                            <Card.Title className="aboutme-title"><FcAbout /> About Me:</Card.Title>
                                            <Card.Text className="aboutme-text">Stephen is a Cloud and Full Stack Engineer with over half a decade of experience with Fortune 500 companies across Financial Services, Digital Strategy, and eCommerce. Proven expertise in Cloud and Web Development, specializing in architecting Scalable Cloud Infrastructures, implementing CI/CD pipelines, Infrastructure as Code, Containerization, and developing Responsive Web Applications. Stephen is also a 3x Professionally Certified Solutions Architect with Amazon Web Services.</Card.Text>
                                        </Card>
                                    </div>
                                </Col>
                                </Row>  
                            </Container>

                            <Row className="aboutme-row-two">
                                <Table striped bordered hover size="sm"  variant="light" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <thead>
                                    <tr style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
                                        <th>Cloud</th>
                                        <th>Tools</th>
                                        <th>Languages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>AWS</td>
                                        <td>Terraform</td>
                                        <td>Python</td>
                                    </tr>
                                    <tr>
                                        <td>Azure</td>
                                        <td>Docker</td>
                                        <td>Typescript/JSX</td>
                                    </tr>
                                    <tr>
                                        <td>CI/CD</td>
                                        <td>Jenkins</td>
                                        <td>SQL</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="1"><div className="frameworks">Container Orchestration</div></td>
                                        <td>Ansible</td>
                                        <td>YAML ...Resume for more</td>
                                    </tr>
                                </tbody>
                                </Table>
                            </Row>
                        </div>
                    </Container>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default About;