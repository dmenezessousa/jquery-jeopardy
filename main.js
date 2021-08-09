//queried body tag
const body = $("body");

//created top section that includes title and score
const titleDiv = $("<div id='app-title'><h1>JEOPARDY!</h1><div id='score-div'>YOUR SCORE: 0</div></div>");

body.append(titleDiv);

//created jeopardy board elements prior to styling
const boardDiv = $("<div id='board-grid'></div>");
body.append(boardDiv);

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
const answerLabel = $('<div id=\'answer-div\'><div id="answer-label" class="answer">YOUR ANSWER<input type="text" class="answer" id="answer-input"><button id="submit" class="answer">SUBMIT</button><button id="reset" class="answer">RESET SCORE</button></div></div>');

body.append(answerLabel);

//queried individual value boxes
const box100 = $(".board-100");
const box200 = $(".board-200");
const box400 = $(".board-400");
const box600 = $(".board-600");
const box800 = $(".board-800");

//filtered each set of objects based on their values
const questions100 = QUESTIONS.filter((val) => val.value === "$100");
const questions200 = QUESTIONS.filter((val) => val.value === "$200");
const questions400 = QUESTIONS.filter((val) => val.value === "$400");
const questions600 = QUESTIONS.filter((val) => val.value === "$600");
const questions800 = QUESTIONS.filter((val) => val.value === "$800");

//initiated placeholder variables that will assist when user clicks each button and submits answer
let currentQuestion = "";
let currentAnswer = "";
let currentQuestionValue = "";

//looped through each set of boxes based on values and added click event listener that when clicked, question is displayed on the DOM
for (const rawButton of box100) {
    const button100 = $(rawButton);

    button100.click(() => {
    let question =
    questions100[Math.floor(Math.random() * questions100.length).toFixed(0)];
    currentQuestion = question.question;
    questionAnswerDisplay.html(currentQuestion);

    currentAnswer = question.answer;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
    });
}

for (const rawButton of box200) {
    const button200 = $(rawButton);

    button200.click(() => {
    let question =
    questions200[Math.floor(Math.random() * questions200.length).toFixed(0)];
    currentQuestion = question.question;
    questionAnswerDisplay.html(currentQuestion);

    currentAnswer = question.answer;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
});
}

for (const rawButton of box400) {
    const button400 = $(rawButton);

    button400.click(() => {
    let question =
    questions400[Math.floor(Math.random() * questions400.length).toFixed(0)];
    currentQuestion = question.question;
    questionAnswerDisplay.html(currentQuestion);

    currentAnswer = question.answer;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
    });
}

for (const rawButton of box600) {
    const button600 = $(rawButton);

    button600.click(() => {
    let question =
    questions600[Math.floor(Math.random() * questions600.length).toFixed(0)];
    currentQuestion = question.question;
    questionAnswerDisplay.html(currentQuestion);

    currentAnswer = question.answer;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
    });
}

for (const rawButton of box800) {
    const button800 = $(rawButton);

    button800.click(() => {
    let question =
    questions800[Math.floor(Math.random() * questions800.length).toFixed(0)];
    currentQuestion = question.question;
    questionAnswerDisplay.html(currentQuestion);

    currentAnswer = question.answer;
    currentQuestionValue = question.value;
    console.log(currentAnswer);
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

//when a square is clicked on it becames gray.
$(".board-box").click(function(){
    $(this).css({"backgroundColor" : "gray"});
});
//reset score



