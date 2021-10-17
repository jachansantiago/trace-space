// Global Varibles
var backgroundImage = [];
var backgroundOption = 1;
var last_point = [];
var plans = [];
var layers = [];
var painting = false;
var selecting = false;
var planSelected = -1;
var planOnScope = -1;
var squareSize = 1;
var largerSquareSize = 4;
var delete_layer = -1;
var delete_plan = -1;
var top_layer = -1;
var down_layer = -1;
var G_image = [];

var canvas;
var CanvasWidth;
var CanvasHeight;

var resizing = false;

var Grid = new Grids();


function setGridBackground(){
	backgroundOption = 1;
}

function setNoGridBackground(){
	backgroundOption = 0;
}

function extendTopWorkspace(){
		var extend_space = 300;
		CanvasHeight += extend_space;
		backgroundImage[0] = createBackgroundImageNoGrids();
		backgroundImage[1] = createBackgroundImageWithGrids();
		resizeCanvas(CanvasWidth, CanvasHeight);
		for(var i = 0; i < plans.length; i++){
				plans[i].update(0 , extend_space);
		}


}

function extendBottomWorkspace(){
		var extend_space = 300;
		CanvasHeight += extend_space;
		backgroundImage[0] = createBackgroundImageNoGrids();
		backgroundImage[1] = createBackgroundImageWithGrids();
		resizeCanvas(CanvasWidth, CanvasHeight);

}

function extendLeftWorkspace(){
		var extend_space = 500;
		CanvasWidth += extend_space;
		backgroundImage[0] = createBackgroundImageNoGrids();
		backgroundImage[1] = createBackgroundImageWithGrids();
		resizeCanvas(CanvasWidth, CanvasHeight);
		for(var i = 0; i <  plans.length; i++){
				plans[i].update(extend_space, 0);
		}


}

function extendRightWorkspace(){
		var extend_space = 500;
		CanvasWidth += extend_space;
		backgroundImage[0] = createBackgroundImageNoGrids();
		backgroundImage[1] = createBackgroundImageWithGrids();
		resizeCanvas(CanvasWidth, CanvasHeight);

}


console.log("Loaded sketch.js");
console.log(menu);

function createBackgroundImageWithGrids (){

    var img = createImage(CanvasWidth, CanvasHeight);
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

function createBackgroundImageNoGrids (){

    var img = createImage(CanvasWidth, CanvasHeight);
    img.loadPixels();

    var squareLength = squareSize * 10;
    var largerSqrLength = largerSquareSize * 10;
    for (i = 0; i < img.width; i++) {
        for (j = 0; j < img.height; j++) {
                img.set(i, j, color(255, 255, 255));
        }
    }

    img.updatePixels();
    return img;
}

function addLayer(){
	var newId = plans.length;
  plans.push(new TraceSpaceLayer(300,300,300,300, G_image, newId));
	// firebase.database().ref('projects/'+ projectId +'/layers/' + newId).set(plans[newId].export());
  console.log("ADD LAYER");
}
//
// function exportLayers() {
// 	var exportPlan = [];
//
// 	for(var i = 0; i < plans.length; i++)
// 	{
// 		exportPlan.push(plans[i].export());
// 	}
//
// 	firebase.database().ref('Project1/layers').push(exportPlan);
// 	console.log("Plans has been Exported");
// }



function setup (){
		CanvasWidth = displayWidth;
		CanvasHeight = displayHeight;
    //backgroundImage = loadImage("img/background.jpg");
    backgroundImage[0] = createBackgroundImageNoGrids();
		backgroundImage[1] = createBackgroundImageWithGrids();
    frameRate(1000);

    //createCanvas(720, 400);
    canvas = createCanvas(CanvasWidth, CanvasHeight);
    background(backgroundImage[backgroundOption]);
    canvas.drop(gotFile);
		G_image.push(createImage(CanvasWidth, CanvasHeight));
		G_image.push(createImage(CanvasWidth, CanvasHeight));
		G_image[0].loadPixels();
		G_image[1].loadPixels();
		for(var l = 0; l < G_image[0].width; l++){
				for(var m = 0; m < G_image[0].height; m++){
						//if(l == 0 || l == _width - 1 || m == 0 || m == _height - 1 ){
							//	_image.set(l, m, color(0, 0, 0))
						//}else{
								G_image[0].set(l, m, color(255, 255, 181))
								G_image[1].set(l, m, color(169,169,169))

						//}

				}
		}
		G_image[0].updatePixels();
		G_image[1].updatePixels();

}

function gotFile(file){
    if(file.type === "image"){
        var img = createImg(file.data);
        img.hide();
        var newId = plans.length;
		// uploadPhoto(newId, file.file, plans, img);
		console.log(file.file);
        plans.push(new TraceSpacePlan(300, 300, 100, 100, img, newId));
				// firebase.database().ref('project1/layers/' + newId).set(plans[newId].export());
        plans[0].display();
    }
}

function moveObject() {

    if(planOnScope !== -1 && plans[planOnScope].getMenuOption() === "move"){
        console.log("x => " ,mouseX - last_point[0], "y => " , mouseY - last_point[1])
        plans[planOnScope].update(mouseX - last_point[0], mouseY - last_point[1]);
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
        moveObject();
    }
		if(planOnScope !== -1){
			if(menu.select && plans[planOnScope].getMenuOption() === "resize"){
				Grid.dragGrid(mouseX - last_point[0], mouseY - last_point[1]);
				last_point[0] = mouseX;
        last_point[1] = mouseY;
			}

			if(plans[planOnScope].getMenuOption() == 'draw'){
					if(plans[planOnScope].isMousePressed(last_point[0], last_point[1]) && plans[planOnScope].isMousePressed(mouseX, mouseY)){
							plans[planOnScope].addLines(last_point[0], last_point[1]);
							plans[planOnScope].addLines(mouseX, mouseY);
							last_point[0] = mouseX;
			        last_point[1] = mouseY;
					}
			}
		}


}


function mousePressed(){
    console.log("Mouse is Pressed");



    if(menu.select && (planOnScope === -1 || !plans[planOnScope].menuIsShow())){
        for(i = plans.length - 1 ; i >= 0 ; i--){
            if(plans[i].isMousePressed(mouseX, mouseY)){
                planSelected = i;
								planOnScope = i;

                plans[i].showMenu();
                break;
            }
        }
    }

		if(menu.select && planOnScope != -1){



				if(plans[planOnScope].getMenuOption() == 'resize'){
						Grid.isClicked(mouseX, mouseY);

				}else if(plans[planOnScope].getMenuOption() == 'draw'){
						if(plans[planOnScope].isMousePressed(last_point[0], last_point[1]) && plans[planOnScope].isMousePressed(mouseX, mouseY)){
								plans[planOnScope].addLines(last_point[0], last_point[1]);
								plans[planOnScope].addLines(mouseX, mouseY);
						}
				}else if(plans[planOnScope].getMenuOption() === 'delete'){
					delete_plan = planOnScope;
					console.log(planOnScope, " Ready to delete!");
					planOnScope = -1;
					planSelected = -1;
					console.log("id -> ", delete_plan);
					plans[delete_plan].hideMenu();
					for( var i = delete_plan; i < plans.length - 1 ; i++ ){
						swap_layers(plans[i], plans[i + 1]);
					}

					//plans.pop();
					plans.pop();
					// firebase.database().ref('projects/'+ projectId +'/layers/' + delete_plan).set(null);
					delete_plan = -1;


					return;
				}else if(plans[planOnScope].getMenuOption() === 'top'){
					top_layer = planOnScope;
					console.log(planOnScope, " go on top Level");
				}else if(plans[planOnScope].getMenuOption() === 'down'){
					down_layer = planOnScope;
					console.log(planOnScope, " go on Down Level");
				}else if(plans[planOnScope].getMenuOption() === 'undoDraw'){
					plans[planOnScope].EraseLastLine();
					console,log("Erase Last line");
				}
		}

		last_point[0] = mouseX;
		last_point[1] = mouseY;
    console.log("Plan Selected => ", planSelected);
    return;
}

function mouseReleased(){
    console.log("Mouse is Released");
    if(menu.select){
        planSelected = -1;
				Grid.releaseGrid();

    }

		if(planOnScope != -1){
				if(plans[planOnScope].getMenuOption() == 'draw'){
						console.log("STOP PAINTING!!");
						plans[planOnScope].addLines(-1, -1);
						// plans[planOnScope].updateDB();
						last_point[0] = -1;
						last_point[1] = -1;
				}
		}
}


function draw (){

    background(backgroundImage[backgroundOption]);

    display();
		if(planOnScope !== -1){
				if(plans[planOnScope].getMenuOption() === "resize"){
	       	Grid.setObject(plans[planOnScope]);
					Grid.showGrids();
			}
		}



	if(top_layer != -1 && top_layer != plans.length - 1){
		planOnScope = top_layer + 1;
		swap_layers(plans[top_layer], plans[planOnScope]);
		plans[top_layer].hideMenu();
		//plans[planOnScope].setMenuOption('none');
		plans[planOnScope].showMenu();
		top_layer = -1;
		console.log("Layer Go to Up level");
	}

	if(down_layer != -1 && down_layer != 0){
		plans[down_layer].hideMenu();
		planOnScope = down_layer - 1;
		swap_layers(plans[down_layer], plans[planOnScope]);
		//plans[planOnScope].setMenuOption('none');
		plans[planOnScope].showMenu();
		down_layer = -1;
		console.log("Layer Go to Down level");
	}

}


function swap_layers(layer_1, layer_2){
	var layer_1_id = layer_1.getId();
	var layer_2_id  = layer_2.getId();
	var temp = layer_1.export();
	layer_1.import(layer_2.export());
	layer_1.setId(layer_1_id);
	layer_2.import(temp);
	layer_2.setId(layer_2_id);
	// layer_1.updateDB();
	// layer_2.updateDB();

}

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

testProjects = [{ "id": 0, "name": "Project 1", "image": "/trace-space/imgs/house_1.jpeg"}]
query = parseQuery(window.location.search)

// if query.
