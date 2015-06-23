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

  $('[data-toggle="popover"]').popover();

});

function Game(user, cpu) {
    this.activePlayer = Math.random() >= 0.5 ? user : cpu;
    this.opponentPlayer = this.activePlayer == user ? cpu : user;
    this.winner = undefined;

x

 var i = 0;
 while (i > 5)
 $("#TurnEnd").click(function(){
   
   if(i == 1) {
     $("#CPUCard1").fadeIn();
   }
   if(i == 2) {
     $("#CPUCard2").fadeIn();
   }
   if(i == 3) {
     $("#CPUCard3").fadeIn();
   }
   if(i == 4) {
     $("#CPUCard4").fadeIn();
   }
   if(i == 5) {
     $("#CPUCard5").fadeIn();
   }
   )};
 )};

if computer goes first, how do you decide what moves cpu makes?
	-goes in order of card.random
	-game is max of 5 turns 





-Let user go first
-Have opponents cards listed out, display none
	-on array Your turn end, display their first card!(JS - fadeIn)

-Have button to end turn/goes to next turn


//     for (var i = 0; i < 3; i++) {
//         this.activePlayer.drawCard();
//         this.opponentPlayer.drawCard();
//     }
//     this.opponentPlayer.drawCard(); // extra card to compensate for not playing first turn
// }

Game.prototype = {
    start: function () {
        while (this.winner === undefined) {
            this.beginTurn();
            this.playTurn();
            this.endTurn();
        }
    },

    beginTurn: function () {
        this.activePlayer.manaSlots = Math.min(this.activePlayer.manaSlots + 1, 10);
        this.activePlayer.mana = this.activePlayer.manaSlots;
        this.activePlayer.drawCard();
    },

    playTurn: function () {
        while (hasEnoughManaForCardInHand.call(this)) {
            var choice = window.prompt(this.activePlayer + ", please choose a card to play from " + this.activePlayer.hand);
            if (choice) {
                var chosenCard = parseInt(choice, 10);
                if (isNaN(chosenCard)) {
                    if (!window.confirm(choice + " is not a valid card!")) {
                        return;
                    }
                } else if (chosenCard > this.activePlayer.mana) {
                    if (!window.confirm("Cannot play card " + chosenCard + " with only " + this.activePlayer.mana + " mana!")) {
                        return;
                    }
                } else if (this.activePlayer.hand.indexOf(chosenCard) == -1) {
                    if (!window.confirm(chosenCard + " is not present in hand!")) {
                        return;
                    }
                } else {
                    if (choice.indexOf('h') == 1) { // expected input is [0-8]h? so 'h' would only be valid on exactly 2nd position
                        this.activePlayer.playCard(chosenCard, this.activePlayer);
                    } else {
                        this.activePlayer.playCard(chosenCard, this.opponentPlayer);
                   }
                }
            } else {
                return;
            }
        }

        function hasEnoughManaForCardInHand() {
            return this.activePlayer.mana >= Math.min.apply(Math, this.activePlayer.hand);
        }

    },

    endTurn: function () {
        if (this.opponentPlayer.health <= 0) {
            this.winner = this.activePlayer;
            window.confirm(this.winner.name + " wins!");
        } else {
            switchPlayers.call(this);
        }

        function switchPlayers() { // ECMA6: [activePlayer, opponentPlayer] = [opponentPlayer, activePlayer]
            var tmp = this.activePlayer;
            this.activePlayer = this.opponentPlayer;
            this.opponentPlayer = tmp;
        }
    }
}
;

function Player(name) {
    this.name = name;
    this.health = 30;
    this.mana = 0;
    this.manaSlots = 0;
    this.deck = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    this.hand = [];
}

Player.prototype = {
    drawCard: function () {
        if (this.deck.length === 0) {
            this.health--; // bleedout rule
        } else {
            var cardIndex = Math.floor(Math.random() * this.deck.length);
            var card = this.deck.splice(cardIndex, 1)[0];
            if (this.hand.length < 5) { // check against overload rule
                this.hand.push(card);
            }
        }
    },
    playCard: function (card, target) {
        this.mana -= card;
        this.hand.splice(this.hand.indexOf(card), 1);
        if (target === this) { // healing
            target.health = Math.min(target.health += card, 30); // healing caps at the initial value of 30
        } else { // attacking
            target.health -= card;
        }
    },
    toString: function () {
        return this.name + " (Health: " + this.health + ", Mana: " + this.mana + "/" + this.manaSlots + ")";
    }
};







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



