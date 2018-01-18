 
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var randoLet;





  
$(document).ready(function () {
    
var guessed = [];

var wins = 0;

var losses = 0;

var lives = 10;



$(".wins").html(wins);

$(".losses").html(losses);

$(".lives").html(lives);

function newGame () {
    lives=10;
    guessed=[];
    $(".guesses").html(guessed);
    $(".lives").html(lives);
    randoLet = alphabet[Math.floor(Math.random() * 26)];
    console.log(randoLet);
    
};

newGame();

$(".newGame").click(function() {
    newGame();
});




    //When a key is pressed
    $("input").keyup(function (letter){

        

        var letterGuess = String.fromCharCode(letter.which).toLowerCase();

        var regex=/^[a-zA-Z]+$/;

       

        

        if(guessed.includes(letterGuess) === true) {
            alert("you've already guessed that letter, pick a new one");
        } else {
            guessed.push(letterGuess);
            $(".guesses").append(letterGuess.toUpperCase());
        };
        
        if (letterGuess === randoLet) {
            alert("You guessed it! The right letter was " + randoLet.toUpperCase());
            wins++;
            $(".wins").html(wins);
            newGame();
        } else if (lives > 1) {
            lives--;
            $(".lives").html(lives);
        } else if (lives <= 1){
            alert("you ran outta lives buckaroo. I was thinking of " + randoLet.toUpperCase() + ". Click OK to try again");
            losses++;
            $(".losses").html(losses);
            newGame();
        }
       
    });

});