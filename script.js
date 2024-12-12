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
        let div = document.createElement("div");
        div.classList = "user";
        div.innerHTML = input.value;
        div.style.color = "#000";
        parent.append(div);
        createUser.style.display = "none"
        localStorage.setItem("ls_name", input.value);

        green.style.display = "block";

        setTimeout(() => {
            green.style.display = "none";
        }, 2000);


    }
}

startQuiz.addEventListener("click", START);

function START() {
    let data = localStorage.getItem("ls_name");
    console.log(data);

    if (input.value === "") {
        red.style.display = "block";

        setTimeout(() => {
            red.style.display = "none";
        }, 2000);
    }

    else {
        wrapper.style.display = "none";
        main.style.display = "block";
        heading4.append(data)
    }




}


