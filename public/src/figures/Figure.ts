namespace GAME{
    export interface Figure{
        name : string;
        positionData : Iterable<number>;
        colorData : Iterable<number>;
        program : WebGLProgram;

        draw() : void;
    }
}