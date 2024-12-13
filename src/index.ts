import { ParseInput, ParsedRoverOutput } from "./parseInput";
import { MarsRover, RoverStatus } from "./rover";

// TODO: run the program, given the input
export const runProgram = (input: string) => {
    const data = ParseInput.process(input);
    const { width, height, rovers } = data as any;
    const xMax = width, yMax = height;

    const finalPositions = rovers.map((rover: ParsedRoverOutput) => {
        const { instructions } = rover;
        const current = new MarsRover(rover, xMax, yMax);
        const result = current.runInstructions(instructions) as RoverStatus;
        return `${result.position.join(' ')} ${result.heading}`;
    });

    return finalPositions.join(`
`);
}