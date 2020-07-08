namespace GAME{

    export class DrawUtils{

        private static defaultColorData=[
            //R, G, B
            0, 1, 0,    //Vertex 1 color
            0, 1, 0,    //Vertex 2 color
            0, 1, 0,    //Vertex 3 color
        ];

        private static randomColorData=[
            Math.random()%1,Math.random()%1,Math.random()%1,
            Math.random()%1,Math.random()%1,Math.random()%1,
            Math.random()%1,Math.random()%1,Math.random()%1,
        ];

        public static drawTriangle(program : WebGLProgram, vertexData: Iterable<number>, colorData: Iterable<number>){

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

        public static drawLine(program : WebGLProgram, vertexData: Iterable<number>, colorData: Iterable<number>){
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
            gl.drawArrays(gl.LINES, 0, 2);
        }

        /**
         * Draw lines with a default color.
         * @param program 
         * @param vertexData 
         */
        public static drawLineDefaultColor(program : WebGLProgram, vertexData: Iterable<number>){
            this.drawLine(program, vertexData, this.defaultColorData);
        }

        public static drawLineRandomColor(program : WebGLProgram, vertexData: Iterable<number>){
            this.drawLine(program, vertexData, Utils.randomFloatArray(3,3));
        }

        /**
         * Draws the X and Y lines coresponding to the x = 0 and y = 0
         */
        public static drawXYLines(program : WebGLProgram){
            var colorLines = this.defaultColorData;

            this.drawLine(program, 
                [0, 1, 0, 
                0, -1, 0]
            , colorLines);

            this.drawLine(program, [
                1, 0, 0, 
                -1, 0, 0
            ], colorLines);
        }

    }

}