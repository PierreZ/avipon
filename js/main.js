var TxtRotate = function(el, toRotate, period) {
	  this.toRotate = toRotate;
	    this.el = el;
	      this.loopNum = 0;
	        this.period = parseInt(period, 10) || 2000;
		  this.txt = '';
		    this.tick();
		      this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
	  var i = this.loopNum % this.toRotate.length;
	    var fullTxt = this.toRotate[i];

	      if (this.isDeleting) {
		          this.txt = fullTxt.substring(0, this.txt.length - 1);
			    } else {
				        this.txt = fullTxt.substring(0, this.txt.length + 1);
					  }

	        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

		  var that = this;
		    var delta = 300 - Math.random() * 100;

		      if (this.isDeleting) { delta /= 2; }

		        if (!this.isDeleting && this.txt === fullTxt) {
				    delta = this.period;
				        this.isDeleting = true;
					  } else if (this.isDeleting && this.txt === '') {
						      this.isDeleting = false;
						          this.loopNum++;
							      delta = 500;
							        }

			  setTimeout(function() {
				      that.tick();
				        }, delta);
};

window.onload = function() {
	  var elements = document.getElementsByClassName('txt-rotate');
	    for (var i=0; i<elements.length; i++) {
		        var toRotate = elements[i].getAttribute('data-rotate');
			    var period = elements[i].getAttribute('data-period');
			        if (toRotate) {
					      new TxtRotate(elements[i], JSON.parse(toRotate), period);
					          }
				  }
	      // INJECT CSS
	        var css = document.createElement("style");
	           css.type = "text/css";
	             css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
	               document.body.appendChild(css);
	               };

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
	var time=new Date(year, month, day, hours, minutes, seconds, milliseconds);

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

