namespace GAME{

    export class FragmentShader{
        public static getShader():string{
            return `
            precision mediump float;

            varying vec3 vColor;
            void main() {
                //gl_FragColor = vec4(1, 0, 0, 1);
                gl_FragColor = vec4(vColor, 1);
            }
            `;
        }
    }
    
}

