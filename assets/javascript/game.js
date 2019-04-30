const NUMBER_CRYSTALS = 4;
const MAX_CRYSTAL_VALUE = 20;
const MIN_GOAL_VALUE = 30;
const MAX_GOAL_VALUE = 150;

var wins = 0;
var losses = 0;
var goal;
var total = 0;
var crystalValues = []


$(document).ready(function() {



    for (i=0;i<NUMBER_CRYSTALS;i++) {
        var random = Math.floor(Math.random() * MAX_CRYSTAL_VALUE) +1;
        crystalValues.push(random);
    }
 

    console.log(crystalValues);


        function startGame() {
            goal = Math.floor(Math.random() * (MAX_GOAL_VALUE-MIN_GOAL_VALUE)) + MIN_GOAL_VALUE;
            $("#goal").html("<h1>Goal: " + goal + "</h1>");

    };

    startGame();

    $(".crystal").on("click", function() {
        let crystalId = $(this).attr('id');
        console.log(crystalId);

        total += crystalValues[crystalId];
        $("#total").html("<h1>Your total: " + total + "</h1>");
        


        if (total > goal) {
            $("#message").html("<h1>You lose! Press any key to play again </h1>");
            $(".crystal").off();
        }

        });

});