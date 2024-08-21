export class MarsRover {
    private input = '';
    
    private moves = {
        "N": [0, -1],
        "E": [1, 0],
        "S": [0, 1],
        "W": [-1, 0],
    };

    private steering = {
        "L": -1,
        "R": 1,
    }

    private currentDirection = 'N';

    private directions = ["N", "E", "S", "W"];

    public parseInput( input: string ) {
        // grid
        // rovers[]
        if (!input) {
            // throw error for invalid input
            return;
        }

        const data = input.trim().split('\n');
        const gridSize = data[0].split(' ').map(item => item * 1);

        const width = gridSize[0];
        const height = gridSize[1];

        const gridRows = new Array(width).fill('')
        const grid = new Array(height).fill(gridRows);

        const rovers = [
            {
                start: data[1].split(' '),
                instructions: data[2].split(''),
            },
            {
                start: data[3].split(' '),
                instructions: data[4].split(''),
            }
        ];
        // coord
        // instructions

        return {
            grid,
            rovers,
        };
    }

    private performAction( action: string ) {
        // TODO: action must be L, R or M

        // if action = L or R -> rotate from current facing by traversing the array +/- 1
        // if 0 - 1 -> then go to arr.len
        // if arr.len + 1 -> then go to arr[0]

        // if action = M
        // then move in the current direction
    }

    constructor( input: string ) {
        // parse the input

        return this;
    }

    /**
     * doThing
     */
    public doThing() {
        return 'result';
    }

    public placeRover() {

    }

    // TODO: controls: 
    // `L`, `R` and `M` -> left, right and move forward 1 space (at current heading)
    // Headings: N,E,S,W
    // Assume that the square directly North from (x, y) is (x, y+1).

    // The first line of input is the upper-right coordinates
    // the lower-left coordinates are assumed to be 0,0

    // Each rover has two lines of input:
        // The first line gives the rover's position, 
            /* 
            The position is made up of two integers and a letter separated by spaces, 
            corresponding to the x and y coordinates and the rover's orientation.
            */

        //  the second line is a series of instructions telling the rover how to explore the plateau

    // Each rover will be finished sequentially, 
    // which means that the second rover won`t start to move until
    // the first one has finished moving.

    // The output for each rover should be its final coordinates and heading.

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

}