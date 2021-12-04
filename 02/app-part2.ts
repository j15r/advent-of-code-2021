import * as fs from 'fs';
import * as path from "path";

const rawInput: string[] = fs.readFileSync(path.dirname(__filename) + '/input.txt','utf8').toString().split(/\r?\n/);

let aim: number = 0;
let horizontalPosition: number = 0;
let depth: number = 0;

for (let i = 0; i < rawInput.length; i++) {    
    if (rawInput[i].includes('up')) {
        aim -= extractDistance(rawInput[i]);
    }

    if (rawInput[i].includes('down')) {
        aim += extractDistance(rawInput[i]);
    }

    if (rawInput[i].includes('forward')) {
        horizontalPosition += extractDistance(rawInput[i]);
        depth += (aim * extractDistance(rawInput[i]));
    }
}

function extractDistance(input: string): number {
    const splittedInput = input.split(" ", 2); 
    return parseInt(splittedInput[1], 10);
}

console.log('result:', depth * horizontalPosition);
