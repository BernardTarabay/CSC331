// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const answer =Math.floor( Math.random()*(maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess A Number Between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
    }
    else if(guess < minNum || guess >maxNum){
        window.alert("Please enter a VALID NUMBER!");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH! TRY AGAIN!");
        }
        else{
            window.alert(`CORRECT!!! The answer was ${answer}. It took you ${attempts} to get it right!`);
            running = false;
        }
    }
}