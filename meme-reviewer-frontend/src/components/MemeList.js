import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import axios from 'axios';

const host = process.env.REACT_APP_BACKEND_HOST
    ? process.env.REACT_APP_BACKEND_HOST : 'localhost';

const port = process.env.REACT_APP_BACKEND_PORT
    ? process.env.REACT_APP_BACKEND_PORT : '5000';

export const MemeList = () => {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        const asyncCallback = async () => {
            let response = await axios.get(`http://${host}:${port}/api/meme`);
            console.log(response.data)
            return response.data
        }

        let data = asyncCallback();
        data.then(info => setMemes(info))
    }, []);

    return (
        <div>
            <h1>Meme Viewer</h1>
            <Container>
                <Row>
                    {memes.map((meme, k) => (
                        <Col key={k} xs={12} md={4} lg={3}>
                            <Card >
                                <Card.Img src={meme.imagePath} />

                                <Card.Body>
                                    <Card.Title>{meme.name}</Card.Title>
                                    <Card.Text>{meme.year}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
