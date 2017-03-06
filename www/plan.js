function Plan(width, height, img){
	this.width = width;
	this.height = height;
	this.x = 0;
	this.y = 0;
	this.img = img;
	this.isSelected = false;
	this.menu = createDiv('<div class="relative-menu"><button>Re-position</button><button>Resize</button></div>');
	this.updateMenuPosition = function (){
		 this.menu.position(this.x + this.width - 55, this.y - 55);
	}

	this.updateMenuPosition();
	this.menu.hide();

	this.display = function (){
		image(this.img, this.x, this.y, this.width, this.height);
	}

	this.update =  function( xd, yd){
		this.x += xd;
		this.y += yd;
		this.updateMenuPosition();
		console.log("X => ", this.x);
		console.log("Y => ", this.y);
	}



	this.showMenu = function (){
		this.menu.show();
	}

	this.hideMenu = function (){
		this.menu.hide();
	}

	this.IsMousePressed = function(posX, posY){

		var widthRange = posX > this.x && posX < this.x + this.width;
		console.log("W Range ", widthRange);
		var heightRange = posY > this.y && posY < this.y + this.height;
		console.log("W Range ", heightRange);
		if(widthRange && heightRange){
			this.showMenu();
			return true;
		}else{
			this.hideMenu();
			return false;
		}
	}


}
