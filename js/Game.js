class Game{


constructor(){

}

    getState(){
        var gamestateref = database.ref("GAMESTATE")
        gamestateref.on("value", function(data){
            gamestate = data.val()
        }  )
    }
    update(state)
    {
        database.ref("/").update({
            GAMESTATE: state
        })

    }
    async start(){
        if(gamestate === 0 ){
            player = new Player()
            var playercountref = await database.ref('PLAYERCOUNT').once("value");
            if(playercountref.exists()){
                playercount = playercountref.val();
                player.getCount()
            }
            
            form = new Form()
            form.display()
        }

    }

    play(){
        form.hide()
        textSize(30)
        text("Game Start", 120, 100)
        Player.getPlayerInfo()
        
        if(allPlayers !== undefined){
          var displayPosition = 130
          for(var plr in allPlayers){
            if(plr === "PLAYER"+player.index){
                fill("red")
            }
            else{
                fill("black")
            }
            displayPosition = displayPosition +20
            textSize(15)
            text(allPlayers[plr].name+":"+allPlayers[plr].distance, 120, displayPosition)
          }

        }
    }

}