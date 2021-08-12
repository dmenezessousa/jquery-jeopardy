const gameMusic = new Audio('Jeopardy-theme-song.mp3');

//queried body tag
const body = $("body");


//created top section that includes title and score
const titleDiv = $("<div id='app-title'><h1>JEOPARDY!</h1><div id='score-div'>YOUR SCORE: 0</div></div>");

body.append(titleDiv);

//created jeopardy board elements prior to styling
const questionDiv = $("<div id='question-grid'></div>");
const boardDiv = $("<div id='board-grid'></div>");
const categories = $("<div id='categories' class='board-box board-categories'>HISTORY</div>");
const categories2 = $("<div id='categories2' class='board-box board-categories'>ESPN's TOP 10</div>");
const categories3 = $("<div id='categories3' class='board-box board-categories'>EVERYBODY TALKS ABOUT IT</div>");
const categories4 = $("<div id='categories4' class='board-box board-categories'>THE COMPANY LINE</div>");
const categories5 = $("<div id='categories5' class='board-box board-categories'>EPITAPHS & TRIBUTES</div>");
body.append(questionDiv);
body.append(boardDiv);
questionDiv.append(categories);
questionDiv.append(categories2);
questionDiv.append(categories3);
questionDiv.append(categories4);
questionDiv.append(categories5);


for (let i = 0; i < 5; i++) {
    const box100 = $("<div class='board-box board-100'>$100</div>");
    boardDiv.append(box100);
}

for (let i = 0; i < 5; i++) {
    const box200 = $("<div class='board-box board-200'>$200</div>");
    boardDiv.append(box200);
}

for (let i = 0; i < 5; i++) {
    const box400 = $("<div class='board-box board-400'>$400</div>");
    boardDiv.append(box400);
}

for (let i = 0; i < 5; i++) {
    const box600 = $("<div class='board-box board-600'>$600</div>");
    boardDiv.append(box600);
}

for (let i = 0; i < 5; i++) {
    const box800 = $("<div class='board-box board-800'>$800</div>");
    boardDiv.append(box800);
}

//created element where the question and answer will be displayed and appended to DOM
const questionAnswerDisplay = $('<div id="question-answer-display">Answer</div>');
body.append(questionAnswerDisplay);

//created bottom section where user will type out answer and submit for points
const answerLabel = $(`
    <div id=\'answer-div\'>
    <div id="answer-label" class="answer">YOUR ANSWER<input type="text" class="answer" id="answer-input">
    <button id="submit" class="answer">SUBMIT</button>
    <button id="reset" class="answer">RESET SCORE</button></div></div>
    `);

body.append(answerLabel);

//queried individual value boxes
let box100 = $(".board-100");
let box200 = $(".board-200");
let box400 = $(".board-400");
let box600 = $(".board-600");
let box800 = $(".board-800");
let historyCategoryBox = $("#categories");
let espnCategoryBox = $("#categories2");
let everybodyTalksBox = $("#categories3");
let companyLineBox = $("#categories4");
let epitahsCategoryBox = $("#categories5");

//filtered each set of objects based on their values
let questions100 = QUESTIONS.filter((val) => val.value === "$100");
let questions200 = QUESTIONS.filter((val) => val.value === "$200");
let questions400 = QUESTIONS.filter((val) => val.value === "$400");
let questions600 = QUESTIONS.filter((val) => val.value === "$600");
let questions800 = QUESTIONS.filter((val) => val.value === "$800");
let historyCategory = QUESTIONS.filter((val) => val.category === "HISTORY");
let espnCategory = QUESTIONS.filter((val) => val.category === "ESPN's TOP 10 ALL-TIME ATHLETES");
let everybodyTalks = QUESTIONS.filter((val) => val.category === "EVERYBODY TALKS ABOUT IT...");
let companyLine = QUESTIONS.filter((val) => val.category === "THE COMPANY LINE");
let epitahsCategory = QUESTIONS.filter((val) => val.category === "EPITAPHS & TRIBUTES");



historyCategoryBox.click(() =>{
    questions100 = historyCategory;
    questions200 = historyCategory;
    questions400 = historyCategory;
    questions600 = historyCategory;
    questions800 = historyCategory;
});

espnCategoryBox.click(() =>{
    questions100 = espnCategory;
    questions200 = espnCategory;
    questions400 = espnCategory;
    questions600 = espnCategory;
    questions800 = espnCategory;
});
everybodyTalksBox.click(() =>{
    questions100 = everybodyTalks;
    questions200 = everybodyTalks;
    questions400 = everybodyTalks;
    questions600 = everybodyTalks;
    questions800 = everybodyTalks;
});
companyLineBox.click(() =>{
    questions100 = companyLine;
    questions200 = companyLine;
    questions400 = companyLine;
    questions600 = companyLine;
    questions800 = companyLine;
});
epitahsCategoryBox.click(() =>{
    questions100 = epitahsCategory;
    questions200 = epitahsCategory;
    questions400 = epitahsCategory;
    questions600 = epitahsCategory;
    questions800 = epitahsCategory;
});
//initiated placeholder variables that will assist when user clicks each button and submits answer
let currentQuestion = "";
let currentAnswer = "";
let currentQuestionValue = "";

//looped through each set of boxes based on values and added click event listener that when clicked, question is displayed on the DOM
for (const rawButton of box100) {
    const button100 = $(rawButton);

    button100.click(() => {
    gameMusic.play();
    let question =
    questions100[Math.floor(Math.random() * questions100.length).toFixed(0)];//pick a random question
    currentQuestion = question.question;
    questionAnswerDisplay.html(currentQuestion);//display that random question

    currentAnswer = question.answer;
    currentCategory = question.category;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
    console.log(currentCategory);
    });
}

for (const rawButton of box200) {
    const button200 = $(rawButton);

    button200.click(() => {
    gameMusic.play();
    let question =
    questions200[Math.floor(Math.random() * questions200.length).toFixed(0)];
    currentQuestion = question.question;
    questionAnswerDisplay.html(currentQuestion);

    currentAnswer = question.answer;
    currentCategory = question.category;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
    console.log(currentCategory);
});
}

for (const rawButton of box400) {
    const button400 = $(rawButton);

    button400.click(() => {
    gameMusic.play();
    let question =
    questions400[Math.floor(Math.random() * questions400.length).toFixed(0)];
    currentQuestion = question.question;
    questionAnswerDisplay.html(currentQuestion);

    currentAnswer = question.answer;
    currentCategory = question.category;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
    console.log(currentCategory);
    });
}

for (const rawButton of box600) {
    const button600 = $(rawButton);

    button600.click(() => {
    gameMusic.play();
    let question =
    questions600[Math.floor(Math.random() * questions600.length).toFixed(0)];
    currentQuestion = question.question;
    questionAnswerDisplay.html(currentQuestion);

    currentAnswer = question.answer;
    currentCategory = question.category;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
    console.log(currentCategory);
    });
}

for (const rawButton of box800) {
    const button800 = $(rawButton);

    button800.click(() => {
    gameMusic.play();
    let question =
    questions800[Math.floor(Math.random() * questions800.length).toFixed(0)];
    currentQuestion = question.question;
    questionAnswerDisplay.html(currentQuestion);

    currentAnswer = question.answer;
    currentCategory = question.category;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
    console.log(currentCategory);
    });
}

//queried answer input, submit button, and score display div
const inputAnswerText = $("#answer-input");
const submitButton = $("#submit");
const resetScore = $("#reset");
const scoreDisplay = $("#score-div");

//initiated counter variable that will keep track of score
let score = 0;
const storedScore = localStorage.getItem("storedScore");
if (storedScore !== null) {
    score += Number(storedScore);
    scoreDisplay.text(`Your Score: ${score}`);
}
//added event listener to submit button that when clicked if answer inputted by user is correct, "Correct!" will be displayed on DOM and if not correct, the correct answer will be displayed on DOM. Also score will also be displayed on DOM and will be kept on track
submitButton.click(() => {
    if (inputAnswerText.val() === currentAnswer) {
    questionAnswerDisplay.text("Correct!");
    score += Number(currentQuestionValue.slice(1));
    scoreDisplay.text(`Your Score: ${score}`);
    inputAnswerText.val("");

    localStorage.setItem("storedScore", score);
    } else {
    questionAnswerDisplay.text(currentAnswer);
    }
});

//reset Scores and Square Color.
resetScore.click(() =>{
    localStorage.clear("storedScore");
    $(".board-box").css({"backgroundColor" : "blue"});
    location.reload();
});

//when a square is clicked on it becames gray and unclickable.
$(".board-box").click(function(){
    $(this).css({"backgroundColor" : "gray"});
    $(this).css({"pointerEvents" : "none"});
});




