import React from "react";
import { Container, Sidebar, Sidenav, Nav } from "rsuite";
import { Link, Outlet } from "react-router-dom";
import "rsuite/dist/rsuite.min.css"; 
import { NavItem } from "react-bootstrap";
import Navbar from "./Navbar";
import {useState} from 'react';


function Layout() {
    const [menuOn, setMenu] = useState(1);

    const change = () =>  {
        setMenu(x => x * -1);
    }

    return (
        <Container style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Navbar change={change} />
            <Container style={{ display: "flex", flex: 1, backgroundColor : "#bfbfbf"}}>
                {
                menuOn === 1 ?
                <Sidebar style={{ width: 250, backgroundColor: "#bfbfbf", padding: "15px" }}>
                    <Sidenav>
                        <Sidenav.Body style = {{backgroundColor : "#bfbfbf"}}>
                            <Nav>
                                <Nav.Item as={Link} to="/status" style={{backgroundColor: "#b3b3b3", fontWeight: "bold", fontFamily:"Helvetica"}}>Status</Nav.Item>
                                <Nav.Item as={Link} to="/systemconfig" style={{backgroundColor: "#a6a6a6", fontWeight: "bold", fontFamily:"Helvetica"}}>System Config</Nav.Item>
                                <Nav.Item as={Link} to="/agc" style={{backgroundColor: "#999999", fontWeight: "bold", fontFamily:"Helvetica"}}>AGC</Nav.Item>
                                <Nav.Item as={Link} to="/blanking" style={{backgroundColor: "#8c8c8c", fontWeight: "bold", fontFamily:"Helvetica"}}>Blanking</Nav.Item>
                                <Nav.Item as={Link} to="/network" style={{backgroundColor: "#808080", fontWeight: "bold", fontFamily:"Helvetica"}}>Network</Nav.Item>
                                <Nav.Item as={Link} to="/scheduler" style={{backgroundColor: "#737373", fontWeight: "bold", fontFamily:"Helvetica"}}>Scheduler</Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </Sidebar>
                : null}
                <Container style={{ flex: 1, padding: "20px", backgroundColor : "#d9d9d9"}}>
                    <Outlet />
                </Container>
            </Container>
        </Container>
    );
}

export default Layout;
