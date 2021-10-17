 function Layer(width, height){
  this.width = width;
	this.height = height;
  this.img = createImage(width, height);
  this.img.loadPixels();
  for(l = 0; l < this.img.width; l++){
      for(m = 0; m < this.img.height; m++){
          if(l == 0 || l == this.img.width - 1 || m == 0 || m == this.img.height - 1 ){
              this.img.set(l, m, color(0, 0, 0))
          }else{
              this.img.set(l, m, color(255, 255, 181))
          }

      }
  }
  this.img.updatePixels();
	this.x = 0;
	this.y = 0;
	//this.img = img;
	this.isSelected = false;

	this.display = function (){
		blend(this.img, 0, 0, this.width, this.height ,this.x, this.y, this.width, this.height, DARKEST);

	}

  this.menu = createDiv('<div class="relative-menu"><button>Re-position</button><button>Resize</button></div>');
	this.updateMenuPosition = function (){
		 this.menu.position(this.x + this.width - 55, this.y - 55);
	}

	this.updateMenuPosition();
	this.menu.hide();
  this.showMenu = function (){
    this.menu.show();
  }

  this.hideMenu = function (){
    this.menu.hide();
  }

	this.update =  function( xd, yd){
		this.x += xd;
		this.y += yd;
    this.updateMenuPosition();
		console.log("X => ", this.x);
		console.log("Y => ", this.y);
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
