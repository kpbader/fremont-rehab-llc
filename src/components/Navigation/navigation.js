import './navigation.css';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../assets/images/fremont-logo-white-01.png";

function Navigation() {

    // offCanvas 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nav = useNavigate();

    return (
        <section id="nav-bar">
            <img src={logo} alt="logo" />
            <Nav id="main-nav-links">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/fremont-rehab-llc" className="header-nav-tab">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown id="programs-dropdown" title="Programs ⌄">
                    <NavDropdown.Item onClick={() => nav("/php")}>
                        Partial Hospitalization Program (PHP)
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => nav("/iop")}>
                        Intensive Outpatient Program (IOP)
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => nav("/op")}>
                        Outpatient Program (OP)
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => nav("/jobs")}>
                        Jobs Program
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/mission" className="header-nav-tab">Mission</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/about" className="header-nav-tab">About</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/insurance" className="header-nav-tab">Insurance</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="/contact" className="header-nav-tab">Contact</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <Button id="hamburger-btn" className="openbtn" onClick={handleShow}>
                ☰
            </Button>


            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                    <section id="nav-tabs">
                        <ul className="tabpanel">

                            <Link to="/fremont-rehab-llc" className="header-nav-tab" onClick={handleClose}>Home</Link>
                            <NavDropdown id="programs-dropdown" title="Programs ⌄">
                                <NavDropdown.Item>
                                    <Link to="/php" onClick={handleClose} className="hamburger-dropdown-tab">Partial Hospitalization Program (PHP)</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/iop" onClick={handleClose} className="hamburger-dropdown-tab">Intensive Outpatient Program (IOP)</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/op" onClick={handleClose} className="hamburger-dropdown-tab">Outpatient Program (OP)</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/jobs" onClick={handleClose} className="hamburger-dropdown-tab">Jobs Program</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link to="/mission" className="header-nav-tab" onClick={handleClose}>Mission</Link>
                            <Link to="/about" className="header-nav-tab" onClick={handleClose}>About</Link>
                            <Link to="/insurance" className="header-nav-tab" onClick={handleClose}>Insurance</Link>
                            <Link to="/contact" className="header-nav-tab" onClick={handleClose}>Contact</Link>

                        </ul>
                    </section>

                </Offcanvas.Body>
            </Offcanvas >
        </section>

    )
};

export default Navigation;