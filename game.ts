import {words} from "./words";
import inquirer from "inquirer";

const word: string = words[Math.floor(Math.random()*words.length)];

let stuff = "";

for (let i = 0;i < word.length;i++){
    stuff += "_ ";
}

console.log(stuff);