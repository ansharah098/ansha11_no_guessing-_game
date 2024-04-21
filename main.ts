console.log("Welcome to number guessing game!!!");
console.log("choose one number between 1 to 10");
let number:number= Math.floor((Math.random()*4)+1);
import inquirer from "inquirer";
let user_input=await inquirer.prompt({
    type:`input`,
    name:`answer`,
    message:`Please enter any one number between 1 to 10`,

})
if (user_input.answer==number){
console.log("Congratulations!!! your answer is correct")
console.log("you win!!!")}
else{
    console.log(`Oops!! you fail correct answer is:${number}`);
}


