import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<string>("");

    function checkAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }
    return (
        <div>
            <h3>
                <Form.Group controlId="CheckAnswer">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control
                        type="text"
                        value={givenAnswer}
                        onChange={checkAnswer}
                    ></Form.Control>
                </Form.Group>
            </h3>
            <div>
                {givenAnswer === expectedAnswer ? (
                    <span>✔️</span>
                ) : (
                    <span>❌</span>
                )}
            </div>
        </div>
    );
}
