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

    }

}