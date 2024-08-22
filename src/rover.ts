export type Coord = [number, number];
export type CompassHeading = 'N' | 'E' | 'S' | 'W';
export type SteeringDirection = 'L' | 'R';

export type RoverArgs = {
    position: Coord;
    heading: string;
    xMax?: number;
    yMax?: number;
}

export type RoverStatus = {
    position: Coord;
    heading: CompassHeading;
}

export class MarsRover {
    constructor(rover: RoverArgs, xMax = 0, yMax = (xMax || 0)) {
        const { heading, position } = rover;
        // console.log( 'setup', { position, heading, xMax, yMax } );

        this.setBoundry(xMax, yMax);
        this.setHeading(heading as CompassHeading);
        this.setPosition(position);
    }

    private moves = {
        "N": [0, 1],
        "E": [1, 0],
        "S": [0, -1],
        "W": [-1, 0],
    };

    private compassHeadings = ["N", "E", "S", "W"];
    private maxHeadingIndex = this.compassHeadings.length - 1;

    private xMax: number = 0;
    private yMax: number = 0;
    private currentPosition: Coord = [0, 0]; // default
    private currentHeading: CompassHeading = 'N'; // default

    private setBoundry(xMax = 0, yMax = (xMax || 0)): void {
        if (xMax < 0 || yMax < 0) {
            console.warn('boundry cannot have negative size', { xMax, yMax });
            return;
        }

        this.xMax = xMax;
        this.yMax = yMax;
    }

    private setPosition(coord: Coord) {
        const xMax = this.xMax;
        const yMax = this.yMax;
        const [x, y] = coord;

        if (x < 0 || y < 0 || x > xMax || y > yMax) {
            // console.warn('trying to set position outside of grid', { xMax, yMax, coord } );
            return;
        }

        this.currentPosition = [x, y];
    }

    private setHeading(heading: CompassHeading): CompassHeading {
        if (!this.compassHeadings.includes(heading)) {
            console.warn('not a valid heading', { heading });
        }
        this.currentHeading = heading;
        return this.currentHeading;
    }

    // TODO: could make this public for testing, but really its class internals
    private steer(direction: SteeringDirection) {
        let headingIndex = this.compassHeadings.indexOf(this.currentHeading);

        if (direction === 'L') {
            headingIndex--;

            if (headingIndex < 0) {
                headingIndex = this.maxHeadingIndex;
            }
        } else {
            // must be right ( 'R' )
            headingIndex++;

            if (headingIndex > this.maxHeadingIndex) {
                headingIndex = 0;
            }
        }

        const newHeading = this.compassHeadings[headingIndex] as CompassHeading;

        this.setHeading(newHeading);
    }

    // TODO: could make this public for testing, but really its class internals
    private move() {
        const [currentX, currentY] = this.currentPosition;
        const [x, y] = this.moves[this.currentHeading];
        const newX = currentX + x;
        const newY = currentY + y;

        // console.log( { x,y, newX, newY, currentX, currentY } );

        this.setPosition([newX, newY]);
    }

    public runInstructions(instructions: string) {
        // check instruction set is valid:
        const regexForValidInstruction = /^[LRM]*$/; // made of steering and moving
        if (!regexForValidInstruction.test(instructions)) {
            console.warn('invalid instruction set', { instructions });
            return;
        }

        const arrInstructions = instructions.split('');
        arrInstructions.forEach((instruction) => {
            if (instruction === 'M') {
                this.move();
            } else {
                // is steering...
                this.steer(instruction as SteeringDirection);
            }
        });

        return this.getStatus();
    }

    public getStatus(): RoverStatus {
        return {
            position: this.currentPosition,
            heading: this.currentHeading,
        }
    }
}