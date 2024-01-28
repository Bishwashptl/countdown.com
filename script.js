const btn = document.getElementById("btn"); // button to start the countdown
const countdown = document.getElementById("head");
const inputSec = document.getElementById("input_sec"); // input element to get seconds from user
const btnStop = document.getElementById("btn_stop");// button to stop the countdown
const counterHeading = document.getElementById("counter");
const btnPlayPause = document.getElementById("btn_play_pause");// button to pause the countdown
const playPauseImg = document.getElementById("img_play_pause");
const inputSpeed = document.getElementById("input_speed");
btn.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnPlayPause.addEventListener("click", playPause);
// inputSec.addEventListener("click",() => {inputSec.style.border = "solid rgb(219, 130, 79) 2px"});


// to click the start button on pressing the Enter key
inputSec.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault;
        start();


    }
})

inputSpeed.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        start();
    }
})

document.body.onkeyup = function (e) {
    if (e.key == " ") {// when the spacebar is pressed call the playPause function.

        playPause();
    }
}



let time = 1;
let count;
let runInInterval;
let secondValueFromUser;
function start() {

    if (inputSpeed.value.length === 0) {

    } else {
        time = Number(inputSpeed.value);
    }
    secondValueFromUser = inputSec.value;
    if (secondValueFromUser.length === 0) {
        alert("Please set time");
    } else if (secondValueFromUser <= 0) {
        alert("Please enter positive values");
    } else {

        count = Number(secondValueFromUser);
        runInInterval = setInterval(startCountdown, sec(time));
    }
}


const startCountdown = () => {
    if (count < 0) {
        inputSpeed.style.display = "block";
        btnStop.style.display = "none";
        btnPlayPause.style.display = "none";
        inputSec.style.display = "block"
        countdown.style.display = "none";
        btn.style.display = "block";
        counterHeading.style.display = "block";
        clearInterval(runInInterval);
    } else {
        inputSpeed.style.display = "none";
        btnStop.style.display = "flex";
        btnPlayPause.style.display = "flex";
        btnStop.style.justifyContent = "center";
        btnStop.style.alignItems = "center";
        btnPlayPause.style.justifyContent = "center";
        btnPlayPause.style.alignItems = "center";
        counterHeading.style.display = "none";
        inputSec.style.display = "none";
        btn.style.display = "none";
        countdown.style.display = "block";
        countdown.innerHTML = "";
        if (count === 0) {
            countdown.innerHTML = "Go!!!";
        } else {

            countdown.innerHTML = count;
        }
        count--;
    }
}

let sec = a => a * 1000;

function stop() {
    // console.log("Stopped")
    inputSpeed.style.display = "block";
    counterHeading.style.display = "block";
    btnPlayPause.style.display = "none";
    btnStop.style.display = "none";
    inputSec.style.display = "block"
    countdown.style.display = "none";
    btn.style.display = "block";
    clearInterval(runInInterval);
}

let isPause = false;
function playPause() {
    if (isPause) {
        console.log(count);
        runInInterval = setInterval(startCountdown, sec(time));
        playPauseImg.setAttribute("src", "pause.svg");
        isPause = false;
    } else {
        clearInterval(runInInterval);
        playPauseImg.setAttribute("src", "play.svg");
        isPause = true
    }
}