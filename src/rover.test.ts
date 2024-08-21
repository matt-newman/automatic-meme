import { MarsRover, Rover } from './rover';

/*
Test Input:
```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

Expected Output:
```
1 3 N
5 1 E
```
*/

describe("MarsRover", () => {
    let grid: any[] = [];
    let position: [number, number] = [0, 0];
    let direction = 'N';
    let instructions = 'LMLMLMLMM';

    let input: Rover = { position, direction, instructions }

    // beforeAll(() => {
    //     program = new MarsRover(grid, position);
    // });

    describe("getStatus", () => {
        it("should return the correct status values for the rover", () => {
            position = [0, 0];
            direction = 'N';
            instructions = 'LMLMLMLMM';
            input = { position, direction, instructions };

            let rover = new MarsRover(grid, input);
            const result = rover.getStatus();
            const expected = { "position": [0, 0], "direction": "N" };

            expect(result).toEqual(expected);
        });
    });

    describe("followInstructions", () => {
        it("should return the correct status values for the rover", () => {
            position = [0, 0];
            direction = 'N';
            instructions = 'LMLMLMLMM';
            input = { position, direction, instructions };

            let rover = new MarsRover(grid, input);
            const result = rover.followInstructions(); // returns getStatus() at the end            
            const expected = { "position": [0, 0], "direction": "N" };

            expect(result).toEqual(expected);
        });
    });
})