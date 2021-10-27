'use strict';

let firstName = "";
let answer1, answer2, answer3, answer4, answer5;
let score = 0;
let secretNum = Math.trunc((Math.random()* 10)) + 1;

function getName() {
    firstName = prompt("Enter your first name!", "First Name...");
    document.querySelector('h2').textContent = `Welcome to my website ${firstName}!`;
   }

getName();

function question(ask){
    let answer = prompt(ask, "Y or N");
    console.log(answer);
    while (answer.toUpperCase() !== "Y" && answer.toUpperCase() !== "N"){
        answer = prompt(ask, "Try again... Y or N");
    }
    return answer.toUpperCase();
};

function nIsCorrect (answer) {
    if (answer === "Y") {
        // console.log("⛔️ wrong answer ⛔️");
        alert("⛔️ wrong answer ⛔️");
        } else {
            // console.log("🎉 correct! 🎉");
            alert("🎉 correct! 🎉");
            score++;
        }
}

function yIsCorrect (answer){
    if (answer === "Y") {
        // console.log("🎉 correct! 🎉");
        alert("🎉 correct! 🎉");
        score++;
    } else {
        // console.log("⛔️ wrong answer ⛔️");
        alert("⛔️ wrong answer ⛔️");
    }
}


// document.querySelector('#test').addEventListener('click', function(){
//     score = 0;
//     answer1 = question("Erik lives in Seatac Washington.");
//     // N is correct, Y is wrong
//     nIsCorrect(answer1);

//     answer2 = question("Erik has two (2) childeren.");
//     // Y is correct, N is wrong
//     yIsCorrect(answer2);

//     answer3 = question("Erik graduated from WWU with a Mechanical Engineering Degree");
//     // N is correct, Y is wrong
//     nIsCorrect(answer3);

//     answer4 = question("Erik helped manufacture components of the Valve Index VR system");
//     // Y is correct, N is wrong
//     yIsCorrect(answer4);

//     answer5 = question("Erik is trying to become a full stack Java software developer");
//     // N is correct, Y is wrong
//     nIsCorrect(answer5);

//     alert(`Congrats ${firstName} you got ${score}/5 Correct!`);

//     document.querySelector('#score').textContent = `Score: ${score}/5`
// });

let numGuess = prompt("Guess a number between 1 - 10")
console.log(secretNum);

for (let i = 1; i <= 4; i++){
    while (numGuess < 1 || numGuess > 10) {
        // console.log(typeof(numGuess));
        numGuess = prompt("Try again... a number");
    }
    if (Number(numGuess) === secretNum){
        alert("🎉 Correct! 🎉");
        score ++;
        break;
    } else if (i === 4) {
        alert(`Sorry the correct number was ${secretNum}`);
    } else if (numGuess > secretNum) {
        numGuess = prompt("⬆️ Too High ⬆️ Guess Again!", `${4 - i} guesses left`);
    } else {
        numGuess = prompt("⬇️ Too Low ⬇️ Guess Again!", `${4 - i} guesses left`);
    }
}




