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
    game.getCursorPosition(event)
    /* var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    alert(coords); */
});