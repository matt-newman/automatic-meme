import { MarsRover } from './index';

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

    beforeAll(() => {
        program = new MarsRover('');
    });

    describe("parseInput", () => {
        it("should return a structure for running the program", () => {
            const input = 
`
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
`
            const result = program.parseInput(input);
            const expected = {
                grid: [ [], [], [], [], [] ],
                rovers: [
                    {
                        start: [ "1", "2", "N" ],
                        instructions: [ "L", "M", "L", "M", "L", "M", "L", "M", "M" ]
                    },
                    {
                        start: [ "3", "3", "E" ],
                        instructions: [ "M", "M", "R", "M", "M", "R", "M", "R", "R", "M" ]
                    },
                ],
            };

            expect(result).toEqual(expected)
        })
    })

    describe("parseInput", () => {

    })

    xit("should do something", () => {
        const result = program.doThing();
        const expected = 'output';

        expect(result).toBe(expected)
    })
})