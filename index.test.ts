import { MarsRover } from './index';

describe("MarsRover", () => {
    let program: MarsRover;
    beforeAll(()=>{
        program = new MarsRover('');
    });

    it("should do something", () => {
        const result = program.doThing();
        const expected = 'output';

        expect(result).toBe(expected)
    })
})