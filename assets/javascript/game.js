//computer creates a random number between 19 and 120
var computersRandomlyGeneratedNumber = Math.floor(Math.random() * 102) + 19;
// creating random values between 1 and 12 for each ruby(chrystal) #ID
var randomRedRubyValue = Math.floor(Math.random() * 12) + 1;
var randomBlueRubyValue = Math.floor(Math.random() * 12) + 1;
var randomYellowRubyValue = Math.floor(Math.random() * 12) + 1;
var randomGreenRubyValue = Math.floor(Math.random() * 12) + 1;

// counter, wins, losses
var wins = 0;
var losses = 0;
var totalScore;
var counter;

//this function will reset (the computer's number to match )and the (user's score)
function resetComputersRandomNumbertoMatchandyourTotalScoreIsThis() {
    console.log("resetComputersRandomNumbertoMatchandyourTotalScoreIsThis");

    totalScore = 0;
    counter = 0;
    computersRandomlyGeneratedNumber = Math.floor(Math.random() * 102) + 19;
    $("#yourTotalScoreIsThis").text(totalScore);
    $(".insert").text(computersRandomlyGeneratedNumber);
}
//binding function to include all ruby click events
function binding() {
    console.log("binding");
    $("#blueRuby").on("click", function() {
        counter += randomBlueRubyValue;
        $("#yourTotalScoreIsThis").html(" " + counter);
        checkWinOrLose();
    });

    $("#yellowRuby").on("click", function() {
        counter += randomYellowRubyValue;
        $("#yourTotalScoreIsThis").html(" " + counter);
        checkWinOrLose();
    });

    $("#redRuby").on("click", function() {
        counter += randomRedRubyValue;
        $("#yourTotalScoreIsThis").html(" " + counter);
        checkWinOrLose();
    });

    $("#greenRuby").on("click", function() {
        counter += randomGreenRubyValue;
        $("#yourTotalScoreIsThis").html(" " + counter);
        checkWinOrLose();
    });
}
//function to check if the goal of the game has been met
function checkWinOrLose() {
    console.log("checkWinOrLose");
    if (counter < computersRandomlyGeneratedNumber) {
        return;
    } else if (counter === computersRandomlyGeneratedNumber) {
        wins++;
        $(".winsCounter").html("wins: " + wins);
        alert("you win");
        resetComputersRandomNumbertoMatchandyourTotalScoreIsThis();
    } else if (counter >= computersRandomlyGeneratedNumber) {
        losses++;
        $(".lossCounter").html("losses: " + losses);
        alert("you lose");
        resetComputersRandomNumbertoMatchandyourTotalScoreIsThis();
    }
}

//rules: when game ends the random computer number is reset and a new computer number is generated
//new numbers are assigned to the buttons.
$(document).ready(function() {
    //setting up the game
    $("#start").html("<button>start</button>")

    $("#start").on("click", function() {
        timer();
        questions();

    })
    resetComputersRandomNumbertoMatchandyourTotalScoreIsThis();
    //adding accumulated click events
    binding();
});
