const questionArr=[
    {
        question:"What is the fullform of 'IOT'?",
        answer:[
            {text:"Information of technology",correct:"false"},
            {text:"Internet of things",correct:"true"},
            {text:"Information of things",correct:"false"},
            {text:"Internet of technology",correct:"false"},
        ]
    },
       { 
        question:"What is the fullform of 'ICT'?",
        answer:[
            {text:"Inters connect Technology",correct:"false"},
            {text:"Internet connection Topolgy",correct:"false"},
            {text:"Information and communication Technology",correct:"true"},
            {text:"Inter communication Topohy",correct:"false"},
        ]
    },
    {
        question:"An IOT network is a collection of _____ devices.",
        answer:[
            {text:"Signal",correct:"false"},
            {text:"Machine to Machine",correct:"false"},
            {text:"Interconnected",correct:"true"},
            {text:"Network to Network",correct:"false"},
        ]
    },
    {
        question:"which of the follwing is the way in which an IOT device is associated with data?",
        answer:[
            {text:"Internet",correct:"false"},
            {text:"Cloud",correct:"true"},
            {text:"Automata",correct:"false"},
            {text:"Network",correct:"false"},
        ]},
        {
        question:"Which of the following is not a networking devices?",
        answer:[
            {text:"Switch",correct:"false"},
            {text:"Traffic Analyzer",correct:"true"},
            {text:"Network",correct:"false"},
            {text:"Bridge",correct:"false"},
        ]},
        {
        question:"Which of the following class handles publishing messeges?",
        answer:[
            {text:"Publish()",correct:"false"},
            {text:"Server()",correct:"false"},
            {text:"Client()",correct:"true"},
            {text:"Batch()",correct:"false"},
        ]},
        {
        question:"What is the role of Big Data in IOT's smart grid architecture?",
        answer:[
            {text:"Fliter the data",correct:"false"},
            {text:"Locked the data",correct:"false"},
            {text:"Store data",correct:"true"},
            {text:"none",correct:"false"},
        ]},
        {
        question:"What is another name of the tactile sensor?",
        answer:[
            {text:"Weight sensor",correct:"false"},
            {text:"Imaging sensor ",correct:"false"},
            {text:"Proximity sensor",correct:"false"},
            {text:"Touch",correct:"sesor"},
        ]},
        {
        question:"Which of the following is the type of SPI controller?",
        answer:[
            {text:"Micro-wire or plus",correct:"false"},
            {text:"Microwire",correct:"false"},
            {text:"Data SPI",correct:"false"},
            {text:"Queued SPI",correct:"true"},
        ]},
        {
        question:"What is the standard post number of secure MQTT?",
        answer:[
            {text:"1883",correct:"false"},
            {text:"8000",correct:"true"},
            {text:"8883",correct:"true"},
            {text:"8888",correct:"false"},
        ]},
        {
        question:"The automation of communication between devices , with no humain intervention.",
        answer:[
            {text:"sensor",correct:"false"},
            {text:"M2M",correct:"true"},
            {text:"Big Data",correct:"false"},
            {text:"Wearables",correct:"false"},
        ]},
        {
        question:"What does a DHT sensor measure?",
        answer:[
            {text:"Temperature",correct:"false"},
            {text:"Humidity",correct:"false"},
            {text:"Both(a)and(b)",correct:"true"},
            {text:"none",correct:"false"},
        ]},
        {
        question:"What is the fullform of 'IIOT'",
        answer:[
            {text:"Intense internet of Things",correct:"false"},
            {text:"Index internet of Technology",correct:"false"},
            {text:"Industrial internet of Things",correct:"true"},
            {text:"Incorporate Internet of Technology",correct:"false"},
        ]},
        {
        question:"Which of the folloeing is not an IOT platform",
        answer:[
            {text:"Amazon web services",correct:"false"},
            {text:"Microsoft Azure",correct:"false"},
            {text:"Salesforce",correct:"false"},
            {text:"Flipkart",correct:"true"},
        ]},
        {
        question:"Which of the folloeing is used to capture data from the physical world in IOT devices?",
        answer:[
            {text:"Sensor",correct:"true"},
            {text:"Actuators",correct:"false"},
            {text:"Microprocessors",correct:"false"},
            {text:"Microcontrollers",correct:"false"},
        ]
    }

    
]
let questions=document.querySelector("#question");
const optionContainer=document.querySelector(".option-container");
let nextBtn=document.querySelector(".nextbtn");

let currentQuestionIdx=0;
let score=0;

const startQuiz=()=>{
    currentQuestionIdx=0;
    score=0;
    nextBtn.innerHTML="next";
    showQuestion();
}

const showQuestion=()=>{
    resetState();
    let currentQuestion=questionArr[currentQuestionIdx];
    console.log(currentQuestion)
    let questionNo=currentQuestionIdx+1;
    questions.innerHTML = questionNo+"."+currentQuestion.question;
    console.log(questions.innerHTML)


    currentQuestion.answer.forEach(ans=>{
        const button=document.createElement("button");
        button.innerHTML=ans.text;
        button.classList.add("btn");
        optionContainer.appendChild(button);
        console.log(button)
         if(ans.correct){
            button.dataset.correct=ans.correct;
         }
            button.addEventListener("click",(e)=>{
                  const selectedBtn=e.target;
                  const iscorrect=selectedBtn.dataset.correct==="true";
                  if(iscorrect){
                    selectedBtn.classList.add("correct");
                    score++;
                  } else{
                    selectedBtn.classList.add("incorrect");
                  }
                  Array.from(optionContainer.children).forEach(button=>{
                    if(button.dataset.correct==="true"){
                        button.classList.add("correct");
                    
                    }
                    button.disabled="true"
                  });
                  nextBtn.style.display="block"
            })
           
        });
       
    }
     


const resetState=()=>{
    nextBtn.style.display="none";
      while(optionContainer.firstChild){
        optionContainer.removeChild(optionContainer.firstChild);
      }
}

const showScore=()=>{
    resetState();
    questions.innerHTML=`Your score ${score} out of ${questionArr.length}`;
    nextBtn.innerHTML="Play Again."
    nextBtn.style.display="block"
}
const handleNextButton=()=>{
    currentQuestionIdx++;
    if(currentQuestionIdx<questionArr.length){
        showQuestion();
    } else{
        showScore();
    }
}

nextBtn.addEventListener("click",()=>{
    if(currentQuestionIdx<questionArr.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});

startQuiz();


