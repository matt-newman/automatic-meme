export class ParseInput {
    static process(input: string) {
        if (!input) {
            // throw error for invalid input
            return;
        }

        const data = input.trim().split('\n');
        const gridSize = data[0].split(' ').map(item => parseInt(item, 10));

        const width = gridSize[0];
        const height = gridSize[1];

        const gridRows = new Array(width).fill('')
        const grid = new Array(height).fill(gridRows);

        let inputIndex = 1;
        let rovers = [];

        const createRover = ( positionString: string, instructions: string ) => {
            const pos = positionString.split(' ');
            const position = [pos[0], pos[1]].map(pos => parseInt(pos, 10));
            const direction = pos[2];
    
            // TODO: check pos 1-3 exist
            // TODO: do instructions exists... does it matter?
    
            return {
                position,
                direction,
                instructions,
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