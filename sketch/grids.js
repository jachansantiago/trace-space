class Top_Grid{
		constructor(){
				this._coord_x;
				this._coord_y;
				this._width = 15;
				this._height = 15;
				this.clicked = false;
		}

		show(){

			ellipse(this._coord_x, this._coord_y, this._width, this._height);
		}

		isPressed(){
			return this.clicked;
		}

		isClicked(mouse_x, mouse_y){
				var x = dist(mouse_x, mouse_y, this._coord_x, this._coord_y);
				if(x < 7.5)
					this.clicked = true;
				return this.clicked;
		}

		setClickedFalse(){
			this.clicked = false;
		}


		setCoords(x , y, width, height){
				this._coord_y = y;
				this._coord_x = x + (width/2);
		}

}

class TopLeft_Grid{
		constructor(){
				this._coord_x;
				this._coord_y;
				this._width = 15;
				this._height = 15;
				this.clicked = false;
		}

		show(){

			ellipse(this._coord_x, this._coord_y, this._width, this._height);
		}

		isPressed(){
			return this.clicked;
		}

		isClicked(mouse_x, mouse_y){
				var x = dist(mouse_x, mouse_y, this._coord_x, this._coord_y);
				if(x < 7.5)
					this.clicked = true;
				return this.clicked;
		}

		setClickedFalse(){
			this.clicked = false;
		}


		setCoords(x , y, width, height){
				this._coord_y = y;
				this._coord_x = x;
		}

}

class TopRight_Grid{
		constructor(){
				this._coord_x;
				this._coord_y;
				this._width = 15;
				this._height = 15;
				this.clicked = false;
		}

		show(){

			ellipse(this._coord_x, this._coord_y, this._width, this._height);
		}

		isPressed(){
			return this.clicked;
		}

		isClicked(mouse_x, mouse_y){
				var x = dist(mouse_x, mouse_y, this._coord_x, this._coord_y);
				if(x < 7.5)
					this.clicked = true;
				return this.clicked;
		}

		setClickedFalse(){
			this.clicked = false;
		}


		setCoords(x , y, width, height){
				this._coord_y = y;
				this._coord_x = x + width;
		}

}

class Bottom_Grid{
		constructor(){
				this._coord_x;
				this._coord_y;
				this._width = 15;
				this._height = 15;
				this.clicked = false;
		}

		show(){

			ellipse(this._coord_x, this._coord_y, this._width, this._height);
		}

		isPressed(){
			return this.clicked;
		}

		isClicked(mouse_x, mouse_y){
				var x = dist(mouse_x, mouse_y, this._coord_x, this._coord_y);
				if(x < 7.5)
					this.clicked = true;
				return this.clicked;
		}

		setClickedFalse(){
			this.clicked = false;
		}


		setCoords(x, y , width, height){
				this._coord_y = y + height;
				this._coord_x = x + (width/2);
		}

}

class BottomLeft_Grid{
		constructor(){
				this._coord_x;
				this._coord_y;
				this._width = 15;
				this._height = 15;
				this.clicked = false;
		}

		show(){

			ellipse(this._coord_x, this._coord_y, this._width, this._height);
		}

		isPressed(){
			return this.clicked;
		}

		isClicked(mouse_x, mouse_y){
				var x = dist(mouse_x, mouse_y, this._coord_x, this._coord_y);
				if(x < 7.5)
					this.clicked = true;
				return this.clicked;
		}

		setClickedFalse(){
			this.clicked = false;
		}


		setCoords(x, y , width, height){
				this._coord_y = y + height;
				this._coord_x = x;
		}

}

class BottomRight_Grid{
		constructor(){
				this._coord_x;
				this._coord_y;
				this._width = 15;
				this._height = 15;
				this.clicked = false;
		}

		show(){

			ellipse(this._coord_x, this._coord_y, this._width, this._height);
		}

		isPressed(){
			return this.clicked;
		}

		isClicked(mouse_x, mouse_y){
				var x = dist(mouse_x, mouse_y, this._coord_x, this._coord_y);
				if(x < 7.5)
					this.clicked = true;
				return this.clicked;
		}

		setClickedFalse(){
			this.clicked = false;
		}


		setCoords(x, y , width, height){
				this._coord_y = y + height;
				this._coord_x = x + width;
		}

}


class Left_Grid{
		constructor(){
				this._coord_x;
				this._coord_y;
				this._width = 15;
				this._height = 15;
				this.clicked = false;
		}

		show(){

			ellipse(this._coord_x, this._coord_y, this._width, this._height);
		}

		isPressed(){
			return this.clicked;
		}

		isClicked(mouse_x, mouse_y){
				var x = dist(mouse_x, mouse_y, this._coord_x, this._coord_y);
				if(x < 7.5)
					this.clicked = true;
				return this.clicked;
		}

		setClickedFalse(){
			this.clicked = false;
		}

		setCoords(x, y , width, height){
				this._coord_y = y + (height/2);
				this._coord_x = x;
		}

}


class Right_Grid{
		constructor(){
				this._coord_x;
				this._coord_y;
				this._width = 15;
				this._height = 15;
				this.clicked = false;
		}

		show(){

			ellipse(this._coord_x, this._coord_y, this._width, this._height);
		}

		isPressed(){
			return this.clicked;
		}

		isClicked(mouse_x, mouse_y){
				var x = dist(mouse_x, mouse_y, this._coord_x, this._coord_y);
				if(x < 7.5)
					this.clicked = true;
				return this.clicked;
		}

		setClickedFalse(){
			this.clicked = false;
		}


		setCoords(x, y , width, height){
				this._coord_y = y + (height/2);
				this._coord_x = x + width;
		}

}


class Grids {
		constructor(){
				this.TraceSpaceObject;
				this._coord_x;
				this._coord_y;
				this._width;
				this._height;
				this.TGrid = new Top_Grid();
				this.TLGrid = new TopLeft_Grid();
				this.TRGrid = new TopRight_Grid();
				this.BGrid = new Bottom_Grid();
				this.BLGrid = new BottomLeft_Grid();
				this.BRGrid = new BottomRight_Grid();
				this.RGrid = new Right_Grid();
				this.LGrid = new Left_Grid();
		}

		showGrids(){

			this.TGrid.setCoords(this._coord_x, this._coord_y, this._width, this._height);
			this.TGrid.show();
			this.TLGrid.setCoords(this._coord_x, this._coord_y, this._width, this._height);
			this.TLGrid.show();
			this.TRGrid.setCoords(this._coord_x, this._coord_y, this._width, this._height);
			this.TRGrid.show();
			this.BGrid.setCoords(this._coord_x, this._coord_y, this._width, this._height);
			this.BGrid.show();
			this.BLGrid.setCoords(this._coord_x, this._coord_y, this._width, this._height);
			this.BLGrid.show();
			this.BRGrid.setCoords(this._coord_x, this._coord_y, this._width, this._height);
			this.BRGrid.show();
			this.LGrid.setCoords(this._coord_x, this._coord_y, this._width, this._height);
			this.LGrid.show();
			this.RGrid.setCoords(this._coord_x, this._coord_y, this._width, this._height);
			this.RGrid.show();
		}

		isClicked(mouse_x, mouse_y){
				this.TGrid.isClicked(mouse_x, mouse_y);
				this.TLGrid.isClicked(mouse_x, mouse_y);
				this.TRGrid.isClicked(mouse_x, mouse_y);
				this.BGrid.isClicked(mouse_x, mouse_y);
				this.BLGrid.isClicked(mouse_x, mouse_y);
				this.BRGrid.isClicked(mouse_x, mouse_y);
				this.LGrid.isClicked(mouse_x, mouse_y);
				this.RGrid.isClicked(mouse_x, mouse_y);
		}

		dragGrid(delta_x, delta_y){

				if(this.TGrid.isPressed()){
						console.log("Top Grid Is Pressed");
						this.TraceSpaceObject.update(0, delta_y);
						this.TraceSpaceObject.updateDim(0, - delta_y);
				}else if(this.TLGrid.isPressed()){
						console.log("Top Left Grid Is Pressed");
						this.TraceSpaceObject.update(delta_x, delta_y);
						this.TraceSpaceObject.updateDim(- delta_x, - delta_y);
				}else if(this.TRGrid.isPressed()){
						console.log("Top Right Grid Is Pressed");
						this.TraceSpaceObject.update(0, delta_y);
						this.TraceSpaceObject.updateDim(delta_x, - delta_y);
				}else if(this.BGrid.isPressed()){
						console.log("Bottom Grid Is Pressed");
						this.TraceSpaceObject.updateDim(0,delta_y);
				}else if(this.BLGrid.isPressed()){
						console.log("Bottom Left Grid Is Pressed");
						this.TraceSpaceObject.update(delta_x, 0);
						this.TraceSpaceObject.updateDim(- delta_x, delta_y);

				}else if(this.BRGrid.isPressed()){
						console.log("Bottom Right Grid Is Pressed");
						this.TraceSpaceObject.updateDim(delta_x,delta_y);
				}else if(this.LGrid.isPressed()){
						console.log("Left Grid Is Pressed");
						this.TraceSpaceObject.update(delta_x, 0);
						this.TraceSpaceObject.updateDim(- delta_x, 0);
				}else if(this.RGrid.isPressed()){
						console.log("Right Grid Is Pressed");
						this.TraceSpaceObject.updateDim(delta_x,0);
				}
		}

		releaseGrid(){
				this.TGrid.setClickedFalse();
				this.TLGrid.setClickedFalse();
				this.TRGrid.setClickedFalse();
				this.BGrid.setClickedFalse();
				this.BLGrid.setClickedFalse();
				this.BRGrid.setClickedFalse();
				this.LGrid.setClickedFalse();
				this.RGrid.setClickedFalse();
		}


		setObject(TraceSpaceObject){
			this.TraceSpaceObject = TraceSpaceObject;
			var coords = TraceSpaceObject.getCoords();
			var dim = TraceSpaceObject.getDimensions();
			this._coord_x = coords.X;
			this._coord_y = coords.Y;
			this._width = dim.width;
			this._height = dim.height;

		}

}
