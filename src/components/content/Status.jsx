import { Card, Row, Col, Container } from "react-bootstrap"; 

function Status() {
    return (
        <Container fluid style={{ padding: "20px" }}>
            <h1 style={{ fontFamily: "Helvetica", fontWeight: "bold", marginBottom: "20px" }}>
                Status
            </h1>
            <Row className="mb-4">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Service Stats</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>GPS Status</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>NTP Status</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Current System Info</Card.Title>
                            <p><strong>Role:</strong> Tx or Rx</p>
                            <p><strong>BIST:</strong> </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Maybe Some Plots Here...</Card.Title>
                            <div style={{ height: "200px", backgroundColor: "#f8f9fa", textAlign: "center", lineHeight: "200px" }}>
                                Placeholder for plots
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Status;
