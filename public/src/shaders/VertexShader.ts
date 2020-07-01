namespace GAME {

    export class VertexShader {
        public static getShader(): string {
            return `
            precision mediump float;

            attribute vec3 position;
            attribute vec3 color;

            varying vec3 vColor;

            void main() {
                //que valor tiene una variable no inicializada?
                vColor = color;
                gl_Position = vec4(position, 1);
            }
            `;
        }
    }

}

