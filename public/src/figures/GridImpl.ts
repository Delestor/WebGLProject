namespace GAME{
    export class GridImpl implements Figure{
        name: string;
        positionData: Iterable<number>;
        colorData: Iterable<number>;
        program: WebGLProgram;
        x : number;
        y : number;
        grid : DrawGridImpl;

        constructor(program : WebGLProgram, x : number, y : number){
            this.program = program;
            this.x = x;
            this.y = y;
            this.grid = new DrawGridImpl(this.program);
        }

        draw(): void {
            this.drawGrid();
        }
        
        private drawGrid(){
            //var colorLines = this.defaultColorData;

            for (let i = 1; i <= this.x; i++) {

                let starX = (i/(this.x/2));
                let endX = starX;

                this.grid.draw( 
                    [-starX, 1, 0, 
                        -endX, -1, 0]
                );

                this.grid.draw( 
                    [starX, 1, 0, 
                        endX, -1, 0]
                );
            }

            this.grid.line.drawOnlyCenter();
            
            for (let i = 1; i <= this.y; i++) {

                let starX = (i/(this.y/2));
                let endX = starX;

                this.grid.draw( 
                    [1, -starX, 0, 
                        -1, -endX, 0]
                );

                this.grid.draw( 
                    [1, starX, 0, 
                        -1, endX, 0]
                );
            }
        }

    }
}