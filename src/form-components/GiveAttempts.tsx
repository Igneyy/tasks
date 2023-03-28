import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [applyAttempts, setApplyAttempts] = useState<string>("0");
    const applyAtt = parseInt(applyAttempts) || 0;

    function subtractOne(): void {
        setNumAttempts(numAttempts - 1);
    }

    function addAttempts(): void {
        setNumAttempts(numAttempts + applyAtt);
    }

    return (
        <div>
            <h3>
                <Button onClick={subtractOne} disabled={numAttempts <= 0}>
                    Use
                </Button>
                <Button onClick={addAttempts}>Gain</Button>
                <Form.Group controlId="GiveAttempts">
                    <Form.Label>Request Attempts:</Form.Label>
                    <Form.Control
                        type="number"
                        value={applyAttempts}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setApplyAttempts(event.target.value)}
                    ></Form.Control>
                </Form.Group>
                <span>Number of attempts: {numAttempts}</span>
            </h3>
        </div>
    );
}
