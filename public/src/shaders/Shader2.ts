namespace GAME {

    export class Shader2 {
        public static async loadShaderProgram(vertexURL: string, fragmentURL: string) {

            // Fetch shader source code from given URLs

            const vertexSource = vertexURL;

            const fragmentSource = fragmentURL;

            // Util for loading individual shaders

            function loadShader(type: number, source: string) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);

                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    if (type === gl.VERTEX_SHADER) {
                        throw new Error(`(WebGL vertex shader) ${gl.getShaderInfoLog(shader)}`);
                    } else if (type === gl.FRAGMENT_SHADER) {
                        throw new Error(`(WebGL fragment shader) ${gl.getShaderInfoLog(shader)}`);
                    }
                }

                return shader;
            }

            /* console.log('vertex Shader: ', vertexSource);
            console.log('fragment Shader: ', fragmentSource); */



            const vertexShader = loadShader(gl.VERTEX_SHADER, vertexSource);
            const fragmentShader = loadShader(gl.FRAGMENT_SHADER, fragmentSource);

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);

            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                throw new Error(`(WebGL shader program) ${gl.getProgramInfoLog(vertexShader)}`)
            }

            return program;
        }
    }
}