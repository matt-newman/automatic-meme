import { CompassHeading, Coord } from "./rover";

export type ParsedRoverOutput = {
    position: Coord;
    heading: CompassHeading;
    instructions: string;
}

export type ProcessInputResponse = {
    width: number;
    height: number;
    rovers: Array<ParsedRoverOutput>;
}

export class ParseInput {
    static process(input: string):ProcessInputResponse {
        if (!input) {
            // throw error for invalid input
            return {
                width: 0,
                height: 0,
                rovers: [],
            };
        }

        const data = input.trim().split('\n');
        const gridSize = data[0].split(' ').map(item => parseInt(item, 10));

        const width = gridSize[0];
        const height = gridSize[1];

        let inputIndex = 1;
        let rovers = [];

        const createRover = (positionString: string, instructions: string): ParsedRoverOutput => {
            const pos = positionString.split(' ');
            const position = [pos[0], pos[1]].map(x => parseInt(x, 10)) as Coord;
            const heading = pos[2] as CompassHeading;

            // TODO: check pos 1-3 exist
            // TODO: do instructions exists... does it matter?

            return {
                position,
                heading,
                instructions,
            }
        }

        while (data[inputIndex + 1]) {
            const rover = createRover(data[inputIndex], data[inputIndex + 1]);
            inputIndex += 2;
            rovers.push(rover);
        }

        return {
            width,
            height,
            rovers,
        }
    }
}