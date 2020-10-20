namespace GAME{
    export class TriangleImpl implements Figure{
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
            var triangle = new DrawTriangleImpl(this.program);
            triangle.draw(this.positionData, this.colorData);
        }
        
    }
}