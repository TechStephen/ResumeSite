import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Image from 'react-bootstrap/Image';
import { IconContext } from 'react-icons';
import { MdDescription } from "react-icons/md";
import { AiFillHtml5 } from "react-icons/ai";
import { FaPython, FaReact, FaNodeJs, FaVuejs, FaAngular } from "react-icons/fa";
import { DiMongodb, DiDatabase } from "react-icons/di";
import { SiCss3, SiJavascript, SiJava, SiMysql, SiCplusplus, SiPhp, SiFirebase } from "react-icons/si";
import { FcAbout, FcHome, FcGraduationCap, FcBusinessman } from "react-icons/fc";
import { Container, Row, Col, Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form, Navbar, Nav, NavDropdown, FormControl, Collapse, Accordion, AccordionCollapse, AccordionCollapseProps, AccordionToggle, AccordionToggleProps, Table, TableProps } from 'react-bootstrap';

function ECommSite() {
    useEffect(() => {
        Aos.init();
    }, []);
    return(
        <>
            <IconContext.Provider value={{ className: "icons" }}>
                <div className="background-img">
                    <Container>
                        <div className="template-content">
                            <h1 data-aos="fade-down" data-aos-duration="2000">ECommerce Site</h1>
                            <Row className="t-img-row">                                                                    
                                <Col>
                                    <Image src="p9.png" width="95%" height="95%" data-aos="fade-down-right" data-aos-duration="2000" />
                                </Col>

                                <Col>
                                    <Table striped bordered hover size="sm"  variant="light" className="template-tb" data-aos="fade-down-left" data-aos-duration="2000">
                                        <thead>
                                            <tr>
                                                <th>Languages/Frameworks Used</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><FaReact /> ReactJS,  <AiFillHtml5 /> HTML5,  <SiCss3 /> CSS3,  </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                            <Row className="t-row">
                                <Card className=".template-description" style={{ width: '75rem', height: '20rem' }} data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                        <Card.Body>
                                            <Card.Title className="t-descript"> <MdDescription />  Description</Card.Title>
                                            <Card.Text className="t-text">ECommerce UI written with React! Maps all product data to Material UI asyncronously, written as a creative exercise.</Card.Text>
                                        </Card.Body>
                                </Card>
                            </Row>
                        </div>
                    </Container>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default ECommSite;