import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, rollLeftDie] = useState<number>(1);
    const [rightDie, rollRightDie] = useState<number>(6);
    return (
        <div>
            <div>
                <Button onClick={() => rollLeftDie(d6())}>Roll Left</Button>
                <Button onClick={() => rollRightDie(d6())}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="left-die">Left Die: {leftDie}</span>
                <span data-testid="right-die">Right Die: {rightDie}</span>
            </div>
            {leftDie === rightDie && (
                <div>
                    {leftDie === 1 ? (
                        <span>Snake Eyes, you Lose!</span>
                    ) : (
                        <span>You Win!</span>
                    )}
                </div>
            )}
        </div>
    );
}
