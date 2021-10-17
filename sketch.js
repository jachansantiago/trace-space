// Global Varibles
var backgroundImage;
var last_point = [];
var plans = [];
var layers = [];
var painting = false;
var selecting = false;
var planSelected = -1;

var squareSize = 1;
var largerSquareSize = 4;

console.log("sketch.js");
console.log(menu);

function createBackgroundImage (){

    img = createImage(displayWidth, displayHeight);
    img.loadPixels();

    var squareLength = squareSize * 10;
    var largerSqrLength = largerSquareSize * 10;
    for (i = 0; i < img.width; i++) {
        for (j = 0; j < img.height; j++) {
            if(i % largerSqrLength  == 0){
                img.set(i, j, color(102, 255, 255));
            }else if(j % largerSqrLength  == 0){
                img.set(i, j, color(102, 255, 255));
            }else if(j %  squareLength == 0){
                img.set(i, j, color(204, 255, 255));
            }else if(i %  squareLength == 0){
                img.set(i, j, color(204, 255, 255));
            }else{
                img.set(i, j, color(255, 255, 255));
            }
        }
    }

    img.updatePixels();
    return img;
}

function addLayer(){
  plans.push(new TraceSpaceLayer(0,0,300,300));
  console.log("ADD LAYER");
}



function writeDraw(){
    if(mouseIsPressed && painting){
        // noStroke();
        // fill('#222222');
        line(last_point[0], last_point[1], mouseX, mouseY);
        last_point[0] = mouseX;
        last_point[1] = mouseY;
    }else if(mouseIsPressed && !painting){
        last_point[0] = mouseX;
        last_point[1] = mouseY;
        painting = true;
    }else if(painting){
        painting = false;
    }
}

// function plotPoints(){
//     for(i = 0; i < points.length - 1; i++){
//         if( points[i + 1 ][0] == -1)
//             continue;
//         if( points[i][0] == -1)
//             continue;
//         line(points[i][0], points[i][1], points[i + 1 ][0], points[i + 1][1] );
//     }
// }


function setup (){
    //backgroundImage = loadImage("img/background.jpg");
    backgroundImage = createBackgroundImage();
    frameRate(1000);

    //createCanvas(720, 400);
    var canvas = createCanvas(displayWidth, displayHeight);
    background(backgroundImage);
    canvas.drop(gotFile);



}

function gotFile(file){
    if(file.type === "image"){
        var img = createImg(file.data);
        img.hide();
        plans.push(new Plan(1000, 600, img));
        plans[0].display();
    }
}

function selectPlan() {

    if(planSelected !== -1){
        console.log("x => " ,mouseX - last_point[0], "y => " , mouseY - last_point[1])
        plans[planSelected].update(mouseX - last_point[0], mouseY - last_point[1]);
        last_point[0] = mouseX;
        last_point[1] = mouseY;

    }


}

function display (){
    for(j = 0; j < plans.length; j++){
        plans[j].display();
    }
}

function mouseDragged(){
    console.log("Mouse is Dragged");
    if(menu.select){
        selectPlan();
    }
}

// function Plotlayer(){
//
//     var lwidth = 250;
//     var lheigth = 250;
//     layer = createImage(lwidth, lheigth);
//     layer.loadPixels();
//     for(l = 0; l < layer.width; l++){
//         for(m = 0; m < layer.height; m++){
//             if(l == 0 || l == layer.width || m == 0 || l == layer.height ){
//                 layer.set(l, m, color(0, 0, 0))
//             }else{
//                 layer.set(l, m, color(255, 255, 181))
//             }
//
//         }
//     }
//     layer.updatePixels();
//     blend(layer, 0,0, lwidth, lheigth, 0,0, lwidth, lheigth,  );
//     line(0,0,100,100);
//     blend(layer, 0,0, lwidth, lheigth, 0,0, lwidth, lheigth,  DARKEST);
//     line(0, 100, 100, 0);
//     //blend(layer, 0,0, lwidth, lheigth, 0,0, lwidth, lheigth,  OVERLAY);
//
//     //blend(layer, 0,0, lwidth, lheigth, 0,0, lwidth, lheigth,  OVERLAY);
//     //image(layer, 17, 17);
//
//     //plans.push(new Plan(layer.width, layer.height, layer));
// }


// function mouseClicked() {
//     layer();
//     alert("NEW LAYER");
// }

function mousePressed(){
    console.log("Mouse is Pressed");

    if(menu.select){
        for(i = plans.length - 1 ; i >= 0 ; i--){
            if(plans[i].isMousePressed(mouseX, mouseY)){
                planSelected = i;

                last_point[0] = mouseX;
                last_point[1] = mouseY;
                plans[i].showMenu();
                break;
            }
        }

    }

    console.log("Plan Selected => ", planSelected);
    return;
}

function mouseReleased(){
    console.log("Mouse is Released");
    if(menu.select){
        planSelected = -1;
    }
}

// function myDiv(){
//    var div = createDiv('<div class="relative-menu"><button>Re-position</button><button>Resize</button></div>');
//    div.position(300, 300);
//
// }

function draw (){

    background(backgroundImage);
    //plotPoints();
    if(menu.draw){
        writeDraw();
    }

    display();
    //myDiv();


}
