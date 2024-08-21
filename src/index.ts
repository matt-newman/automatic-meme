import { ParseInput } from "./parseInput";
import { MarsRover, Rover } from "./rover";

// TODO: run the program, given the input
export const runProgram = (input: string) => {
    const data = ParseInput.process(input);
    const { grid, rovers } = data;

    const finalPositions = rovers.map((rover: Rover) => { 
        const current = new MarsRover(grid, rover);
        const result = current.followInstructions();
        return `${result.position.join(' ')} ${result.direction}`;
    });

    console.log( { result: finalPositions.join(`
`) } )

    return finalPositions.join(`
`);
}