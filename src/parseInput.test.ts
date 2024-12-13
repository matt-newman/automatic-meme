import { ParseInput } from "./parseInput";

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
            width: 5,
            height: 5,
            rovers: [
                {
                    position: [1,2], 
                    heading: 'N',
                    instructions: 'LMLMLMLMM'
                },
                {
                    position: [3,3], 
                    heading: 'E',
                    instructions: 'MMRMMRMRRM'
                },
            ],
        };

        expect(result).toEqual(expected)
    })
})