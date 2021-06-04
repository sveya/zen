class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  play(){
    //form.hide();
    Player.getPlayerInfo();
    

    if(allPlayers!==undefined){
      var displayposition = 130;
      for(var plr in allPlayers){
        textSize(20);
        text(allPlayers[plr].name + ": "+allPlayers[plr].distance,100,displayposition);

      }
    }
    if(keyDown("UP_ARROW") && player.index!== null){
      player.distance+=50;
      player.update();
    }
   
}
}