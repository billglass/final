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
// //= require_tree .

// $( document ).ready(function() {
//  $('.enter').fadeIn(4000).removeClass('hidden');

// });



var toE;
var toF;

// $(document).ready(function(){
//   $('[data-toggle="popover"]').popover();
// });
$(document).ready(function(){
  $(".container").fadeIn(2500).removeClass('hidden');
});

$('#test').html('<img src="/static/on.png" height="64px" width="64px">');







//How do I show only 1 out of the 5 cards at a time (with hide/show on droppable), and then play the card that is displayed?
//data attr: cpu/id - look for card that got played, hide it only...

$(function() {
  $( ".draggable" ).draggable();
  $( ".droppable" ).droppable({
    drop: function( event, ui ) {


      // $( this )
      //   .addClass( "ui-state-highlight" )
      //   .find( "p" )
      //     .html( "Digital!" );
      //     $( ".droppable" ).submit();
      console.log(event.toElement)
      console.log(event.toElement.getAttribute("data-skills"))
      document.getElementById("display").innerHTML = ("Total Skill Points: " + event.toElement.getAttribute("data-skills")); 
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
			document.getElementById("showme").innerHTML = ("Opponent's score: " + opp + " Your score: " + toE);
			document.getElementById("show").innerHTML = ("you lost")
				++CPUScore;
			if (CPUScore == 3) {
					document.getElementById("show2").innerHTML = ("You Lost The Game. Final Scores You: " + MyScore + " CPU: " + CPUScore);
		}
		$(".play:first").remove();
		$(".play2:first").remove();
			console.log("CPUScore = " + CPUScore)
			console.log("MyScore = " + MyScore)

		}else{

			console.log("you won")
			document.getElementById("showme").innerHTML = ("Opponent's score: " + opp + " 	Your score: " + toE);
			document.getElementById("show").innerHTML = ("you won");
			++MyScore;
			if (MyScore == 3) {
					document.getElementById("show2").innerHTML = ("You Won The Game! Final Scores You: " + MyScore + " CPU: " + CPUScore);
			}
		$(".play:first").remove();
		$(".play2:first").remove();
			console.log("CPUScore = " + CPUScore)
			console.log("MyScore = " + MyScore)

		}
	} 
});

//hide/show w/ jquery on droppable
//feed it in as function 



// function reset() {

	//After round is completed and winner of round declared, user clicks button to proceed to next round
	//Button.onClick => user target field cleared (remove played card?), new random CPU card inserted

      // $('.card_image').append("<li>Hello</li><input id=\"but\" type=\"button\">Click");
      //   $(document).on("click", ".card_image", function () {
      //       alert("bla bla");
      //   });



	// $(".card_image").button.onClick("refresh");

	 //    $( "#button" ).click(function() {
  //     $( "#effect" ).removeClass( "newClass", 1000, callback );
  //   });
 
  //   function callback() {
  //     setTimeout(function() {
  //       $( "#effect" ).addClass( "newClass" );
  //     }, 1500 );
  //   }
  // });
// };

	// document.getElementById(".droppable").reset()

	// send out next cpu card...
	// put that end of droppable
	// resetting game for cpu w/ 1 less card_image
	// game ends after 5 rounds



//Write a function that:
//Displays opponents data


//parse data skills from the link
//get the value from data skills
//alert first


// HERE IS WHAT YOU NEED
// Attach data to the image element about the player
// <li><%= image_tag card.image, :class => "card_image", :data => {:scoring => 10} %></li>
// $(event.toElement).data("scoring")
// console: $(toE).data("scoring")


//TODAY:
//Display one cpu card (with data)
//Compare two data sets
//declare winner


//**Droppable is not a method. Would have to implement submit functionality on drop?**

// function initialize () {
// 	var i;
// 		clins = document.getElementById("clins");
// 		for (i=0; i<clins.length; i++) {
// 			text += clins[i];
// 		}
// 	var userCounter = 0
// 	var cpuCounter = 0
// 	var clins = new Array();
// 	var user = prompt("Get Ready for Gametime HOOPS");
// };

// 	var cards = ["Player Name" + "Total Skill Points"];

// 	 for ( var i=0; i<10; i++ ) {
//     $('<div>' + numbers[i] + '</div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
//       containment: '#content',
//       stack: '#cardPile div',
//       cursor: 'move',
//       revert: true
//     } );
//   }

//   var target = [];
//     for ( var i=1; i<=10; i++ ) {
//     $('<div>' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
//       accept: '#cardPile div',
//       hoverClass: 'hovered',
//   });
// }
// }


// function startRound () {
// 	var i;

// 	cpu.reset();
// 	for (i = 0; i < cards.length; i++) {
// 		// reset cpu hand
// 	}
// 	document.getElementById("game").innerHTML = "Gametime."
// };

// function myScore () {
// 	// var i, total (total skill points per player)

// for (i=0; i<total.length; i++)
// if total > cputotal 
// 	userCounter + 1;
// 		else if total < cputotal
// 			cpuCounter + 1;
// 	else Math.random() >= 0.5
// 		userCounter + 1;
// };

// function myCounter () {
// 	if userCounter > cpuCounter
// 		alert("Winner!");
// 	else
// 		alert("Play Again!");
// }



//Create array/hash - as they update position, then callback function update array with new state =>
//10 slots for cards => when i drop on target, update contents of array, position 0 = card id 1, position 1 = card id 15, etc. on submit (onClick.submit state of that array), sends array to server, this is state of game
// $(document).on("page:change", function() {
  /* Activating Best In Place */
  // $(".best_in_place").best_in_place();
  // $(document).on('ajax:success', '.card', function() {
  // 	$(this).closest('div').fadeOut();
  // });

// var team = new Array(position, card_id)
// array created on drop
// appendTo Array
// hardcoded array

// search hash in array
// var team = [{

// compare totals...

// }]


  // $.post("/process", function(){

  // }).done(function(e){
  // 	console.log(e)
  // })
  
 // #userPlayer
 // #userClins
 // #total
 // #resultMessage

// detect when it lands...droppable api - what events get triggered => do something 
   // $("#userPlayer").on(function () {
   //      $.ajax({
   //          url: '/games/:id',  // change the url 
   //          data: $('#userPlayer').serialize(),
   //          success: function (data) {
   //              alert('success');
   //          }
   //      });
   //  });
//   $( "#userPlayer" ).submit("total points");
//   	// then it compares point totals 
//   	// declares winner
//   alert("submitted")
// });
//   	}
// 	});
// });


// take controller/action "round", then pass it data (how? once event is triggered, update this, onclick => )


// Remember position card is currently in. Get drop box set up. Drag card to target box (5) when it hits target, when event fires, send ajax to server, have server respond (this card is here)
//if div is filled, fire off this ajax request...


// var user 
// var userCounter = 0
// var cpuCounter = 0
// var cards = []
// var clins = [{}]

// class total 
// class cputotal 

// window.onload = initialize;

// function init () {

// 	$('#successMessage').hide();

// 	});





// <%= %> in js - just leave it there for now...
// function arraysComp(arr1, arr2){
//     if (arr1.length !== arr2.length) return false;
//     for (var i = 0, len = arr1.length; i < length; i++){
//         if (arr1[i] !== arr2[i]){
//             return false;
//         }
//     }
//     return true; 
// }
// });





// prompt: ready?
// counter set at 0, whoever wins the round +1 to counter At the very end, compare those 2 counters
// rounds: 1st round => pick player (clicks => takes stats, compares it to random CPU)

// onclick => grab stats, cpu stats, whoever has highest score wins!

// How do i compare?!

// class total vs. class cputotal
// whoever wins that wins round

// var userCounter = 0;
// var cpuCounter = 0;

// Rounds:

// button.onclick = "Start Game"

// onclick of clins => cpu picks random card => compare stats
// highest stats => winner
// if total > cputotal, userCounter +1
// 	elsif total < cputotal, cpuCounter +1
// 	else Math.random() >= 0.5, userCounter +1

// 		END OF Round

// After going thru all the rounds:
// 	if userCounter > cpuCounter, alert:["Good job buddy!"]
// 	else userCounter < cpuCounter, alert:["Bad job buddy!"]
	

// var game = new Game();

// function init() {
// 	if(game.init())
// 		game.start();
// }

// function Game(user, cpu) {
//     this.activePlayer = Math.random() >= 0.5 ? user : cpu;
//     this.opponentPlayer = this.activePlayer == user ? cpu : user;
//     this.winner = undefined;

// var clins = []

// x

//  var i = 0;
//  while (i > 5)
//  $("#TurnEnd").click(function(){
   
//    if(i == 1) {
//      $("#CPUCard1").fadeIn();
//    }
//    if(i == 2) {
//      $("#CPUCard2").fadeIn();
//    }
//    if(i == 3) {
//      $("#CPUCard3").fadeIn();
//    }
//    if(i == 4) {
//      $("#CPUCard4").fadeIn();
//    }
//    if(i == 5) {
//      $("#CPUCard5").fadeIn();
//    }
//    )};
//  )};


// if computer goes first, how do you decide what moves cpu makes?
// 	-goes in order of card.random
// 	-game is max of 5 turns 





// -Let user go first
// -Have opponents cards listed out, display none
// 	-on array Your turn end, display their first card!(JS - fadeIn)

// -Have button to end turn/goes to next turn


//     for (var i = 0; i < 3; i++) {
//         this.activePlayer.drawCard();
//         this.opponentPlayer.drawCard();
//     }
//     this.opponentPlayer.drawCard(); // extra card to compensate for not playing first turn
// }

// Game.prototype = {
//     start: function () {
//         while (this.winner === undefined) {
//             this.beginTurn();
//             this.playTurn();
//             this.endTurn();
//         }
//     },

//     beginTurn: function () {
//         this.activePlayer.manaSlots = Math.min(this.activePlayer.manaSlots + 1, 10);
//         this.activePlayer.mana = this.activePlayer.manaSlots;
//         this.activePlayer.drawCard();
//     },

//     playTurn: function () {
//         while (hasEnoughManaForCardInHand.call(this)) {
//             var choice = window.prompt(this.activePlayer + ", please choose a card to play from " + this.activePlayer.hand);
//             if (choice) {
//                 var chosenCard = parseInt(choice, 10);
//                 if (isNaN(chosenCard)) {
//                     if (!window.confirm(choice + " is not a valid card!")) {
//                         return;
//                     }
//                 } else if (chosenCard > this.activePlayer.mana) {
//                     if (!window.confirm("Cannot play card " + chosenCard + " with only " + this.activePlayer.mana + " mana!")) {
//                         return;
//                     }
//                 } else if (this.activePlayer.hand.indexOf(chosenCard) == -1) {
//                     if (!window.confirm(chosenCard + " is not present in hand!")) {
//                         return;
//                     }
//                 } else {
//                     if (choice.indexOf('h') == 1) { // expected input is [0-8]h? so 'h' would only be valid on exactly 2nd position
//                         this.activePlayer.playCard(chosenCard, this.activePlayer);
//                     } else {
//                         this.activePlayer.playCard(chosenCard, this.opponentPlayer);
//                    }
//                 }
//             } else {
//                 return;
//             }
//         }

//         function hasEnoughManaForCardInHand() {
//             return this.activePlayer.mana >= Math.min.apply(Math, this.activePlayer.hand);
//         }

//     },

//     endTurn: function () {
//         if (this.opponentPlayer.health <= 0) {
//             this.winner = this.activePlayer;
//             window.confirm(this.winner.name + " wins!");
//         } else {
//             switchPlayers.call(this);
//         }

//         function switchPlayers() { // ECMA6: [activePlayer, opponentPlayer] = [opponentPlayer, activePlayer]
//             var tmp = this.activePlayer;
//             this.activePlayer = this.opponentPlayer;
//             this.opponentPlayer = tmp;
//         }
//     }
// }
// ;

// function Player(name) {
//     this.name = name;
//     this.health = 30;
//     this.mana = 0;
//     this.manaSlots = 0;
//     this.deck = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
//     this.hand = [];
// }

// Player.prototype = {
//     drawCard: function () {
//         if (this.deck.length === 0) {
//             this.health--; // bleedout rule
//         } else {
//             var cardIndex = Math.floor(Math.random() * this.deck.length);
//             var card = this.deck.splice(cardIndex, 1)[0];
//             if (this.hand.length < 5) { // check against overload rule
//                 this.hand.push(card);
//             }
//         }
//     },
//     playCard: function (card, target) {
//         this.mana -= card;
//         this.hand.splice(this.hand.indexOf(card), 1);
//         if (target === this) { // healing
//             target.health = Math.min(target.health += card, 30); // healing caps at the initial value of 30
//         } else { // attacking
//             target.health -= card;
//         }
//     },
//     toString: function () {
//         return this.name + " (Health: " + this.health + ", Mana: " + this.mana + "/" + this.manaSlots + ")";
//     }
// };







// $(document).on("page:change", function() {
//   /* Activating Best In Place */
//   $(".best_in_place").best_in_place();
//   $(document).on('ajax:success', '.card nav', function() {
//   	$(this).closest('div').fadeOut();
//   });
//   $( "#board" ).sortable({
//   	appendTo: $('#board'),
//   	update: function() {
//   		$.post($(this).data('update-url'), 
//   		$(this).sortable('serialize'));
//   	}
// 	});
// });



