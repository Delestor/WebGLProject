namespace GAME {

    export class App {

        private canvas: HTMLCanvasElement;
        private draw: DrawUtils;

        constructor() {
            this.canvas = GLUtils.gl_init('webgl_canvas');
        }

        async init() {
            if (!gl) {
                throw new Error('Your browser is not ready for WebGL');
            } else {
                console.log('entramos en init app.ts');
            }

            this.draw = new DrawUtils();

            const program = await Shader.loadShaderProgram(VertexShader.getShader(),FragmentShader.getShader());


            var vertexData = [
                0, GLUtils.convertPercentageToNormalized(0), 0,
                1, -1, 0,
                -1, -1, 0,
            ];

            var colorData =[
                //R, G, B
                1, 0, 0,    //Vertex 1 color
                0, 1, 0,    //Vertex 2 color
                0, 0, 1,    //Vertex 3 color
            ];

            this.draw.drawTriangle(program, vertexData, colorData);

            /* vertexData = [
                0, .25, 0,
                0.25, -0.25, 0,
                -0.25, -0.25, 0,
            ];

            colorData =[
                //R, G, B
                0, 1, 0,    //Vertex 1 color
                0, 1, 0,    //Vertex 2 color
                0, 1, 0,    //Vertex 3 color
            ];

            this.draw.drawTriangle(program, vertexData, colorData); */

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