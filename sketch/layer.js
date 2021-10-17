

class TraceSpaceLayer{

		constructor(init_x, init_y, init_width, init_height, init_img, init_id){
			/** These are private attributes **/
			var _id = init_id;
			var _coord_x = init_x;
			var _coord_y = init_y;
			var _width = init_width;
			var _height = init_height;
			var _menu = new LayerMenuObject(_coord_x, _width, _coord_y, _height);
			var _image = init_img;
			var _color_line = color('black');
			var _lines = [];

			// This set of code lines create layer styling
			// this.fillLayer = function () {
			// 	_image = createImage(displayWidth, displayHeight);
			// 	_image.loadPixels();
			// 	for(var l = 0; l < _image.width; l++){
			// 			for(var m = 0; m < _image.height; m++){
			// 					//if(l == 0 || l == _width - 1 || m == 0 || m == _height - 1 ){
			// 						//	_image.set(l, m, color(0, 0, 0))
			// 					//}else{
			// 							_image.set(l, m, color(255, 255, 181))
			// 					//}
			//
			// 			}
			// 	}
			// 	_image.updatePixels();
			// 	return;
			// }


			strokeWeight(2);
			this.display = function () {
				var _BLEND_TYPE = SCREEN;
				blend(_image[1], 0, 0, _width, _height , _coord_x, _coord_y, _width, _height, _BLEND_TYPE);
				blend(_image[0], 0, 0, _width, _height , _coord_x, _coord_y, _width, _height, MULTIPLY);



				for(var i = 0; i < _lines.length - 1; i++){
						if( _lines[i + 1 ][0] < 0)
							continue;
						if( _lines[i][0] < 0)
							continue;

						line( _coord_x + _lines[i][0], _coord_y + _lines[i][1], _coord_x + _lines[i + 1][0],  _coord_y + _lines[i + 1][1]);
				}
			}

			this.getId = function(){
				return _id;
			}

			this.setId = function (new_id){
				_id = new_id;
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
				//this.fillLayer();
				return true;

			}

			this.setMenuOption = function (new_option){
					return _menu.setOption(new_option);
			}

			this.setMenuCoords = function(new_x, new_y){

					return _menu.updatePosition(new_x, new_y, _width, _height);
			}

			this.getMenuOption = function () {
					return _menu.getOption();
			}

			this.showMenu = function () {
					return _menu.showMenu();
			}

			this.menuIsShow = function (){
				return _menu.isShow();
			}

			this.hideMenu = function () {
					return _menu.hideMenu();
			}

			this.update = function(delta_x, delta_y) {
				this.setMenuCoords(_coord_x + delta_x, _coord_y + delta_y);
				this.setCoords(_coord_x + delta_x, _coord_y + delta_y);
				// this.updateDB();
			}

			this.resizeLines = function(new_width, new_height){
				var x_change_ratio = new_width/_width;
				var y_change_ratio = new_height/ _height;
				for(var i = 0; i < _lines.length; i++){
					_lines[i][0] *= x_change_ratio;
					_lines[i][1] *= y_change_ratio;
				}
			}

			this.updateDim = function(delta_x, delta_y) {
				this.resizeLines(_width + delta_x, _height + delta_y);
				this.setDimensions(_width + delta_x, _height + delta_y);
				// this.updateDB();
			}

			this.addLines = function(mouse_x, mouse_y) {
						_lines.push([mouse_x - _coord_x, mouse_y - _coord_y]);
						//this.updateDB();
			}

			this.export = function(){
				return {
					"_type" : "layer",
					"_coord_x" : _coord_x,
					"_coord_y" : _coord_y,
					"_width" : _width,
					"_height" : _height,
					"_lines" : _lines
				}
			}

			// this.updateDB = function(){
			// 	firebase.database().ref('projects/' + projectId + '/layers/' + _id).set(this.export());
			// }

			this.import = function(DBObject){
					_coord_x = DBObject._coord_x;
					_coord_y = DBObject._coord_y;
					_width = DBObject._width;
					_height= DBObject._height;
					if(DBObject._lines){
						_lines = DBObject._lines;
					}
					this.setMenuCoords(_coord_x , _coord_y);
			}

			this.EraseLastLine = function(){
				var points = _lines.length;
				var first_white_space = false;
				while(points--){
					console.log(_lines[points]);
					if(_lines[points][0] < 0 && first_white_space){
						_lines.pop();
						console.log('BREAK');
						break;
					}else if(_lines[points][0] < 0 && !first_white_space){
						first_white_space = true;
						console.log('First BREAK')
					}else{
						_lines.pop();
						continue;
					}
				}

				this.setMenuOption('none');
				// this.updateDB();
			}



			//this.fillLayer();
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
