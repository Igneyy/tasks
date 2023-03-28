import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [quizActive, setQuiz] = useState<boolean>(false);
    function subtractOne(): void {
        setAttempts(attempts - 1);
    }
    function addOne(): void {
        setAttempts(attempts + 1);
    }
    return (
        <>
            <div>
                <Button
                    onClick={() => {
                        setQuiz(true);
                        subtractOne();
                    }}
                    disabled={quizActive || attempts <= 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => setQuiz(false)} disabled={!quizActive}>
                    Stop Quiz
                </Button>
                <Button onClick={() => addOne()} disabled={quizActive}>
                    Mulligan
                </Button>
            </div>
            <div>
                <span>Number of Attempts:{attempts}</span>
            </div>
        </>
    );
}
