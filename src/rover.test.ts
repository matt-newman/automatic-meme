import { MarsRover, Position } from './rover';

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
    let position: Position = { x: 0, y: 0, direction: 'N' };

    // beforeAll(() => {
    //     program = new MarsRover(grid, position);
    // });

    describe("should do something", () => {
        it("should do something", () => {
            let rover = new MarsRover(grid, position);
            const result = rover.getStatus();
            const expected = 'output';

            expect(result).toBe(expected)
        })
    })
})