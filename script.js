const button = document.getElementById("button");
const maxDisplay = document.getElementById("max-displayer");

let points = 0;
let chance = 1;
let max = 0;

function buttonOnClick() {
    if (Math.random() < chance) {
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
    maxDisplay.innerText = `${max}`
}

button.addEventListener("click", buttonOnClick);