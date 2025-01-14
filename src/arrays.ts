/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let firstLast: number[] = [];
    if (numbers[0] && numbers[numbers.length - 1]) {
        firstLast = [numbers[0], numbers[numbers.length - 1]];
    }
    return firstLast;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((integer: number): number => integer * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const parsed = numbers.map((badParse: string): string =>
        !+badParse ? "0" : badParse
    );
    const intStrings = parsed.map((aNumb: string): number => +aNumb);
    return intStrings;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const removed$ = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.replace("$", "") : amount
    );
    const parsed = removed$.map((badParse: string): string =>
        !+badParse ? "0" : badParse
    );
    const removedDollars = parsed.map((aNumb: string): number => +aNumb);
    return removedDollars;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removedQuestions = messages.filter(
        (message: string): boolean => !(message[message.length - 1] === "?")
    );
    const shoutMessage = removedQuestions.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    return shoutMessage;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const reduced = words.reduce(
        (currentTotal: number, word: string) =>
            word.length < 4 ? currentTotal + 1 : currentTotal,
        0
    );
    return reduced;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const checkColors = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return checkColors;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    let equation = addends.join("+");
    if (!equation) {
        equation = "0";
    }
    return sum + "=" + equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const injectedArray: number[] = [...values];
    const firstNegative = values.findIndex(
        (value: number): boolean => value < 0
    );
    if (firstNegative >= 0) {
        const spliceNegative: number[] = [...values];
        spliceNegative.splice(firstNegative);
        const sum = spliceNegative.reduce(
            (currentSum: number, num: number) => currentSum + num,
            0
        );
        console.log(firstNegative);
        console.log(sum);
        injectedArray.splice(firstNegative + 1, 0, sum);
    } else {
        const sum = values.reduce(
            (currentSum: number, num: number) => currentSum + num,
            0
        );
        injectedArray.push(sum);
    }
    return injectedArray;
}
