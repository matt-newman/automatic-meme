export class ParseInput {
    static process(input: string) {
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

        let inputIndex = 1;
        let rovers = [];

        const createRover = ( positionString: string, instructionsString: string ) => {
            const position = positionString.split(' ');
            const instructions = instructionsString.split('');
            const x = parseInt(position[0]);
            const y = parseInt(position[1]);
            const direction = position[2];
    
            // TODO: check pos 1-3 exist
            // TODO: do instructions exists... does it matter
    
            return {
                position: { x, y, direction },
                instructions: instructions,
            }
        }

        while( data[inputIndex + 1] ) {
            const rover = createRover(data[inputIndex], data[inputIndex + 1]);
            inputIndex += 2;
            rovers.push( rover );
        }

        return {
            grid,
            rovers,
        }
    }
}