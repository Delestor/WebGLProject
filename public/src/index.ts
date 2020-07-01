var game : GAME.App;

window.onload = function () {

    console.log('entramos en index.ts');

    game = new GAME.App();
    game.init();
}

window.onresize = function(){
    game.resize();
}