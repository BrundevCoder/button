const button = document.getElementById("button");
const maxDisplay = document.getElementById("max-displayer");
const totalDisplay = document.getElementById("total-displayer");
const settingsBtn = document.getElementById("settings-btn");

let points = 0;
let chance = 1;
let max = 0;
let total = 0;

function buttonOnClick() {
    if (Math.random() < chance) {
        total++;
        points++;
        chance -= 0.01;
    }
    else {
        points = 0;
        chance = 1;
    }

    if (max < points) {
        max = points;
    }

    button.innerText = `${points}`;
    maxDisplay.innerText = `${max}`;
    totalDisplay.innerText = `${total}`;
}

button.addEventListener("click", buttonOnClick);

settingsBtn.addEventListener("click", () => {
    const settingScreen = document.getElementById("set-s");

    settingScreen.classList.toggle("active")
})

const blueBtn = document.getElementById("blueBtn");
const redBtn = document.getElementById("redBtn");
const pinkBtn = document.getElementById("pinkBtn");
const yellowBtn = document.getElementById("yellowBtn");
const summerBtn = document.getElementById("summerBtn");

blueBtn.addEventListener("click", () => {
    button.style.background = "#548aa3";
    button.style.borderColor = "#2b5061";
    button.style.boxShadow = "0 3px 0 #2b5061"
    button.style.color = "#2b5061";
})

redBtn.addEventListener("click", () => {
    button.style.background = "#FF4141";
    button.style.borderColor = "#8b1c1c";
    button.style.boxShadow = "0 3px 0 #8b1c1c"
    button.style.color = "#8b1c1c";
})

pinkBtn.addEventListener("click", () => {
    button.style.background = "#d15cd1";
    button.style.borderColor = "#58055f";
    button.style.boxShadow = "0 3px 0 #58055f"
    button.style.color = "#58055f";
})

yellowBtn.addEventListener("click", () => {
    button.style.background = "#c2c048";
    button.style.borderColor = "#4d4806";
    button.style.boxShadow = "0 3px 0 #4d4806"
    button.style.color = "#4d4806";
})

summerBtn.addEventListener("click", () => {
    button.style.background = "linear-gradient(-65deg, #e7e55a, #548aa3)";
    button.style.borderColor = "#4d4806";
    button.style.boxShadow = "0 3px 0 #4d4806"
    button.style.color = "#4d4806";
})