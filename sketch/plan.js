class TraceSpacePlan{

		constructor(init_x, init_y, init_width, init_height, init_img, init_id, init_downloadUrl){
			/** These are private attributes **/
			var _id = init_id;
			var _coord_x = init_x;
			var _coord_y = init_y;
			var _width = init_width;
			var _height = init_height;
			var _menu = new PlanMenuObject(_coord_x, _width, _coord_y, _height);
			var _image = init_img;
			var _color_line = color('black');
			var _image_download_url = init_downloadUrl;
			var _last_url = "";


			this.display = function () {
				image(_image, _coord_x, _coord_y, _width, _height);
			}


			/** These are public functions to access private attributes **/
			this.getId = function(){
				return _id;
			}

			this.setId = function (new_id){
				_id = new_id;
			}

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

			this.updateDim = function(delta_x, delta_y) {
				this.setDimensions(_width + delta_x, _height + delta_y);
				// this.updateDB();
			}

			this.setMenuOption = function (new_option){
					return _menu.setOption(new_option);
			}

			this.menuIsShow = function (){
				return _menu.isShow();
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

			this.hideMenu = function () {
					return _menu.hideMenu();
			}

			this.update = function(delta_x, delta_y) {
				this.setMenuCoords(_coord_x + delta_x, _coord_y + delta_y);
				this.setCoords(_coord_x + delta_x, _coord_y + delta_y);
				// this.updateDB();
			}

			this.export = function(){
				return {
					"_type" : "image",
					"_coord_x" : _coord_x,
					"_coord_y" : _coord_y,
					"_width" : _width,
					"_height" : _height,
					"_image_download_url" : _image_download_url
				}
			}

			this.import = function(DBObject){
					_last_url = _image_download_url;
					_coord_x = DBObject._coord_x;
					_coord_y = DBObject._coord_y;
					_width = DBObject._width;
					_height= DBObject._height;
					_image_download_url = DBObject._image_download_url;
					this.setMenuCoords(_coord_x , _coord_y);
					if(_last_url !== _image_download_url)
						this.loadPhoto();
			}

			this.loadPhoto = function() {
				_image = loadImage(_image_download_url);
			}

			// this.updateDB = function(){
			// 	firebase.database().ref('projects/' + projectId + '/layers/' + _id).set(this.export());
			// }

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
