namespace GAME{

    export class Utils{

        public static randomFloatArray(rows : number, columns : number) : Array<number>{
            let array = new Array(rows*columns);

            for(let i = 0; i < array.length; i++){
                array[i] = Math.random()%1;
            }

            return array;
        }
    }
}