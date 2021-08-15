var readlineSync = require("readline-sync");
var userName=readlineSync.question("Enter your Name:");
console.log("Welcome " + userName);
console.log("Let's check how well do you know me?");

var score=0;

var highScores=[
  score1={
    name:"Raj",
    score:5
  },
  score2={
    name:"Dj",
    score:4
  }];

function check(question, answer){
  var userAns=readlineSync.question(question);
  if(userAns.toUpperCase()===answer.toUpperCase()){
    console.log("Correct answer");
    score+=1;

  }
  else{
    console.log("Wrong answer");
    score-=1;
  }
  console.log("Your score:"+score + "\n");
}



var questionset = [question1={
  question: "\nWhere do i live? ",
  answer: "Chennai"
},

question2 = {
  question: "What is my favourite color?",
  answer: "Blue"
},

question3 = {
  question: "What is my favourite hobby?",
  answer: "Photography"
},

question4 = {
  question: "Who is my favourite cricketer?",
  answer: "Dhoni"
},

question5 = {
  question: "Which place do I like the most?(Enter the option a or b) \n a.Beach b.Mountain\n",
  answer: "a"
}];

for (i=0;i<questionset.length;i++){
 var currentQues=questionset[i];
 check(currentQues.question,currentQues.answer);
}


console.log("Your Final score:"+score);

console.log("\nHighest Scores:")
for(j=0;j<highScores.length;j++){
  var currentScore=highScores[j];
  
  console.log("Name :"+currentScore.name + "\t" +"Score :"+currentScore.score);
  
}


if(score==5){
  console.log("\nGreat "+userName +", You know me well.");
  console.log("Send me your score screenshot to update the score list.")
}



