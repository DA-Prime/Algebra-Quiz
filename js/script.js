"strict use";
/* 
    Author: Daniel Avalos
    Date: 05/06/2025
    File Name: script.js
*/

let theTimeID;
let theStart = 120;

const theAnswers = [1, 15, 18, 5, -8, -1, 10, -7, -36, -10];
let quesList = document.querySelectorAll("#theQuiz input");
let theTable = document.getElementById("theQuestions");

let timerValue = document.getElementById("timerValue");
let startBtn = document.getElementById("startQuiz");
startBtn.disabled = false;

timerValue.value = theStart;
let timeThatsLeft = theStart;

startBtn.onclick = function() {
    theTable.className = "showTable";
    theTimeID = window.setInterval(theCountDown, 1000);
}

function theCountDown() {
    if (timeThatsLeft == 0) {
        window.clearInterval(theTimeID);
        let amountCorrect = checkTheAnswers();
        if (amountCorrect == theAnswers.length) {
            window.alert("You got the perfect score a 100! Great Job!");
        } else {
            window.alert("You got " + amountCorrect + " out of " + theAnswers.length + " questions correct. Therefore your final grade is a " + amountCorrect * 10 + ".");
            timeThatsLeft = theStart;
            timerValue.value = timeThatsLeft;
            theTable.className = "noDisplay";
        }
        timeThatsLeft = theStart;
        startBtn.disabled = false;
    } else {
        startBtn.disabled = true;
        timeThatsLeft--;
        timerValue.value = timeThatsLeft;
    }
}

function checkTheAnswers() {
    let correctAmount = 0;

    for (let i = 0; i < theAnswers.length; i++) {
        if (quesList[i].value == theAnswers[i]) {
            correctAmount++;
            quesList[i].className = "rightAns";
        } else {
            quesList[i].className = "wrongAns";
        }
    }
    return correctAmount;
}