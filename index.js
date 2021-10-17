// // Initialize Firebase
// var config = {
// 	apiKey: "AIzaSyDChO55Osxg4DbuHhn6LGKvuB4q3Uxu5fE",
// 	authDomain: "tracespace-86320.firebaseapp.com",
// 	databaseURL: "https://tracespace-86320.firebaseio.com",
// 	projectId: "tracespace-86320",
// 	storageBucket: "tracespace-86320.appspot.com",
// 	messagingSenderId: "473086776957"
// };

// firebase.initializeApp(config);


// var db = firebase.database();
// var projectRef = db.ref('projects');
var projectTable = document.getElementById('project-table');
var searchInput = document.getElementById('search');
console.log(projectTable);
//<span class="glyphicons glyphicons-remove"></span>

testMenu = [
	{"id": 0, "name" : "Project 1"},
	{"id": 1, "name" : "Project 2"},
	{"id": 2, "name" : "Project 3"},
]


var createMenuItem = function(project){

		var li = document.createElement("li");
		var link = document.createElement("a");
		var name = document.createTextNode(project.name);
		var sp = document.createElement("span");

		var tex = document.createTextNode("X");
		sp.appendChild(tex);
		// sp.id = snapshot.key;
		sp.name = project.name;

		// sp.onclick = function(){
		// 	if(confirm("Do you want to delete " +  this.name + " project ?")){
		// 			projectRef.child(this.id).remove();
		// 	}
		// };

		sp.className = "badge";

		link.appendChild(name);
		li.appendChild(link);
		li.appendChild(sp);
		link.href = '/trace-space/sketch.html?projectId='+ project.id;
		// li.id = snapshot.key;
		link.name = project.name.toLowerCase();
		li.name = project.name.toLowerCase();
		li.className = 'list-group-item';

		projectTable.appendChild(li);

}


function createProject(){
		var newProjectName = document.getElementById('new-project-name').value;

		if(newProjectName == "")
			return;

		testMenu.push({name : newProjectName});

		createMenuItem({name : newProjectName})

		$('#myModal').modal('hide');
}

searchInput.addEventListener('input', function(event){
		temp = this.value.toLowerCase();
		console.log(temp);
		$('li').filter($('.list-group-item')).filter(function(){
			return true;
		}).show();
	 if(this.value !== ""){
		 $('li').filter($('.list-group-item')).filter(function(){
			 if(this.name.indexOf(temp) === -1){
				 return true;
			 }else{
				 return false;
			 }
		 }).hide();
	 }
})




testMenu.forEach(createMenuItem)
