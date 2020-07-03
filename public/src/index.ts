var game : GAME.App;

window.onload = function () {

    console.log('entramos en index.ts');

    game = new GAME.App();
    game.init();
}

window.onresize = function(){
    game.resize();
}

window.addEventListener("click", function(event) {
    game.getCursorPosition(event);
});