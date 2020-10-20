namespace GAME{
    export class DrawLineImpl extends Draw{
        constructor(program: WebGLProgram){
            super(program);
        }

        draw(vertexData: Iterable<number>, colorData?: Iterable<number>): void {
            if(colorData !== undefined)
                this.drawLine(vertexData, colorData);
            else
                this.drawDefaultColor(vertexData);
        }

        drawOnlyCenter(){
            var colorLines = this.defaultColorData;

            this.drawLine(
                [0, 1, 0, 
                0, -1, 0]
            , colorLines);

            this.drawLine( 
                [1, 0, 0, 
                -1, 0, 0]
            , colorLines);
        }

        public drawDefaultColor(vertexData: Iterable<number>){
            this.drawLine(vertexData, this.defaultColorData);
        }

        public drawRandomColor(vertexData: Iterable<number>){
            this.drawLine(vertexData, this.randomColorData);
        }
        
        private drawLine(vertexData: Iterable<number>, colorData: Iterable<number>){
            const vertexBuffer = GLUtils.initBuffer(vertexData);
            const colorBuffer = GLUtils.initBuffer(colorData);

            
            const positionLocation = gl.getAttribLocation(this.program, `position`);
            gl.enableVertexAttribArray(positionLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

            const colorLocation = gl.getAttribLocation(this.program, `color`);
            gl.enableVertexAttribArray(colorLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
            gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

            gl.useProgram(this.program);
            gl.drawArrays(gl.LINES, 0, 2);
        }

    }
}