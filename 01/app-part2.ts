import * as fs from 'fs';
import * as path from "path";

let increaseCounter = 0;
const windowsCounts: number[] = []

const rawInput: string[] = fs.readFileSync(path.dirname(__filename) + '\\input.txt','utf8').toString().split(/\r?\n/);
const input: number[] = rawInput.map((i) => {
    return parseInt(i, 10)
});

for (let i = 0; i < input.length-2; i++) {
    let windowElements = [];
    windowElements.push(input[i]);
    windowElements.push(input[i+1]);
    windowElements.push(input[i+2]);

    windowsCounts.push(calculateWindowCount(windowElements));
    if (i !== 0) {
        if (windowsCounts[i-1] !== windowsCounts[i]) {
            windowsCounts[i-1] < windowsCounts[i] ? increaseCount(windowsCounts[i]) : console.log(windowsCounts[i], '(decreased)');
            continue;
        }
        console.log(windowsCounts[i] , '(no change)');
        continue;
    }
    console.log(windowsCounts[0], '(N/A - no previous sum)');
}

function increaseCount(windowsCounts: number): void {
    console.log(windowsCounts, '(increased)');
    increaseCounter++;
}

/**
 * Returns sum of all numbers which are part of one window
 */
function calculateWindowCount(windowElements: number[]): number {
    return windowElements.reduce((a, b) => a + b, 0);
}

console.log('total amount of increased measurements:', increaseCounter);
