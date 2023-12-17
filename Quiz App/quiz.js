const questions=[
    {
        question:"Inside which HTML element do we put the JavaScript?",
        answers:[
            {text:"scripting",correct:false},
            {text:"javascript",correct:false},
            {text:"js",correct:false},
            {text:"script",correct:true},
        ]
    },
    {
        question:"Where is the correct place to insert a JavaScript?",
        answers:[
            {text:"The body Section",correct:false},
            {text:"The head Section",correct:false},
            {text:"Both body and head Section",correct:true},
            {text:"In title tag",correct:false},
        ]
    },
    {
        question:"How do you create a function in JavaScript?",
        answers:[
            {text:"function:myFunction()",correct:false},
            {text:"function myFunction()",correct:true},
            {text:"function = myFunction()",correct:false},
            {text:"myFunction=function",correct:false},
        ]
    },
    {
        question:"How to write an IF statement in JavaScript?",
        answers:[
            {text:"if i = 5",correct:false},
            {text:"if i == 5 then",correct:false},
            {text:"if i = 5 then",correct:false},
            {text:"if (i == 5)",correct:true},
        ]
    },
    {
        question:"Which of the following function of String object returns the character at the specified index?",
        answers:[
            {text:"charAt()",correct:true},
            {text:"charCodeAt()",correct:false},
            {text:"concat()",correct:false},
            {text:"indexof()",correct:false},
        ]
    },
];


const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer");
const nextButtton=document.getElementById("next");

let currentQuestionindex=0;
let score=0;

function startQuiz(){
    currentQuestionindex=0;
    score=0;
    nextButtton.innerHTML="Next";
    showQuestion();    
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo=currentQuestionindex+1;
    questionElement.innerHTML= questionNo+ ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click",selectAnswer);
        if(answer.correct){
            button.dataset.correct= answer.correct; 
        }
       
    });
}
function resetState(){
    nextButtton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect= selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct=== "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButtton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
}

function handleNextButton(){
    currentQuestionindex++;
    if(currentQuestionindex<questions.length){
       showQuestion();
    }else{
        showScore();
    }
    nextButtton.innerHTML="Play Again";
    nextButtton.style.display="block";

}

nextButtton.addEventListener("click",()=>{
    if(currentQuestionindex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();