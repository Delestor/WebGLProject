namespace GAME {

    export class App {

        private canvas: HTMLCanvasElement;
        public basicShader: Shader;
        private linePositionArray : any;
        private countPoints : number;

        constructor() {
            this.canvas = GLUtils.gl_init('webgl_canvas');
            this.resize();
            
            this.countPoints = 0;
        }

        async init() {
            if (!gl) {
                throw new Error('Your browser is not ready for WebGL');
            } else {
                console.log('entramos en init app.ts');
            }

            gl.clearColor( 0, 0, 0, 1 );

            //const program = await Shader.loadShaderProgram(VertexShader.getShader(),FragmentShader.getShader());
            this.basicShader = new Shader("basicShader", VertexShader.getShader(),FragmentShader.getShader());
            
            this.drawScene();
        }

        /**
         * Resizes the canvas to fit the window.
         */
        public resize(){
            if(this.canvas !== undefined){
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;

                gl.viewport(0,0,this.canvas.width, this.canvas.height);
            }
        }

        public getCursorPosition(event:any){
            if(this.canvas !== undefined){
                //const rect = this.canvas.getBoundingClientRect()
                var x : number = (event.clientX / this.canvas.width) * 2 - 1;
                var y : number = (event.clientY / this.canvas.height) * 2 - 1;

                y *= -1;             

                this.drawScene();

                if(this.countPoints == 0){
                    this.linePositionArray = [x, y, 0.0];
                    this.countPoints += 1;
                }else if(this.countPoints == 1){

                    this.linePositionArray = [this.linePositionArray[0],this.linePositionArray[1], this.linePositionArray[2], x, y, 0.0];
                    var line = new LineImpl(this.basicShader.program, this.linePositionArray);
                    line.draw();
                    //DrawUtils.drawLineDefaultColor(this.basicShader.program, this.linePositionArray);
                    //DrawUtils.drawLineRandomColor(this.basicShader.program, this.linePositionArray);
                    this.countPoints = 0;
                    console.log('Line drawn, positionArray ='+this.linePositionArray);
                    
                }
            }
        }

        private drawScene(){

            const program = this.basicShader.program;

            var vertexData = [
                .5, GLUtils.convertPercentageToNormalized(50), 0,
                .75, 1, 0,
                1, .5, 0,
            ];

            var colorData =[
                //R, G, B
                1, 0, 0,    //Vertex 1 color
                0, 1, 0,    //Vertex 2 color
                0, 0, 1,    //Vertex 3 color
            ];

            new TriangleImpl(program, vertexData, colorData).draw();

            vertexData = [
                -.75, GLUtils.convertPercentageToNormalized(-50), 0,
                -1, -1, 0,
                -.5, -1, 0,
            ];

            colorData =[
                //R, G, B
                0, 1, 0,    //Vertex 1 color
                0, 1, 0,    //Vertex 2 color
                0, 1, 0,    //Vertex 3 color
            ];

            var triangle1 = new TriangleImpl(program, vertexData, colorData);
            triangle1.draw();

            new DrawLineImpl(program).drawOnlyCenter();
        }

    }
}