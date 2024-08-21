import { ParseInput } from "./parseInput";

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

describe("ParseInput", () => {
    it("should return a structure for running the program", () => {
        const input =
            `
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
`
        const result = ParseInput.process(input);
        const expected = {
            grid: [
                ['', '', '', '', ''], 
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
            ],
            rovers: [
                {
                    position: { x: 1, y: 2, direction: 'N' },
                    instructions: 'LMLMLMLMM'
                },
                {
                    position: { x: 3, y: 3, direction: 'E' },
                    instructions: 'MMRMMRMRRM'
                },
            ],
        };

        expect(result).toEqual(expected)
    })
})