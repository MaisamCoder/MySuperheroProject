var canvas = new fabric.Canvas('myCanvas');

var block_img_width = 30;
var block_img_height = 30;

player_x = 10;
player_y = 10;

var playerobject = "";
var block_img_object = "";

function playerupdate()
{ fabric.Image.fromURL("player.png", function(Img){ 
    playerobject = Img; 
    playerobject.scaleToWidth(150); 
    playerobject.scaleToHeight(140); 
    playerobject.set({ top: player_y, left: player_x });
     canvas.add(playerobject); 
    }
    ); 
}

function new_image(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top: player_y, 
            left: player_x
        });
        canvas.add(block_img_object);
    });

}


window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    if(e.shiftKey == true && keypressed == '80'){
        console.log("p and shift pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if(e.shiftKey == true && keypressed == '77'){
        console.log("m and shift pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
  
}

if(keyPressed = '70'){

    new_image('ironman_face.png');
    console.log("f");
}

if(keyPressed = '66'){

    new_image('spiderman_body.png');
    console.log("b");
}

if(keyPressed = '76'){

    new_image('hulk_legs.png');
    console.log("l");
}

if(keyPressed = '82'){

    new_image('thor_right_hand.png');
    console.log("r");
}

if(keyPressed = '72'){

    new_image('captain_america_left_hand.png');
    console.log("h");
}

if(keyPressed == '38')
{
    up();
    console.log("up");
}

if(keyPressed == '40')
{
    down();
    console.log("down");
}

if(keyPressed == '37')
{
    left();
    console.log("left");
}

if(keyPressed == '39')
{
    right();
    console.log("right");
}


function up(){
    if(player_y >=0){
        player_y = player_y - block_img_height;
        console.log("block_img_height ="+ block_img_height);
        console.log("When up arrow key is pressed, X="+ player_x+" Y="+ player_y);
        canvas.remove(playerobject);
        playerupdate();
    }
}
function down(){
    if(player_y <=500){
        player_y = player_y + block_img_height;
        console.log("block_img_height ="+ block_img_height);
        console.log("When up arrow key is pressed, X="+ player_x+" Y="+ player_y);
        canvas.remove(playerobject);
        playerupdate();
    }
}
function right(){
    if(player_x <=900){
        player_x = player_x + block_img_width;
        console.log("block_img_width ="+ block_img_width);
        console.log("When up arrow key is pressed, X="+ player_x+" Y="+ player_y);
        canvas.remove(playerobject);
        playerupdate();
    }
}
function left(){
    if(player_x >=0){
        player_x = player_x - block_img_width;
        console.log("block_img_width ="+ block_img_width);
        console.log("When up arrow key is pressed, X="+ player_x+" Y="+ player_y);
        canvas.remove(playerobject);
        playerupdate();
    }
}