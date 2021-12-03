import * as fs from 'fs';
import * as path from "path";

const rawInput: string[] = fs.readFileSync(path.dirname(__filename) + '/input.txt','utf8').toString().split(/\r?\n/);

const verticalCommands: number[] = [];
const horizontalCommands: number[] = [];

for (let i = 0; i < rawInput.length; i++) {    
    if (rawInput[i].includes('up')) {
        verticalCommands.push(extractDistance(rawInput[i]));
    }

    if (rawInput[i].includes('down')) {
        verticalCommands.push(-extractDistance(rawInput[i]));
    }

    if (rawInput[i].includes('forward')) {
        horizontalCommands.push(-extractDistance(rawInput[i]));
    }
}

function extractDistance(input: string): number {
    const splittedInput = input.split(" ", 2); 
    return parseInt(splittedInput[1], 10);
}

function calculateCommandDistance(commands: number[]): number {
    return commands.reduce((a, b) => a + b, 0);
}

console.log(calculateCommandDistance(verticalCommands));
console.log(calculateCommandDistance(horizontalCommands));


//const input: number[] = rawInput.map((i) => {
//    return parseInt(i, 10)
//});

