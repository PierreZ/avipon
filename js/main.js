
if (annyang) {
var commands = {
	'Quel heure est-il ?': showTime,
	'Quel est la meilleure école ?': showSchool,
	'yolo':showSwag,
	'Quel est le meilleur club ?':showClub,
	'Dessine moi (un) (une) (le) (la) (les) (des) (du) (de la) :term ?':showFlickr
       	
};
}

var showTime= function () {
	var time=new Date();

	{{result}}=time;
}

var showSchool= function () {
	{{result}}="C'est l'ISEN !";
}

var showSchool= function () {
	{{result}}="C'est l'ISEN !";
}
var showFlickr = function(term) {
	  var url = 'http://api.flickr.com/services/rest/?tags='+tag;
	    $.getJSON(url);
}
// Initialize annyang with our commands
annyang.init(commands);
// Start listening. You can call this here, or attach this call to an event, button, etc.
annyang.start();

