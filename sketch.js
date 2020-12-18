var ball, database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    console.log('..setup');
    ball.shapeColor = "red";

    database = firebase.database();
    console.log(database);
    database.ref('ball/position').on("value", readPos);

}

function readPos(data){

    var savePos = data.val();
    ball.x = savePos.x;
    ball.y = savePos.y;    

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){

    database.ref('ball/position').set({x:ball.x + x, y:ball.y + y });
    /*ball.x = ball.x + x;
    ball.y = ball.y + y;*/
}
