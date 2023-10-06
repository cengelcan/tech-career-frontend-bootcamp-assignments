const horse1 = document.getElementById("horse1");
const horse2 = document.getElementById("horse2");
const horse3 = document.getElementById("horse3");
const controllerButton = document.getElementById("control-button");
const result = document.getElementById("race-result");
const finishline = document.getElementById("race-finish-line");
let x1 = 0, x2 = 0, x3 = 0;
let timerId = null;

function rast() {
    return Math.floor(Math.random() * 10);
}

function move() {
    x1 += rast();
    x2 += rast();
    x3 += rast();
    horse1.style.left = x1 + "px";
    horse2.style.left = x2 + "px";
    horse3.style.left = x3 + "px";

    let lead = leadiing();
    result.textContent = lead.alt + " is leading the race."

    if (lead.offsetLeft + lead.width > finishline.offsetLeft) {
        result.textContent = lead.alt + " won the race.";
        end();
    }
}

function end() {
    clearInterval(timerId);
    timerId = null;
    controllerButton.textContent = "New Race"
}

function leadiing() {
    let leadingHorse = horse1;

    if (horse2.offsetLeft > leadingHorse.offsetLeft) {
        leadingHorse = horse2
    }
    if (horse3.offsetLeft > leadingHorse.offsetLeft) {
        leadingHorse = horse3
    }

    return leadingHorse;
}

controllerButton.onclick = function () {
    if (controllerButton.textContent == "New Race") {
        x1 = x2 = x3 = 0;
        horse1.style.left = horse2.style.left = horse3.style.left = "0px";
        controllerButton.textContent = "Start";
        result.textContent = "Horses are ready to Race";
    }
    if (timerId == null) {
        timerId = setInterval(move, 100);
        controllerButton.textContent = "Stop";
    }
    else if (controllerButton.textContent == "Stop") {
        clearInterval(timerId);
        timerId = null;
        controllerButton.textContent = "Continue"
    }
}