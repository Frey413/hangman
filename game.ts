import {words} from "./words";
import * as Inquirer from "inquirer";

const word: string = words[Math.floor(Math.random()*words.length)];
const parts = word.split("");
let letter;
let correct = [""];
let incorrect = [];
let win: boolean = false;

main();

async function main() {
    printCurrentState();
    if (win) {
        console.log("You win!");
    }else if (incorrect.length > 4) {
        console.log("You lost! Too many wrong guesses.");
        console.log("The word was:" + word)
    }else {
        letter = await askForLetter();
        checkGuess();
        main();
    }
}

function printCurrentState() {
    
    let stuff = "";
    for (let i = 0;i < parts.length;i++) {
        for (let n = 0;n < correct.length;n++) {
            if (parts[i] == correct[n]) {
                stuff += correct[n] + " ";
                break;
            }else if (n == correct.length - 1) {
                stuff += "_ ";
            }
        }
    }
    console.log(stuff);
    console.log("Wrong guesses: " + incorrect);

    let splitStuff = stuff.split("");
    for (let i = 0;i < splitStuff.length;i++) {
        if (splitStuff[i] == "_") {
            break;
        }else if (i == splitStuff.length - 1){
            win = true;
        }
    }

}

async function askForLetter() {
    const answer = await Inquirer.prompt([{message: "Guess a letter", type: "input", name: "letter"}]);
    return answer.letter;
}

function checkGuess() {
    for (let i = 0;i < parts.length;i++) {
        if (letter == parts[i]) {
            correct.push(letter);
            break;
        }else if (parts.length - 1 == i){
            incorrect.push(letter);
        }
    }
}