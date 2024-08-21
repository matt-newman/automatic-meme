import { runProgram } from ".";

describe("program test", () => {
    let input: string;

    beforeEach(() => {
        input = `
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
`;
    });

    it("should return the correct output", () => {
        const result = runProgram( input );
        const expected = 
`
1 3 N
5 1 E
`;
        expect(result).toEqual(expected);
    });
});