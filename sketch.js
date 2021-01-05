var database;
var canvas
var gamestate = 0
var playercount 
var player, form, game
var allPlayers
function setup(){
    database = firebase.database()
    canvas = createCanvas(500,500);
   game = new Game()
   game.getState()
   game.start()
}

function draw(){
   if(playercount===4){
       game.update(1)
   }
   if(gamestate===1){
    clear()
    game.play()
   }
}

