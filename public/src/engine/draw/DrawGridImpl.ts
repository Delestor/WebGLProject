namespace GAME{

    
    export class DrawGridImpl extends Draw{

        line : DrawLineImpl;

        constructor(program: WebGLProgram){
            super(program);
            this.line = new DrawLineImpl(program);
        }

        draw(vertexData: Iterable<number>, colorData?: Iterable<number>): void {
            if(colorData !== undefined)
                this.line.draw(vertexData, colorData);
            else
                this.line.draw(vertexData);
        }


    }
}