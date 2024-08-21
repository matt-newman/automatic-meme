type Coord = [number, number];

export type Rover = {
    position: Coord;
    direction: string;
    instructions: string;
}

export type RoverStatus = {
    position: Coord;
    direction: string;
}

export class MarsRover {
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

    private grid: any[];
    private currentPosition: Coord = [-1, -1]; // default
    private currentDirection = ''; // default
    private instructions = ''; 

    private directions = ["N", "E", "S", "W"];

    private setGrid( grid: Array<any> ) {
        this.grid = grid;
    }

    private setPosition( coord: Coord ) {
        const [x,y] = coord;
        // TODO: check is within grid
        this.currentPosition[0] = x;
        this.currentPosition[1] = y;
    }

    private setDirection( direction: string ) {
        if ( !this.directions.includes( direction ) ) {
            console.warn('not a valid direction', { direction } );
            return this.currentDirection;
        }
        
        this.currentDirection = direction;
        return this.currentDirection;
    }

    private setInstructions( instructions: string ) {
        this.instructions = instructions;
    }

    // TODO: could make this public for testing, but really its class internals
    private steer( direction: string ) {
        if ( !Object.keys(this.steering).includes( direction ) ) {
            console.warn('not a valid steering direction');
            return this.currentDirection;
        }

        let directionIndex = this.directions.indexOf(this.currentDirection);
        let maxDirectionIndex = this.directions.length - 1;

        if ( direction === 'L' ) {
            directionIndex--;

            if ( directionIndex < 0 ) {
                directionIndex = maxDirectionIndex;
            }
        } else {
            directionIndex++;

            if ( directionIndex > maxDirectionIndex ) {
                directionIndex = 0;
            }
        }

        const newDirection = this.directions[directionIndex];

        this.setDirection(newDirection);
    }

    // TODO: could make this public for testing, but really its class internals
    private move() {
        // TODO: implement
    }

    constructor(grid: Array<any>, rover: Rover) {
        const { position, direction, instructions } = rover;
        
        this.setGrid(grid);
        this.setPosition(position);
        this.setDirection(direction);
        this.setInstructions(instructions);
        return this;
    }

    public getStatus():RoverStatus {
        return { 
            position: this.currentPosition,
            direction: this.currentDirection,
        }
    }

    public followInstructions():RoverStatus {
        const instructions = this.instructions.split('');

        instructions.forEach((instruction, index) => {
            if ( instruction === 'M' ) {
                this.move();
            } else {
                // is steering...
                this.steer( instruction );
            }
        })

        return this.getStatus();
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
}