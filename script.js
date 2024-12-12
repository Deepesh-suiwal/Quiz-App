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
let dummy = [];
let user = null;
let question = null;
const questiondiv = document.querySelector(".question");
const options = document.querySelectorAll(".option");
const mainOption = document.querySelector("#options");
const quizdiv = document.querySelector("#quiz");
const startdivbutton = document.querySelector("#sub-start");
const selectboxes = document.querySelector("#content-starts");
const playerNames = localStorage.getItem("ls_name") === null ? [] : JSON.parse(localStorage.getItem("ls_name"));




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
        // localStorage.setItem("ls_name", input.value);
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
        main.style.display = "block";
        heading4.append( user[user.length - 1].name)
    }


}


startdivbutton.addEventListener("click", displayquestion);


function displayquestion() {
    quizdiv.classList.remove("gayab");
    selectboxes.classList.add("gayab");
    showquestionoptions();
}
function showquestionoptions() {
    questiondiv.innerHTML = QuestionData[selectquestion()].q;
    options.forEach((option, index) => {
        option.innerHTML = QuestionData[question].opt[index];
    });
    // mainOption.classList.remove("gayab")
}

function selectquestion() {
    question = Math.floor(Math.random() * QuestionData.length);

    if (dummy.includes(question)) return selectquestion()
    else {
        console.log(question)
        dummy.push(question)
        return question
    }
}


