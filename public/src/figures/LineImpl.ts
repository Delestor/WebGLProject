namespace GAME{
    export class LineImpl implements Figure{
        name: string;
        positionData: Iterable<number>;
        colorData: Iterable<number>;
        program: WebGLProgram;

        public constructor(program : WebGLProgram, posData : Iterable<number>, colorData?: Iterable<number>, name?:string){
            if(name !== undefined)
                this.name = name;

            this.positionData = posData;
            if(colorData !== undefined)
                this.colorData = colorData;
            this.program = program;
        }

        draw(): void {
            var line = new DrawLineImpl(this.program);
            if(this.colorData !== undefined)
                line.draw(this.positionData, this.colorData);
            else
                line.drawRandomColor(this.positionData);
        }
        
    }
}