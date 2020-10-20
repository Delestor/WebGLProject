namespace GAME{
    export abstract class Draw{
        program: WebGLProgram;

        defaultColorData=[
            //R, G, B
            0, 1, 0,    //Vertex 1 color
            0, 1, 0,    //Vertex 2 color
            0, 1, 0,    //Vertex 3 color
        ];

        randomColorData=[
            Math.random()%1,Math.random()%1,Math.random()%1,
            Math.random()%1,Math.random()%1,Math.random()%1,
            Math.random()%1,Math.random()%1,Math.random()%1,
        ];

        constructor(program : WebGLProgram){
            this.program = program;
        }

        abstract draw(vertexData: Iterable<number>, colorData: Iterable<number>) : void;
    }
}