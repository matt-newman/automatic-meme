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
        describe("turning left", () => {
            beforeEach(() => {
                position = [0, 0];
                instructions = 'L';
            })
            it("should face west after turning left from north", () => {
                direction = 'N';
                input = { position, direction, instructions };

                let rover = new MarsRover(grid, input);
                const result = rover.followInstructions();
                const expected = { "position": [0, 0], "direction": "W" };

                expect(result).toEqual(expected);
            });

            it("should face north after turning left from east", () => {
                direction = 'E';
                input = { position, direction, instructions };

                let rover = new MarsRover(grid, input);
                const result = rover.followInstructions();
                const expected = { "position": [0, 0], "direction": "N" };

                expect(result).toEqual(expected);
            });

            it("should face south after turning left from west", () => {
                direction = 'W';
                input = { position, direction, instructions };

                let rover = new MarsRover(grid, input);
                const result = rover.followInstructions();
                const expected = { "position": [0, 0], "direction": "S" };

                expect(result).toEqual(expected);
            });

            it("should face east after turning left from south", () => {
                direction = 'S';
                input = { position, direction, instructions };

                let rover = new MarsRover(grid, input);
                const result = rover.followInstructions();
                const expected = { "position": [0, 0], "direction": "E" };

                expect(result).toEqual(expected);
            });
        });

        describe("turning right", () => {
            beforeEach(() => {
                position = [0, 0];
                instructions = 'R';
            })
            it("should face east after turning right from north", () => {
                direction = 'N';
                input = { position, direction, instructions };

                let rover = new MarsRover(grid, input);
                const result = rover.followInstructions();
                const expected = { "position": [0, 0], "direction": "E" };

                expect(result).toEqual(expected);
            });

            it("should face north after turning right from west", () => {
                direction = 'W';
                input = { position, direction, instructions };

                let rover = new MarsRover(grid, input);
                const result = rover.followInstructions();
                const expected = { "position": [0, 0], "direction": "N" };

                expect(result).toEqual(expected);
            });

            it("should face south after turning right from east", () => {
                direction = 'E';
                input = { position, direction, instructions };

                let rover = new MarsRover(grid, input);
                const result = rover.followInstructions();
                const expected = { "position": [0, 0], "direction": "S" };

                expect(result).toEqual(expected);
            });

            it("should face west after turning right from south", () => {
                direction = 'S';
                input = { position, direction, instructions };

                let rover = new MarsRover(grid, input);
                const result = rover.followInstructions();
                const expected = { "position": [0, 0], "direction": "W" };

                expect(result).toEqual(expected);
            });
        });

        describe("consecutive turns", () => {
            let rover;

            beforeEach(() => {
                position = [0, 0];
                direction = 'N';
            })
            it("should face the correct direction after turning left any number of times after facing a given direction", () => {
                let expected
                instructions = 'LL';
                input = { position, direction, instructions };
                rover = new MarsRover(grid, input);
                expected = { position, direction: 'S' };
                expect(rover.followInstructions()).toEqual(expected);

                instructions = 'LLL';
                input = { position, direction, instructions };
                rover = new MarsRover(grid, input);
                expected = { position, direction: 'E' };
                expect(rover.followInstructions()).toEqual(expected);

                instructions = 'LLLL';
                input = { position, direction, instructions };
                rover = new MarsRover(grid, input);
                expected = { position, direction: 'N' };
                expect(rover.followInstructions()).toEqual(expected);

                instructions = 'LLLLL';
                input = { position, direction, instructions };
                rover = new MarsRover(grid, input);
                expected = { position, direction: 'W' };
                expect(rover.followInstructions()).toEqual(expected);
            });
        });
    });
})