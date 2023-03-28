import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const HOLIDAYS: string[] = ["🥚", "🦃", "🎄", "👻", "🍀"];
    const [holiday, setHoliday] = useState<string>(HOLIDAYS[0]);
    function cycleByTime(): void {
        if (holiday === "🍀") {
            setHoliday("🥚");
        } else if (holiday === "🥚") {
            setHoliday("👻");
        } else if (holiday === "👻") {
            setHoliday("🦃");
        } else if (holiday === "🦃") {
            setHoliday("🎄");
        } else {
            setHoliday("🍀");
        }
    }
    function cycleByAlphabet(): void {
        if (holiday === "🎄") {
            setHoliday("🥚");
        } else if (holiday === "🥚") {
            setHoliday("👻");
        } else if (holiday === "👻") {
            setHoliday("🍀");
        } else if (holiday === "🍀") {
            setHoliday("🦃");
        } else {
            setHoliday("🎄");
        }
    }

    return (
        <div>
            <div>
                <Button onClick={() => cycleByAlphabet()}>
                    Advance by Alphabet
                </Button>
                <Button onClick={() => cycleByTime()}>Advance by Year</Button>
            </div>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
        </div>
    );
}
