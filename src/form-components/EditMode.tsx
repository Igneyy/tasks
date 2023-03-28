import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [inEdit, setInEdit] = useState<boolean>(false);
    return (
        <div>
            <h3>
                <Form.Check
                    type="switch"
                    id="in-edit"
                    label="Edit Mode"
                    checked={inEdit}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setInEdit(event.target.checked)
                    }
                ></Form.Check>
                <span>
                    {userName}
                    {isStudent ? " is a student" : " is not a student"}
                </span>
                {inEdit && (
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="A Student"
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setIsStudent(event.target.checked)}
                    ></Form.Check>
                )}
                {inEdit && (
                    <Form.Group controlId="ChangeName">
                        <Form.Label>Edit Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={userName}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setUserName(event.target.value)}
                        ></Form.Control>
                    </Form.Group>
                )}
            </h3>
        </div>
    );
}
