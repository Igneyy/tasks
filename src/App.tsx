import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript by Evan
                </header>
                <Row>
                    <div className="Red-rectangle">
                        <Col>
                            <p> Favorite Animals</p>
                            <ol>
                                <li> Turtles </li>
                                <li> Pigs </li>
                                <li> Frogs </li>
                            </ol>
                        </Col>
                    </div>
                    <Col></Col>
                    <div className="Red-rectangle">
                        <Col>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <h1> Fudge and Sugar (aka booger) </h1>
                        <img
                            className="Image-size"
                            src={require("./images/fudgeandbooger.jpeg")}
                            alt="A picture of my dogs Fudge and Sugar (aka booger)"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
