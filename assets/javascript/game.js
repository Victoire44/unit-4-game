$(document).ready(function () {

    var randomNumber = ""
    var random = []

    var wins = 0
    var losses = 0
    var total = 0

    //Function to initialize the game
    function reset() {
        randomNumber = ""
        wins = 0
        losses = 0
        total = 0
        random[0] = Math.floor(Math.random() * 11) + 1
        random[1] = Math.floor(Math.random() * 11) + 1
        random[2] = Math.floor(Math.random() * 11) + 1
        random[3] = Math.floor(Math.random() * 11) + 1
    }
    reset();

    //Random number at the start of the game
    randomNumber = Math.floor(Math.random() * 101) + 19
    $("#random-number").text(randomNumber)


    //when you click on the image, the total adds up

    $("#button-1").on('click', function () {
        total =+ random[0]
        $("#total").text(total)
        console.log(total)
    })
    $("#button-2").on('click', function () {
        total += random[1]
        $("#total").text(total)
        console.log(total)
    })
    $("#button-3").on('click', function () {
        total += random[2]
        $("#total").text(total)
        console.log(total)
    })
    $("#button-4").on('click', function () {
        total += random[3]
        $("#total").text(total)
        console.log(total)
    })


    // if (total = randomNumber) {
    //     wins++;
    //     reset()
    //     alert("You win")
    // }
    // else {
    //     losses--
        
    // alert("You lost")
    //   reset()
    // }
























});