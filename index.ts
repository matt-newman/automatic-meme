export class MarsRover {
    private someData = [];

    constructor(parameters) {
        return this;
    }

    /**
     * doThing
     */
    public doThing() {
        return 'result';
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