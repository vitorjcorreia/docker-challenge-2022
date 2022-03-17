import { Card, Row, Col, Container } from "react-bootstrap";
<Container>
<Row>
    {playerData.map((playerData, k) => (
        <Col key={k} xs={12} md={4} lg={3}>
            <Card >
                <Card.Img src="https://via.placeholder.com/150x75" />

                <Card.Body>
                    <Card.Title>{playerData.name}</Card.Title>
                    <Card.Text>{playerData.team_name}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    ))}
</Row>
</Container>