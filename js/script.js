//controll btn
const strat = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
// times varibable;
const Hourse = document.getElementById('hr');
const Minuts = document.getElementById('min');
const Seconds = document.getElementById('sec');
const Milisecond = document.getElementById('milisec');
const loading = document.querySelectorAll('.clockline li');
const pElem = document.querySelector('.container p');
let counter, i, j;
counter = i = j = 0;
let interval1, interval2;
//function get milisecond
function GetMiliSec() {
    const time = new Date();
    Milisecond.innerHTML = Math.round(time.getMilliseconds() / 10);
}
// function Get Miuts
function Times() {
    counter++;
    if (counter < 9) {
        Seconds.innerHTML = `0${counter}`;
    }
    if (counter > 60) counter = 0;
    Seconds.innerHTML = counter;
    if (counter == 60) {
        i++;
        if (i < 10) Minuts.innerHTML = `0${i}`;
        if (i > 60) i = 0;
    }
}
// fuction Pause loading and timer
function PauseTime() {
    clearInterval(interval1);
    clearInterval(interval2);
    for (let i = 0; i < 100; i++) {
        loading[i].classList.remove('active');
    }
    pElem.style.color = "var(--frist-color)";
}
// start function
function starter() {
    clearInterval(interval1);
    clearInterval(interval2);
    interval1 = setInterval(GetMiliSec, 10);
    interval2 = setInterval(Times, 1000);
    for (let i = 0; i < 100; i++) {
        loading[i].classList.add('active');
    }
    pElem.style.color = "var(--fourth-color)";
}
//add event to contoll button
strat.addEventListener('click', starter);
pause.addEventListener('click', PauseTime);
reset.addEventListener('click', () => {
    Hourse.innerHTML = Minuts.innerHTML = Seconds.innerHTML = Milisecond.innerHTML = "00";
    counter = i = j = 0;
    for (let i = 0; i < 100; i++) {
        loading[i].classList.remove('active');
    }
    pElem.style.color = "var(--frist-color)";
    PauseTime();
});