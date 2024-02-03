import chalk from "chalk";
import inquirer, { Answers } from 'inquirer';
inquirer.prompt([{
    name: 'operator',
    type: "list",
    message: 'Select the operator?',
    choices: ["+","-","*", "/"]
},
{
    name: 'num1',
    type: "number",
    message: 'Enter number1?',
},
{
    name: 'num2',
    type: "number",
    message: 'Enter number2?',
}
])
.then((answer:Answers)=>{
console.log('answer:',answer.operator);
if(answer.operator=="+"){
    console.log(chalk.green(`${answer.num1} +${answer.num2}= ${answer.num1+answer.num2}`));
}
else if(answer.operator=="-"){
    console.log(chalk.yellow(`${answer.num1} -${answer.num2}= ${answer.num1-answer.num2}`));
}
else if(answer.operator=="*"){
    console.log(chalk.red(`${answer.num1} *${answer.num2}= ${answer.num1*answer.num2}`));
}
else if(answer.operator=="/"){
    console.log(chalk.blue(`${answer.num1} /${answer.num2}= ${answer.num1/answer.num2}`));
}
else{
    console.log("invalid no");
}
})
.catch((error)=>{
    if(error.isTtyError){
        console.log('prompt cant be executed');
    }
    else{
        console.log('something else went wrong');
    }
})