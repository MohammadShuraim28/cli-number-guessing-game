import inquirer from "inquirer";
const randomNumber = 13;
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number",
    }
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("congtratulation your answer is right");
}
else {
    console.log("OHHH! YOUR ANSWER IS WRONG");
}
