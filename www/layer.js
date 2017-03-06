
class TraceSpaceLayer{

		constructor(init_x, init_y, init_width, init_heiht){
			/** These are private attributes **/
			var _coord_x = init_x;
			var _coord_y = init_y;
			var _width = init_width;
			var _height = init_heiht;
			var _menu = new MenuObject(_coord_x, _width, _coord_y, _height);
			var _image;
			var _color_line = color('black');
			// This set of code lines create layer styling
			this.fillLayer = function () {
				_image = createImage(_width, _height);
				_image.loadPixels();
				for(var l = 0; l < _width; l++){
						for(var m = 0; m < _height; m++){
								if(l == 0 || l == _width - 1 || m == 0 || m == _height - 1 ){
										_image.set(l, m, color(0, 0, 0))
								}else{
										_image.set(l, m, color(255, 255, 181))
								}

						}
				}
				_image.updatePixels();
				return;
			}



			this.display = function () {
				blend(_image, 0, 0, _width, _height , _coord_x, _coord_y, _width, _height, DARKEST);
			}


			/** These are public functions to access private attributes **/

			this.getCoords = function () {

				return {X:_coord_x, Y: _coord_y};
			}

			this.getDimensions = function (){

				return {width: _width, height: _height};
			}

			this.setCoords = function (new_x, new_y){
				if(new_x < 0 || new_y < 0){
					console.info("The coords X or Y with negative values is not supported in this TraceSpaceObject");
					return false;
				}
				_coord_x = new_x;
				_coord_y = new_y;
				return true;
			}

			this.setDimensions = function(new_width, new_height){
				if(new_width < 0 || new_height < 0){
					console.info("The dimmensions can be negative");
					return false;
				}
				_width = new_width;
				_height = new_height;
				return true;

			}

			this.setMenuOption = function (new_option){
					return _menu.setOption(new_option);
			}

			this.setMenuCoords = function(new_x, new_y){

					return _menu.updatePosition(new_x, new_y);
			}

			this.getMenuOption = function () {
					return _menu.getOption();
			}

			this.showMenu = function () {
					return _menu.showMenu();
			}

			this.hideMenu = function () {
					return _menu.hideMenu();
			}

			this.update = function(delta_x, delta_y) {
				this.setMenuCoords(_coord_x + delta_x, _coord_y + delta_y);
				this.setCoords(_coord_x + delta_x, _coord_y + delta_y);
			}

			this.fillLayer();
			this.display();
		}

		isMousePressed (mouse_x, mouse_y){

			var _coords = this.getCoords();
			var _dim = this.getDimensions();

			var widthRange = mouse_x >= _coords.X && mouse_x <= _coords.X + _dim.width;
			var heightRange = (mouse_y >= _coords.Y) && (mouse_y <= _coords.Y + _dim.height);

			if(widthRange && heightRange)
				return true;
			else
				return false;
		}



}
