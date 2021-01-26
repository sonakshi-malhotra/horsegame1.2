class Game{
    constructor(){}
    readGameState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    updateGameState(state){
        database.ref('/').update({gameState:state})
    } 
    startGame(){
        if(gameState===0){
            form = new Form()
            form.display()
            player = new Player()
            player.getCount()
            
        }
        horse1=createSprite(100,200)
        horse1.addAnimation("horse1",h1)
        horse2=createSprite(300,200)
        horse2.addAnimation("horse2",h2)
        horse1.scale=0.25
        horse2.scale=0.25
        horses=[horse1,horse2]
        
    }
    
    play(){
        form.hide()
       Player.getPlayerInfo()
    
       player.getPlayersAtEnd()
       
       if(allPlayers!==undefined){
    
           background("white")
           image (track,displayWidth-displayWidth/2.5,0,displayWidth*5,displayHeight)
           text(mouseX + ' , '+ mouseY, mouseX, mouseY)
           var index=0
           var x,y=167
           for (var plr in allPlayers) {
            index=index+1
              /* x=x+200 
               y=displayHeight-allPlayers[plr].distance*/
               y=y+200
               x=displayWidth-allPlayers[plr].distance
              horses[index-1].x=x
               horses[index-1].y=y
               if(index===player.index){
                   
                   fill("red")
                   ellipse(x,y,50,50)
                //camera .position.x=displayWidth/2
                //camera.position.y=horses[index -1 ].y
                camera.position.x=horses[index-1].x
                camera.position.y= displayHeight/2
               }
               
                   
              
           }
       }
       if(keyDown(RIGHT_ARROW)&&player.index!==null){
        player.distance-=10
        player.update()
    }
    if (player.distance <-7000)
    {gameState=2
        background("yellow")
    player.rank=player.rank+1
    Player.updateplayersAtEnd(player.rank)
   // textSize(50)
    //text ("your rank is "+player.rank,camera.position.x+300,displayHeight/2)
    swal({ title: `Awesome!${"\n"}Rank${"\n"}${player.rank}`,
     text: "You reached the finish line successfully", icon: "success", confirmButtonText: "Ok", });
    }
    drawSprites()
    }
    end(){
        console.log("rank:"+player.rank)
       
    }
    
    }