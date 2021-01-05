class Player{

constructor(){
    this.index =null
    this.distance= 0
    this.name=null
}


getCount(){
    var playercountref = database.ref("PLAYERCOUNT")
    playercountref.on("value", (data)=>{
        playercount = data.val()
    }  )
}
updateCount(count)
{
    database.ref('/').update({
        PLAYERCOUNT: count
    })

}

update()
{
    var playerIndex = 'PLAYER/PLAYER' + this.index
    database.ref(playerIndex).set({
    NAME: this.name,
    DISTANCE: this.distance
    })

}

static getPlayerInfo(){
    var playerInfoRef = database.ref('PLAYER')
    playerInfoRef.on("value",(data)=> {
        allPlayers = data.val()
    } )
}
}