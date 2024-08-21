import { MarsRover, Position, Rover } from './rover';

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
    let program: MarsRover;
    let grid: any[] = [];
    let position = [0, 0];
    let direction = 'N';
    let instructions = 'LMLMLMLMM';

    let input: Rover = { position, direction, instructions }

    // beforeAll(() => {
    //     program = new MarsRover(grid, position);
    // });

    describe("instantiating", () => {
        it("should set the various properties", () => {
            position = [0, 0];
            direction = 'N';
            instructions = 'LMLMLMLMM';
            input = { position, direction, instructions };

            let rover = new MarsRover(grid, input);
            const result = rover.getStatus();
            const expected = { "instructions": "LMLMLMLMM", "position": [0, 0], "direction": "N" };

            expect(result).toEqual(expected)
        })
    })
})