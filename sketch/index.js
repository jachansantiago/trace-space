// Initialize Firebase
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
console.log("Test Index.js")
var count = 1;
var projectTable = document.getElementById('project-table');
console.log(projectTable);



printMenu = function(snapshot){
		var snap = snapshot;
		var tr = document.createElement("tr");

		var td1 = document.createElement("td");
		var counter = document.createTextNode(parseInt(count));
		td1.appendChild(counter);

		var td2 = document.createElement("td");
		var projectName = document.createTextNode(snap.name);
		td2.appendChild(projectName);


		tr.appendChild(td1);
		tr.appendChild(td2);

		projectTable.appendChild(tr);

		count++;
}

var testMenu = [
	{"name": "Project 1"},
	{"name": "Project 2"},
	{"name": "Project 3"}
]


testMenu.forEach(printMenu)
