class PlanMenuObject {

    /*****				START Constructor ******/
		constructor(init_x, init_width, init_y, init_heiht){
			  /**These variables are private attribute **/
			  var _option = 'none';
				var _x_offset = 0;
				var _y_offset = - 10;
				var _show = false;
				var _coord_x = init_x;
				var _coord_y = init_y;
				console.log("Menu Coord X : ", _coord_x, "Menu Coord Y : ", _coord_y);
				var self = this;

				// This array restrict all option posibilities
			  var _list_of_options = ['none', 'select' ,'resize', 'rotate', 'move', 'delete', 'top', 'down'];


			  /**This function are public functions**/

			  // this function is been used to set the current menu option
			  self.setOption = function (new_option){

						// check if the new_option is not a valid option
						if(_list_of_options.indexOf(new_option) == -1){
						  console.info("The option", new_option, "is not supported by MenuObject");
						  return false;
						}

						_option = new_option;
						console.log('Menu option has been change to', _option);
						return true;
			  }

			  // this function is used to get the current menu option
				self.getOption = function (){

						return _option;
				}

				self.showMenu = function(){
						if(_show)
							return
						_HTML_MENU.show();
						_show = true;
				}

				self.hideMenu = function() {

						self.setOption('none');
						//_HTML_MENU.hide();
						setTimeout(function(){
							_HTML_MENU.hide();
							_show = false;
						}, 100);
						console.log("Hide Menu in .1 sec");

				}

				self.updatePosition = function(new_x, new_y, OWidth, OHeight){

						_coord_x = new_x;

						if(new_x + _x_offset < 0 || new_y - 55 < 0){
							console.log("Menu cannot update position to negatives values");
							_coord_y = new_y;
							_HTML_MENU.position(new_x + _x_offset, new_y + OHeight - _y_offset + 55);
							return true;
							//return false;
						}else{
							_coord_y = new_y;
							_HTML_MENU.position(new_x + _x_offset, new_y + _y_offset);
							return true;
						}

				}

				self.isShow = function(){
					return _show;
				}

				self.setMove = function(){

					return self.setOption('move');
				}

				self.setRezise = function(){

					return self.setOption('resize');
				}

				self.setDelete = function(){
					self.hideMenu();
					return self.setOption('delete');
				}

				self.setTop = function(){
					return self.setOption('top');
				}

				self.setDown = function(){
					return self.setOption('down');
				}

				// This set of line of codes create HTML menu
				var moveButton = createButton('');
				moveButton.addClass('btn btn-default');
				moveButton.addClass('glyphicon glyphicon-move');
				moveButton.mousePressed(self.setMove);

				var reSizeButton = createButton('');
				reSizeButton.addClass('btn btn-default');
				reSizeButton.addClass('glyphicon glyphicon-resize-full');
				reSizeButton.mousePressed(self.setRezise);

				var topButton = createButton('');
				topButton.addClass('btn btn-default');
				topButton.addClass('glyphicon glyphicon-arrow-up');
				topButton.mousePressed(self.setTop);

				var downButton = createButton('');
				downButton.addClass('btn btn-default');
				downButton.addClass('glyphicon glyphicon-arrow-down');
				downButton.mousePressed(self.setDown);

				var deleteButton = createButton('');
				deleteButton.addClass('btn-danger');
				deleteButton.addClass('btn btn-default');
				deleteButton.addClass('glyphicon glyphicon-trash');
				deleteButton.mousePressed(self.setDelete);

				var closeButton = createButton('');
				closeButton.addClass('btn btn-default');
				closeButton.addClass('glyphicon glyphicon-remove');
				closeButton.mousePressed(self.hideMenu);

				/** variable content need to be develop in web enviroment**/
				var _HTML_MENU = createDiv('');
				_HTML_MENU.addClass('btn-group');
				_HTML_MENU.addClass('btn-back-plan');

				_HTML_MENU.child(moveButton);
				_HTML_MENU.child(reSizeButton);
				_HTML_MENU.child(topButton);
				_HTML_MENU.child(downButton);
				_HTML_MENU.child(deleteButton);
				_HTML_MENU.child(closeButton);
				_HTML_MENU.position(_coord_x + _x_offset, _coord_y + _y_offset);
				_HTML_MENU.hide();
		/*****				END Constructor ******/
		}
}

class LayerMenuObject {

    /*****				START Constructor ******/
		constructor(init_x, init_width, init_y, init_heiht){
			  /**These variables are private attribute **/
			  var _option = 'none';
				var _x_offset = 0;
				var _y_offset = - 10;
				var _show = false;
				var _coord_x = init_x;
				var _coord_y = init_y;
				console.log("Menu Coord X : ", _coord_x, "Menu Coord Y : ", _coord_y);
				var self = this;

				// This array restrict all option posibilities
			  var _list_of_options = ['none','draw', 'select' ,'resize', 'rotate', 'move', 'delete', 'top', 'down', 'undoDraw'];


			  /**This function are public functions**/

			  // this function is been used to set the current menu option
			  self.setOption = function (new_option){

						// check if the new_option is not a valid option
						if(_list_of_options.indexOf(new_option) == -1){
						  console.info("The option", new_option, "is not supported by MenuObject");
						  return false;
						}

						_option = new_option;
						console.log('Menu option has been change to', _option);
						return true;
			  }

			  // this function is used to get the current menu option
				self.getOption = function (){

						return _option;
				}

				self.showMenu = function(){
						if(_show)
							return
						_HTML_MENU.show();
						_show = true;
				}

				self.hideMenu = function() {

						self.setOption('none');
						//_HTML_MENU.hide();
						setTimeout(function(){
							_HTML_MENU.hide();
							_show = false;
						}, 100);
						console.log("Hide Menu in .1 sec");

				}

				self.updatePosition = function(new_x, new_y, OWidth, OHeight){

						_coord_x = new_x;

						if(new_x + _x_offset < 0 || new_y - 55 < 0){
							console.log("Menu cannot update position to negatives values");
							_coord_y = new_y;
							_HTML_MENU.position(new_x + _x_offset, new_y + OHeight - _y_offset + 55);
							return true;
							//return false;
						}else{
							_coord_y = new_y;
							_HTML_MENU.position(new_x + _x_offset, new_y + _y_offset);
							return true;
						}

				}

				self.isShow = function(){
					return _show;
				}

				self.setMove = function(){

					return self.setOption('move');
				}

				self.setRezise = function(){

					return self.setOption('resize');
				}

				self.setDraw = function(){

					return self.setOption('draw');
				}

				self.setDelete = function(){
					self.hideMenu();
					return self.setOption('delete');
				}

				self.setTop = function(){
					return self.setOption('top');
				}

				self.setDown = function(){
					return self.setOption('down');
				}

				self.setUndoDraw = function(){
					return self.setOption('undoDraw');
				}

				// This set of line of codes create HTML menu
				var moveButton = createButton('');
				moveButton.addClass('btn btn-default');
				moveButton.addClass('glyphicon glyphicon-move');
				moveButton.mousePressed(self.setMove);



				var reSizeButton = createButton('');
				reSizeButton.addClass('btn btn-default');
				reSizeButton.addClass('glyphicon glyphicon-resize-full');
				reSizeButton.mousePressed(self.setRezise);

				var drawButton = createButton('');
				drawButton.addClass('btn btn-default');
				drawButton.addClass('glyphicon glyphicon-pencil');
				drawButton.mousePressed(self.setDraw);

				var undoDrawButton = createButton('');
				undoDrawButton.addClass('btn btn-default');
				undoDrawButton.addClass('glyphicon glyphicon-erase');
				undoDrawButton.mousePressed(self.setUndoDraw);


				var topButton = createButton('');
				topButton.addClass('btn btn-default');
				topButton.addClass('glyphicon glyphicon-arrow-up');
				topButton.mousePressed(self.setTop);

				var downButton = createButton('');
				downButton.addClass('btn btn-default');
				downButton.addClass('glyphicon glyphicon-arrow-down');
				downButton.mousePressed(self.setDown);

				var deleteButton = createButton('');
				deleteButton.addClass('btn-danger');
				deleteButton.addClass('btn btn-default');
				deleteButton.addClass('glyphicon glyphicon-trash');
				deleteButton.mousePressed(self.setDelete);


				var closeButton = createButton('');
				closeButton.addClass('btn btn-default');
				closeButton.addClass('glyphicon glyphicon-remove');
				closeButton.mousePressed(self.hideMenu);

				var _HTML_MENU = createDiv('');

				_HTML_MENU.addClass('btn-group');
				_HTML_MENU.addClass('btn-back-layer');

				/** variable content need to be develop in web enviroment**/

				_HTML_MENU.child(moveButton);
				_HTML_MENU.child(reSizeButton);
				_HTML_MENU.child(drawButton);
				_HTML_MENU.child(undoDrawButton);
				_HTML_MENU.child(topButton);
				_HTML_MENU.child(downButton);
				_HTML_MENU.child(deleteButton);
				_HTML_MENU.child(closeButton);
				_HTML_MENU.position(_coord_x + _x_offset, _coord_y + _y_offset);
				_HTML_MENU.hide();
		/*****				END Constructor ******/
		}
}
