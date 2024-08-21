import { MarsRover } from './rover';

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

    xit("should do something", () => {
        const result = program.placeRover();
        const expected = 'output';

        expect(result).toBe(expected)
    })
})