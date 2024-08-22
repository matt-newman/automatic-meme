import { MarsRover, RoverArgs } from './rover';

describe("MarsRover", () => {
    let xMax = 0;
    let yMax = 0;
    let position: [number, number] = [0, 0];
    let heading = 'N';
    let instructions = '';
    let input: RoverArgs = { heading, position };
    let rover;

    describe("setup", () => {
        beforeEach(() => {
            xMax = 2;
            yMax = 2;
            heading = 'N';
            instructions = '';
        })

        it("should allow the properties of the rover to be set", () => {
            position = [1, 1];
            input = { position, heading };

            rover = new MarsRover(input, xMax, yMax);
            const result = rover.getStatus();
            const expected = { position: [1, 1], heading: "N" };

            expect(result).toEqual(expected);
        });

        it("should not allow an invalid position of the rover to be set", () => {
            let expected;
            let result;

            position = [3, 1];
            input = { position, heading };

            rover = new MarsRover(input, xMax, yMax);
            result = rover.getStatus();
            expected = { position: [0, 0], heading: "N" };
            expect(result).toEqual(expected);

            position = [1, 3];
            input = { position, heading };

            rover = new MarsRover(input, xMax, yMax);
            result = rover.getStatus();
            expected = { position: [0, 0], heading: "N" };
            expect(result).toEqual(expected);

            position = [-1, 0];
            input = { position, heading };

            rover = new MarsRover(input, xMax, yMax);
            result = rover.getStatus();
            expected = { position: [0, 0], heading: "N" };
            expect(result).toEqual(expected);

            position = [0, -1];
            input = { position, heading };

            rover = new MarsRover(input, xMax, yMax);
            result = rover.getStatus();
            expected = { position: [0, 0], heading: "N" };
            expect(result).toEqual(expected);
        });
    });

    describe("getStatus", () => {
        it("should return the correct status values for the rover", () => {
            position = [0, 0];
            heading = 'N';
            instructions = 'LMLMLMLMM';
            input = { position, heading };

            rover = new MarsRover(input, xMax, yMax);
            const result = rover.getStatus();
            const expected = { position: [0, 0], heading: "N" };

            expect(result).toEqual(expected);
        });
    });

    describe("runInstructions", () => {
        describe("turning left", () => {
            beforeEach(() => {
                position = [0, 0];
                instructions = 'L';
            })
            it("should face west after turning left from north", () => {
                heading = 'N';
                input = { position, heading };

                rover = new MarsRover(input, xMax, yMax);
                const result = rover.runInstructions(instructions);
                const expected = { position: [0, 0], heading: "W" };

                expect(result).toEqual(expected);
            });

            it("should face north after turning left from east", () => {
                heading = 'E';
                input = { position, heading };

                rover = new MarsRover(input, xMax, yMax);
                const result = rover.runInstructions(instructions);
                const expected = { position: [0, 0], heading: "N" };

                expect(result).toEqual(expected);
            });

            it("should face south after turning left from west", () => {
                heading = 'W';
                input = { position, heading };

                rover = new MarsRover(input, xMax, yMax);
                const result = rover.runInstructions(instructions);
                const expected = { position: [0, 0], heading: "S" };

                expect(result).toEqual(expected);
            });

            it("should face east after turning left from south", () => {
                heading = 'S';
                input = { position, heading };

                rover = new MarsRover(input, xMax, yMax);
                const result = rover.runInstructions(instructions);
                const expected = { position: [0, 0], heading: "E" };

                expect(result).toEqual(expected);
            });
        });

        describe("turning right", () => {
            beforeEach(() => {
                position = [0, 0];
                instructions = 'R';
            })
            it("should face east after turning right from north", () => {
                heading = 'N';
                input = { position, heading };

                rover = new MarsRover(input, xMax, yMax);
                const result = rover.runInstructions(instructions);
                const expected = { position: [0, 0], heading: "E" };

                expect(result).toEqual(expected);
            });

            it("should face north after turning right from west", () => {
                heading = 'W';
                input = { position, heading };

                rover = new MarsRover(input, xMax, yMax);
                const result = rover.runInstructions(instructions);
                const expected = { position: [0, 0], heading: "N" };

                expect(result).toEqual(expected);
            });

            it("should face south after turning right from east", () => {
                heading = 'E';
                input = { position, heading };

                rover = new MarsRover(input, xMax, yMax);
                const result = rover.runInstructions(instructions);
                const expected = { position: [0, 0], heading: "S" };

                expect(result).toEqual(expected);
            });

            it("should face west after turning right from south", () => {
                heading = 'S';
                input = { position, heading };

                rover = new MarsRover(input, xMax, yMax);
                const result = rover.runInstructions(instructions);
                const expected = { position: [0, 0], heading: "W" };

                expect(result).toEqual(expected);
            });
        });

        describe("consecutive turns", () => {
            let rover;

            beforeEach(() => {
                position = [0, 0];
                heading = 'N';
                input = { position, heading };
            })

            it("should face the correct direction after turning left any number of times", () => {
                let expected
                instructions = 'LL';                
                rover = new MarsRover(input, xMax, yMax);
                expected = { position, heading: 'S' };
                expect(rover.runInstructions(instructions)).toEqual(expected);

                instructions = 'LLL';
                rover = new MarsRover(input, xMax, yMax);
                expected = { position, heading: 'E' };
                expect(rover.runInstructions(instructions)).toEqual(expected);

                instructions = 'LLLL';
                rover = new MarsRover(input, xMax, yMax);
                expected = { position, heading: 'N' };
                expect(rover.runInstructions(instructions)).toEqual(expected);

                instructions = 'LLLLL';
                rover = new MarsRover(input, xMax, yMax);
                expected = { position, heading: 'W' };
                expect(rover.runInstructions(instructions)).toEqual(expected);
            });

            it("should face the correct direction after turning right any number of times", () => {
                let expected
                instructions = 'RR';
                rover = new MarsRover(input, xMax, yMax);
                expected = { position, heading: 'S' };
                expect(rover.runInstructions(instructions)).toEqual(expected);

                instructions = 'RRR';
                rover = new MarsRover(input, xMax, yMax);
                expected = { position, heading: 'W' };
                expect(rover.runInstructions(instructions)).toEqual(expected);

                instructions = 'RRRR';
                rover = new MarsRover(input, xMax, yMax);
                expected = { position, heading: 'N' };
                expect(rover.runInstructions(instructions)).toEqual(expected);

                instructions = 'RRRRR';
                rover = new MarsRover(input, xMax, yMax);
                expected = { position, heading: 'E' };
                expect(rover.runInstructions(instructions)).toEqual(expected);
            });
        });

        describe("moving", () => {
            beforeEach(() => {
                heading = 'N';
                xMax = 2;
                yMax = 2;
                instructions = 'M';
            })

            it("should be able to move up 1 square when going north", () => {
                let expected;
                position = [0, 1];
                heading = 'N';
                input = { position, heading };
                rover = new MarsRover(input, xMax, yMax);
                expected = { position: [0, 2], heading };
                expect(rover.runInstructions(instructions)).toEqual(expected);
            });

            it("should be able to move right 1 square when going east", () => {
                let expected;
                position = [0, 0];
                heading = 'E';
                input = { position, heading };
                rover = new MarsRover(input, xMax, yMax);
                expected = { position: [1, 0], heading };
                expect(rover.runInstructions(instructions)).toEqual(expected);
            });

            it("should be able to move down 1 square when going south", () => {
                let expected;
                position = [1, 1];
                heading = 'S';
                input = { position, heading };
                rover = new MarsRover(input, xMax, yMax);
                expected = { position: [1, 0], heading };
                expect(rover.runInstructions(instructions)).toEqual(expected);
            });

            it("should be able to move left 1 square when going west", () => {
                let expected;
                position = [1, 1];
                heading = 'W';
                instructions = 'M';
                input = { position, heading };
                rover = new MarsRover(input, xMax, yMax);
                expected = { position: [0, 1], heading };
                expect(rover.runInstructions(instructions)).toEqual(expected);
            });

            it("should not be able to move outside the grid", () => {
                let expected;
                position = [0, 0];
                heading = 'S';
                instructions = 'M';
                input = { position, heading };
                rover = new MarsRover(input, xMax, yMax);
                expected = { position: [0, 0], heading };
                expect(rover.runInstructions(instructions)).toEqual(expected);

                position = [0, 2];
                heading = 'N';
                instructions = 'M';
                input = { position, heading };
                rover = new MarsRover(input, xMax, yMax);
                expected = { position: [0, 2], heading };
                expect(rover.runInstructions(instructions)).toEqual(expected);

                position = [2, 1];
                heading = 'E';
                instructions = 'M';
                input = { position, heading };
                rover = new MarsRover(input, xMax, yMax);
                expected = { position: [2, 1], heading };
                expect(rover.runInstructions(instructions)).toEqual(expected);

                position = [0, 1];
                heading = 'W';
                instructions = 'M';
                input = { position, heading };
                rover = new MarsRover(input, xMax, yMax);
                expected = { position: [0, 1], heading };
                expect(rover.runInstructions(instructions)).toEqual(expected);
            });
        });
    });

    describe("simple test", () => {
        beforeEach(() => {
        })

        it("should return the correct output for a basic set of operations", () => {
            position = [1, 1];
            heading = 'E';
            instructions = 'MRMRM'; // 2,1 -> S -> 2,0 -> W -> 1,0
            input = { position, heading };

            rover = new MarsRover(input, xMax, yMax);
            const result = rover.runInstructions(instructions);
            const expected = { position: [1, 0], heading: "W" };

            expect(result).toEqual(expected);
        });
    });

    describe("full test", () => {
        beforeEach(() => {
            xMax=5;
            yMax=5;
        })

        it("should return the correct status values for the first rover", () => {
            position = [1, 2];
            heading = 'N';
            instructions = 'LMLMLMLMM'; // W -> 0,2 -> S -> 0,1 ->  
            input = { position, heading };

            rover = new MarsRover(input, xMax, yMax);
            const result = rover.runInstructions(instructions);
            const expected = { position: [1, 3], heading: "N" };

            expect(result).toEqual(expected);
        });

        it("should return the correct status values for the second rover", () => {
            position = [3, 3];
            heading = 'E';
            instructions = 'MMRMMRMRRM';
            input = { position, heading };

            rover = new MarsRover(input, xMax, yMax);
            const result = rover.runInstructions(instructions);
            const expected = { position: [5, 1], heading: "E" };

            expect(result).toEqual(expected);
        });
    });
})