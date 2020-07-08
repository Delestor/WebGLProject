namespace GAME{
    export interface IFigure{
        name : string;
        positionData : Iterable<number>;
        colorData : Iterable<number>;
        program : WebGLProgram;

        draw() : void;
    }
}