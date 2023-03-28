import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentlySelected, setCurrentlySelected] = useState<string>(
        options[0]
    );

    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentlySelected(event.target.value);
    }

    return (
        <div>
            <h3>
                <Form.Group>
                    <Form.Label>Multiple Choice Question</Form.Label>
                    <Form.Select
                        value={currentlySelected}
                        onChange={updateSelected}
                    >
                        {options.map((color: string) => (
                            <option key={color} value={color}>
                                {color}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {currentlySelected === expectedAnswer ? (
                    <span>✔️</span>
                ) : (
                    <span>❌</span>
                )}
            </h3>
        </div>
    );
}
