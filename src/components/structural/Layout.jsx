import React from "react";
import { Container, Sidebar, Sidenav, Nav } from "rsuite";
import { Link, Outlet } from "react-router-dom";
import "rsuite/dist/rsuite.min.css"; // Ensure styles are included
import logo from "../../assets/tci.png"; // Update with actual path to your logo

function Layout() {
    return (
        <Container style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar Navigation */}
            <Sidebar style={{ width: 250, backgroundColor: "#f8f9fa", padding: "15px" }}>
                {/* Company Logo */}
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <img src={logo} alt="Company Logo" style={{ width: "100px", height: "auto" }} />
                </div>

                <Sidenav>
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item as={Link} to="/status">Status</Nav.Item>
                            <Nav.Item as={Link} to="/systemconfig">System Config</Nav.Item>
                            <Nav.Item as={Link} to="/agc">AGC</Nav.Item>
                            <Nav.Item as={Link} to="/blanking">Blanking</Nav.Item>
                            <Nav.Item as={Link} to="/network">Network</Nav.Item>
                            <Nav.Item as={Link} to="/scheduler">Scheduler</Nav.Item>
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </Sidebar>

            {/* Main Content Area */}
            <Container style={{ flex: 1, padding: "20px" }}>
                <Outlet />
            </Container>
        </Container>
    );
}

export default Layout;
