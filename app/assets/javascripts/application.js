// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require turbolinks
//= require_tree .


$(document).ready(function(){
  $(".container").fadeIn(1500).removeClass('hidden');
});
 
//How do I show only 1 out of the 5 cards at a time (with hide/show on droppable), and then play the card that is displayed?
//data attr: cpu/id - look for card that got played, hide it only...

var toE;
var toF;

$(function() {
  $( ".draggable" ).draggable();
  $( ".droppable" ).droppable({
    drop: function( event, ui ) {

      // helper: 'clone', 
       // cursor: 'pointer',
      // $( this )
      //   .addClass( "ui-state-highlight" )
      //   .find( "p" )
      //     .html( "Digital!" );
      //     $( ".droppable" ).submit();
      console.log(event.toElement)
      console.log(event.toElement.getAttribute("data-skills"))
      document.getElementById("display").innerHTML = ("Your Total Skill Points: " + event.toElement.getAttribute("data-skills")); 
      toE = event.toElement.getAttribute("data-skills")
      compare();
    }
  });

	var MyScore = 0;
	var CPUScore = 0;

	function compare() {

		var opp = $(".card_image").data().skills;
		console.log("this is your opponent " + opp)
		console.log("this is your card " + toE)

		if (opp >= toE){

			console.log("you lost")
			document.getElementById("showme").innerHTML = ("Opponent's Total Skill Points: " + opp);
			document.getElementById("show").innerHTML = ("Round: Away Team")
				++CPUScore;
      document.getElementById("counter").innerHTML = ("Home Team " + " | " + " Away Team ")
      document.getElementById("counter2").innerHTML = (" " + MyScore )
      document.getElementById("counter3").innerHTML = (" " + CPUScore);

			if (CPUScore == 3) {
					document.getElementById("show2").innerHTML = ("Game Over");
		}
		$(".play:first").remove();
		$(".play2:first").remove();
			console.log("CPUScore = " + CPUScore)
			console.log("MyScore = " + MyScore)

		}else{

			console.log("you won")
			document.getElementById("showme").innerHTML = ("Opponent's Total Skill Points: " + opp);
			document.getElementById("show").innerHTML = ("Round: Home Team");
			++MyScore;
      document.getElementById("counter").innerHTML = ("Home Team " + " | " + " Away Team ")
      document.getElementById("counter2").innerHTML = (" " + MyScore)
      document.getElementById("counter3").innerHTML = (" " + CPUScore);
			if (MyScore == 3) {
					document.getElementById("show2").innerHTML = ("You Won The Game!");
			}
		$(".play:first").remove();
		$(".play2:first").remove();
			console.log("CPUScore = " + CPUScore)
			console.log("MyScore = " + MyScore)

		}
	} 
});





