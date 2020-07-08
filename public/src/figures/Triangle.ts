namespace GAME{
    export class Triangle implements IFigure{
        name: string;
        positionData: Iterable<number>;
        colorData: Iterable<number>;
        program: WebGLProgram;

        public constructor(program : WebGLProgram, posData : Iterable<number>, colorData: Iterable<number>, name?:string){
            if(name !== undefined)
                this.name = name;

            this.positionData = posData;
            this.colorData = colorData;
            this.program = program;
        }

        public draw(): void {
            DrawUtils.drawTriangle(this.program, this.positionData, this.colorData);
        }
        
    }
}