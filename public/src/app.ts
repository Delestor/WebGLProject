namespace GAME {

    export class App {

        private canvas: HTMLCanvasElement;

        constructor() {
            this.canvas = GLUtils.gl_init('webgl_canvas');
        }

        async init() {
            if (!gl) {
                throw new Error('Your browser is not ready for WebGL');
            } else {
                console.log('entramos en init app.ts');
            }

            const program = await Shader.loadShaderProgram(VertexShader.getShader(),FragmentShader.getShader());

            const vertexData = [
                0, 1, 0,
                1, -1, 0,
                -1, -1, 0,
            ];

            const colorData =[
                //R, G, B
                1, 0, 0,    //Vertex 1 color
                0, 1, 0,    //Vertex 2 color
                0, 0, 1,    //Vertex 3 color
            ];

            const vertexBuffer = GLUtils.initBuffer(vertexData);
            const colorBuffer = GLUtils.initBuffer(colorData);

            const positionLocation = gl.getAttribLocation(program, `position`);
            gl.enableVertexAttribArray(positionLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

            const colorLocation = gl.getAttribLocation(program, `color`);
            gl.enableVertexAttribArray(colorLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
            gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

            gl.useProgram(program);
            gl.drawArrays(gl.TRIANGLES, 0, 3);

        }

        /**
         * Resizes the canvas to fit the window.
         */
        public resize(){
            if(this.canvas !== undefined){
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            }
        }
    }
}