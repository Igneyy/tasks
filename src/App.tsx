import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div>
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
                                <Button
                                    onClick={() => console.log("Hello World!")}
                                >
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
            <div className="App">
                <hr></hr>
                <DoubleHalf></DoubleHalf>
                <hr></hr>
                <ChooseTeam></ChooseTeam>
                <hr></hr>
                <ColoredBox></ColoredBox>
                <hr></hr>
                <ShoveBox></ShoveBox>
                <hr></hr>
                <Counter></Counter>
                <hr />
                <RevealAnswer></RevealAnswer>
                <hr />
                <StartAttempt></StartAttempt>
                <hr />
                <TwoDice></TwoDice>
                <hr />
                <ChangeType></ChangeType>
                <hr />
                <CycleHoliday></CycleHoliday>
            </div>
        </div>
    );
}

export default App;
