import * as fs from 'fs';
import * as path from "path";

const rawInput: string[] = fs.readFileSync(path.dirname(__filename) + '/input.txt','utf8').toString().split(/\r?\n/);

const gammaRate: number[] = [];
const epsilonRate = [];

// calculate gammaRate
for (let i = 0; i < rawInput.length; i++) {
    console.log(rawInput[i]);
    for (let j = 0; j < rawInput[i].length; j++) {
        const element = rawInput[i].charAt(j);
        console.log(element);
    }
}

function extractDistance(input: string): number {
    const splittedInput = input.split(" ", 2); 
    return parseInt(splittedInput[1], 10);
}

function calculateCommandDistance(commands: number[]): number {
    return commands.reduce((a, b) => a + b, 0);
}

// const sum = calculateCommandDistance(verticalCommands) * calculateCommandDistance(horizontalCommands);