#! /usr/bin/evn Node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1 to 10",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("congtratulation your answer is right");
}
else {
    console.log("OHHH! YOUR ANSWER IS WRONG");
}
console.log(randomNumber);
