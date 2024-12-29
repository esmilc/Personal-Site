

const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum-minNum + 1))+ minNum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    
    if (isNaN(guess)) {
        window.alert("Please enter a valid number...");
    }
    else if (guess < minNum || guess > maxNum){
        window.alert("Make sure the number you entered is within bounds.")
    }
    else {
        attempts++;

        if (guess < answer){
            window.alert("TOO LOW!")
        }
        else if (guess > answer){
            window.alert("TOO HIGH!")
        }
        else {
            window.alert(`CORRECT!! The answer was ${answer}, it took you ${attempts} attempts!`)
            running = false;
        }
    }
}
