import * as fs from 'fs';
import * as path from "path";

let increaseCounter = 0;

const rawInput: string[] = fs.readFileSync(path.dirname(__filename) + '\\input.txt','utf8').toString().split(/\r?\n/);
const input: number[] = rawInput.map((i) => {
    return parseInt(i, 10)
});

console.log(input[0], '(N/A - no previous measurement)');
for (let i = 1; i < input.length; i++) {
    input[i-1] < input[i] ? increaseCount(i) : console.log(input[i] , '(decreased)');
}

function increaseCount(i: number): void {
    console.log(input[i], '(increased)');
    increaseCounter++;
}

console.log('total amount of increased measurements:', increaseCounter);
