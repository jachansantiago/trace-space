class MenuObject {

    /*****				START Constructor ******/
		constructor(init_x, init_width, init_y, init_heiht){
			  /**These variables are private attribute **/
			  var _option = 'none';
				var _x_offset = init_x + (init_width/2);
				var _y_offset = init_y - 55;
				var _show = false;
				var _coord_x = init_x;
				var _coord_y = init_y;
				var self = this;

				// This array restrict all option posibilities
			  var _list_of_options = ['none','draw', 'select' ,'resize', 'rotate', 'move'];


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

				self.updatePosition = function(new_x, new_y){

						if(new_x + _x_offset < 0 || new_y + _y_offset < 0){
							console.log("Menu cannot update position to negatives values");
							return false;
						}
						_coord_x = new_x;
						_coord_y = new_y;
						_HTML_MENU.position(new_x + _x_offset, new_y + _y_offset);
						return true;
				}

				self.setMove = function(){

					return self.setOption('move');
				}

				self.setRezise = function(){

					return self.setOption('resize');
				}

				// This set of line of codes create HTML menu
				var moveButton = createButton('Move');
				moveButton.mousePressed(self.setMove);
				var reSizeButton = createButton('Re-size');
				reSizeButton.mousePressed(self.setRezise);
				var closeButton = createButton('Close');
				closeButton.mousePressed(self.hideMenu);

				/** variable content need to be develop in web enviroment**/
				var _HTML_MENU = createDiv('');
				_HTML_MENU.addClass('relative-menu');
				_HTML_MENU.child(moveButton);
				_HTML_MENU.child(reSizeButton);
				_HTML_MENU.child(closeButton);
				_HTML_MENU.position(_coord_x + _x_offset, _coord_y + _y_offset);
				_HTML_MENU.hide();
		/*****				END Constructor ******/
		}
}
