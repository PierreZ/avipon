var showTime= function () {

	var time=new Date();
	change(time);

}

var showSchool= function () {
	change("C'est l'ISEN !");
}
var showSwag= function () {
	change("Swag");
}

var showClub= function () {
	change("C'est le club Elec !");
}
var showFlickr = function(term) {
	  var url = 'http://api.flickr.com/services/rest/?tags='+tag;
	    $.getJSON(url);
}

function Ctrl($scope) {

}

if (annyang) {
annyang.debug();
annyang.setLanguage("fr-FR");
var commands = {
	'quelle heure est-il': showTime,
	'Quel est la meilleure école ?': showSchool,
	'yolo':showSwag,
	'Yolo':showSwag,
	'Quel est le meilleur club ?':showClub,
	'Dessine moi (un) (une) (le) (la) (les) (des) (du) (de la) :term ?':showFlickr
       	
};


// Initialize annyang with our commands
annyang.init(commands);
// Start listening. You can call this here, or attach this call to an event, button, etc.
annyang.start();
}
function change(result) {
	        var scope = angular.element($(".response")).scope();
		    scope.$apply(function(){
			            scope.result =result;
				        })
}

