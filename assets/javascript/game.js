$(document).ready(function () {

    var randomNumber;
    var random = [];
    var wins = 0;
    var losses = 0;
    var totalScore;

    //Function to initialize the game
    function reset() {
        //Random number at the start of each game
        randomNumber = Math.floor(Math.random() * 101) + 19
        $("#random-number").text(randomNumber)
        totalScore = 0;
        $("#totalScore").text(totalScore)
        console.log(totalScore)

        for (var i = 0; i < 4; i++) {
            random[i] = Math.floor(Math.random() * 11) + 1
        }
        console.log(random)
    }
    reset();


    //when you click on the image, the total score incrementes
    for (let i = 0; i < 4; i++) {
        $("#button-" + (i + 1)).on('click', function () {
            totalScore += random[i]
            $("#totalScore").text(totalScore)

            console.log("total: " + totalScore)

            //If the total matches with the number to guess, le winning score increases, a winner message appears and the game resets.
            if (totalScore === randomNumber) {
                wins++
                $("#wins").text("Wins: " + wins)
                reset()
            }
            // However, if the total is superior at the number to guess, the lossing score increases, a loser message appears and the game resets.
            else if (totalScore > randomNumber) {
                losses++
                $("#losses").text("Losses: " + losses)
                reset()
                console.log("looser")
            }
        });
    }
});