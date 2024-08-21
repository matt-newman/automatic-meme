export class ParseInput {
    public grid!: any[];
    public rovers!: any[];

    constructor(input: string) {
        if (!input) {
            // throw error for invalid input
            return;
        }

        const data = input.trim().split('\n');
        const gridSize = data[0].split(' ').map(item => item * 1);

        const width = gridSize[0];
        const height = gridSize[1];

        const gridRows = new Array(width).fill('')
        this.grid = new Array(height).fill(gridRows);

        // TODO: clean this up - loop over each pair of rows for rover
        this.rovers = [
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
            grid: this.grid,
            rovers: this.rovers,
        };
    }
}