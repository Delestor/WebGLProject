namespace GAME{
    export class DrawTriangleImpl extends Draw{
        constructor(program: WebGLProgram) {
            super(program);
        }
        draw(vertexData: Iterable<number>, colorData: Iterable<number>): void {
            this.drawTriangle(vertexData, colorData);
        }
        
        private drawTriangle(vertexData: Iterable<number>, colorData: Iterable<number>){

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
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        }
    }
}