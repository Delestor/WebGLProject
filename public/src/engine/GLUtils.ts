namespace GAME {

    export var gl : WebGLRenderingContext;
    const webGLVersion = 'webgl';

    export class GLUtils {
        /**
         * GL init function
         * @param elementid 
         */
        public static gl_init(elementid?: string) : HTMLCanvasElement {
            let canvas = document.getElementById(elementid) as HTMLCanvasElement;

            if (canvas === undefined){
                canvas = document.createElement('canvas') as HTMLCanvasElement;
                document.body.appendChild(canvas);
            }

            gl = canvas.getContext(webGLVersion);
            if (!gl) {
                throw new Error('The browser is not ready for WebGL!');
            } else {
                console.log('WebGL loaded!');
            }

            return canvas;
        }


        public static initBuffer(vertexData: Iterable<number>) {
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);
    
            return buffer;
        }
    }
}