import QuestionData from "./questions.js";

const createUser = document.querySelector("#btn1");
const startQuiz = document.querySelector("#btn2");
const Create = document.querySelector("#btn-btn1");
const Quit = document.querySelector("#btn-btn2");
const input = document.querySelector("#input");
const parent = document.querySelector("#parent");
const popup1 = document.querySelector("#popupbox1");
const wrapper = document.querySelector("#wrapper");
const main = document.querySelector("#main");
const red = document.querySelector("#red p");
const green = document.querySelector("#green p");
const heading4 = document.querySelector("#heading4");
const timer = document.querySelector(".timer");
const wellDoneBox = document.querySelector("#welldone");
const coding = document.querySelector(".topicThree");
const stop = document.querySelector("#Stop");
const showresult = document.querySelector(".showresult");
const getresult = document.querySelector("#Result");
const nextquestion = document.querySelector("#Next");
const playagain = document.querySelector("#Again");
const Quit2 = document.querySelector("#Quit2");
const clearscreen = document.querySelector(".exit");
const ShowScore = document.querySelector("#showscore");
const tickboxes = document.querySelector("#content-starts");
const scorebox = document.querySelector("#scorebox");
const displayscore = document.querySelector("#displayfinalscore");
const displaydate = document.querySelector("#displaydateandtime");






let normal = 0;
let normal1 = 0;
let time = 5
let dummy = [];
let useranswer = [];
let user = null;
let question = null;
const questiondiv = document.querySelector(".question");
const options = document.querySelectorAll(".option");
const mainOption = document.querySelector("#options");
const quizdiv = document.querySelector("#quiz");
const startdivbutton = document.querySelector("#sub-start");
const selectboxes = document.querySelector("#main");
const playerNames = localStorage.getItem("ls_name") === null ? [] : JSON.parse(localStorage.getItem("ls_name"));
let interval;




Quit.addEventListener("click", () => {
    popup1.style.display = "none";
    input.value = "";
})

createUser.addEventListener("click", () => {
    popup1.style.display = "block";
})

Create.addEventListener("click", create);

function create() {
    if (input.value === "") {
        alert("Please enter your name:");
    }
    else {
        popup1.style.display = "none";
        createUser.style.display = "none"
        const obj = { name: input.value };
        playerNames.push(obj);
        localStorage.setItem("ls_name", JSON.stringify(playerNames));
        let div = document.createElement("div");
        div.classList = "user";
        user = JSON.parse(localStorage.getItem("ls_name"));
        div.innerHTML = user[user.length - 1].name
        div.style.color = "#000";
        parent.append(div);
        green.style.display = "block";
        setTimeout(() => {
            green.style.display = "none";
        }, 2000);
        name()


    }

}

startQuiz.addEventListener("click", START);

function START() {

    if (input.value === "") {
        red.style.display = "block";

        setTimeout(() => {
            red.style.display = "none";
        }, 2000);
    }

    else {
        wrapper.style.display = "none";
        selectboxes.classList.remove("gayab");
        heading4.append(user[user.length - 1].name)
    }


}


startdivbutton.addEventListener("click", displayquestion);


function displayquestion() {
    if (normal <= 0) {
        alert("Please select one option out of 3 options");
    }
    else {
        quizdiv.classList.remove("gayab");
        selectboxes.classList.add("gayab");
        normal1++;
        startTime()
        showquestionoptions();
    }

}
function showquestionoptions() {
    questiondiv.innerHTML = QuestionData[selectquestion()].q;
    options.forEach((option, index) => {
        option.innerHTML = QuestionData[question].opt[index];
    });
    mainOption.classList.remove("gayab")
}

function selectquestion() {
    question = Math.floor(Math.random() * QuestionData.length);

    if (dummy.includes(question)) return selectquestion()
    else {
        // console.log(question)
        dummy.push(question)
        return question
    }
}

function startTime() {
    timer.innerHTML = time
    interval = setInterval(() => {
        if (time == 1) {
            time = 5;
            timer.innerHTML = time

            if (dummy.length == 5) {
                quizdiv.classList.add("gayab");
                wellDoneBox.classList.remove("gayab");
                clearInterval(interval)
            }
            else {
                options.forEach(option => {
                    option.classList.remove("clicked")
                })
                showquestionoptions()
                mainOption.classList.remove("gayab");

            }
        }
        else {
            timer.innerHTML = --time
        }
    }, 1000)
}


coding.addEventListener("click", bordergreen);

function bordergreen() {
    coding.style.border = "4px solid green"
    icon.style.display = "block"
    normal++;
}

stop.addEventListener("click", stopquiz);

function stopquiz() {
    selectboxes.classList.remove("gayab");
    quizdiv.classList.add("gayab");
    icon.style.display = "none";
    normal = 0;
    dummy = []
    clearInterval(interval)
}
Quit2.addEventListener("click", quitsession);

function quitsession() {
    selectboxes.classList.remove("gayab");
    wellDoneBox.style.display = "none";
    icon.style.display = "none";
    // normal = 0;

}


options.forEach((option) => {
    option.addEventListener("click", storeUserAnswer);

});

function storeUserAnswer(e) {
    useranswer.push(e.target.innerHTML);
    options.forEach(option => {
        option.classList.add("clicked")
    })
}

function calculateScore() {
    console.log(useranswer);
    console.log(dummy)
    let finalScore = 0;
    useranswer.forEach((answer, index) => {
        if (answer == QuestionData[dummy[index]].a) {
            console.log(answer, QuestionData[dummy[index]].a);
            finalScore++;
        }

    });
    showresult.innerHTML =
        "Your score is " + finalScore + " out of " + QuestionData.length;
    displayscore.innerHTML =
        finalScore + " out of " + QuestionData.length;
}

getresult.addEventListener("click", displayresult);

function displayresult() {
    showresult.style.display = "block"
    calculateScore()
}

nextquestion.addEventListener("click", nextquestiondisplay);

function nextquestiondisplay() {
    options.forEach(option => {
        option.classList.remove("clicked")
    })
    showquestionoptions()
    time = 5;
    timer.innerHTML = time
}

playagain.addEventListener("click", startagain);

function startagain() {
    wellDoneBox.classList.add("gayab");
    dummy = [];
    showresult.style.display = "none";
    useranswer.length = 0;
    displayquestion()
}

clearscreen.addEventListener("click", screen1);

function screen1() {
    selectboxes.style.display = "none";
    wrapper.style.display = "block";
}


ShowScore.addEventListener("click", ShowScore1)


function ShowScore1() {
    if (normal1 <= 0) {
        alert("first start a quiz")
    }
    else {
        tickboxes.classList.add("gayab");
        scorebox.style.display = "block";
    }



}

function name() {
    const date = new Date();
    const time = date.toLocaleString();
    localStorage.setItem("TD", time);
    let data = localStorage.getItem("TD");

    displaydate.innerHTML = data
}