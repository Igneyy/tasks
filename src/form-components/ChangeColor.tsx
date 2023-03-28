import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "black",
    "cyan"
];

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setChosenColor(event.target.value);
    }

    return (
        <div>
            <h3>
                {COLORS.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="Colors"
                        onChange={updateColor}
                        id={color}
                        label={
                            <div key={color} style={{ backgroundColor: color }}>
                                {color}
                            </div>
                        }
                        value={color}
                        checked={chosenColor === color}
                    ></Form.Check>
                ))}
            </h3>
            <span>
                {"You have chosen "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </span>
                .
            </span>
        </div>
    );
}
