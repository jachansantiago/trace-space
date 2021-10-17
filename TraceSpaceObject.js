

class TraceSpaceObject{

		constructor(){
			/** These are private attributes **/
			var _coord_x;
			var _coord_y;
			var _width;
			var _height;
			var _menu = new MenuObject(_coord_x, _coord_y);

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


// var plan = new TraceSpaceObject;
// var plan2 = new TraceSpaceObject;
// plan.setCoords(0,0);
// plan.setDimensions(1024, 1024);
// console.log(plan.getCoords());
// console.log(plan.getDimensions());
// console.log(plan.isMousePressed(10,200));
// plan.setCoords(1,1);
// plan.setDimensions(1027, 2017);
// console.log(plan.getCoords());
// console.log(plan.getDimensions());
// console.log(plan.isMousePressed(1034,2000));
//
// plan2.setCoords(2,9);
// plan2.setDimensions(2410, 1084);
// console.log(plan2.getCoords());
// console.log(plan2.getDimensions());
// console.log(plan2.isMousePressed(10000,200));
// plan2.setCoords(19,71);
// plan2.setDimensions(2450, 1184);
// console.log(plan2.getCoords());
// console.log(plan2.getDimensions());
// console.log(plan.isMousePressed(100000,200000));


// console.log(plan.getMenuOption());
// console.log(plan.setMenuOption('draw'));
// console.log(plan.getMenuOption());
// console.log(plan2.getMenuOption());
// console.log(plan2.setMenuOption('resize'));
// console.log(plan2.getMenuOption());
// console.log(plan2.setMenuOption('resise'));
// console.log(plan2.getMenuOption());
