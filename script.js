const button = document.getElementById("button");
const maxDisplay = document.getElementById("max-displayer");
const totalDisplay = document.getElementById("total-displayer");

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