// Initialize Firebase
var config = {
	apiKey: "AIzaSyDChO55Osxg4DbuHhn6LGKvuB4q3Uxu5fE",
	authDomain: "tracespace-86320.firebaseapp.com",
	databaseURL: "https://tracespace-86320.firebaseio.com",
	projectId: "tracespace-86320",
	storageBucket: "tracespace-86320.appspot.com",
	messagingSenderId: "473086776957"
};

firebase.initializeApp(config);


var layerRef = firebase.database().ref("projects/"+ projectId +"/layers");

var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

function uploadPhoto(plan_id, file, plans, img){
	var uploadTask = storageRef.child('images/' + projectId + '/' + Date.now() ).put(file);

	uploadTask.on('state_changed', function(snapshot){
	  // Observe state change events such as progress, pause, and resume
	  // See below for more detail
	}, function(error) {
	  // Handle unsuccessful uploads
	}, function() {
	  // Handle successful uploads on complete
	  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
	  var downloadURL = uploadTask.snapshot.downloadURL;
		plans.push(new TraceSpacePlan(300, 300, 300, 300, img, plan_id, downloadURL));
		firebase.database().ref('projects/'+  projectId + '/layers/' + plan_id).set(plans[plan_id].export());
		plans[0].display();

		console.log("Photo was uploaded");
	});
}
