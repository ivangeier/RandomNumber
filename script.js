// Random Number

function random(until) {
    return Math.floor(Math.random() * until + 1);
}

function play() {
    let input = document.getElementById("input");

    if (isNaN(input.value) || input.value == "") {
        var number = random(100);
    } else {
        var number = random(input.value);
    }

    document.getElementById("result").innerText = number;
}

let button = document.getElementById("button");

button.addEventListener("click", play);
