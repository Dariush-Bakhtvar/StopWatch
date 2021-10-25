/** use event delegation for add unic click and add style */
/*
// const btnGroup = document.querySelector('.timer-btn-group');
// let selectedId;
// btnGroup.addEventListener('click', (event) => {
//     const target = event.target.closest('button');
//     if (!target) return;
//     if (target.matches('button')) AddStyle(target);
// });

// function AddStyle(target) {
//     if (selectedId) { // remove the existing highlight if any
//         selectedId.classList.remove('active-button');
//     }
//     selectedId = target;
//     selectedId.classList.add('active-button'); // highlight the new td
// }
/*
/** initial varible */

let [counter, i, j, playerCounter] = Array(3).fill(0);
let playerList = [];
let Interval1, Interval2;
// scoreboard for show info
const times = document.querySelectorAll('.times p');
let [Hourse, Minuts, Seconds, Miliseconds] = times;
//controll button for controll conter and add to list record
const Btn_group = document.querySelectorAll('.timer-btn-group button');
const [Play, Pause, addList, Reset] = Btn_group; // use Destructuring 
// textAre input Record and add or remove it
let textArea = document.getElementById('record');

// function get milisecond
function Mili_second() {
    const Timer = new Date();
    Miliseconds.innerHTML = Math.round(Timer.getMilliseconds() / 10); // show two number 0-99
    // Timer.getMilliseconds(); 
}
// create counter for get second and minuts
function Scond_Minut() {
    counter++;
    if (counter < 10) Seconds.innerHTML = `0${i}`;
    if (counter > 60) counter = 1;
    Seconds.innerHTML = counter;
    if (counter == 60) {
        i++;
        if (i > 60) i = 1;
        Minuts.innerHTML = i;
    }
}
// function Puse
function puaseConter() {
    clearInterval(Interval1);
    clearInterval(Interval2);
}
// add event to controll button 
Play.addEventListener('click', () => {
    clearInterval(Interval1);
    clearInterval(Interval2);
    Interval1 = setInterval(Mili_second, 10);
    Interval2 = setInterval(Scond_Minut, 1000);
});
Pause.addEventListener('click', puaseConter);
// add Player Record to List
addList.addEventListener('click', () => {
    playerCounter++;
    playerList.push(`Player ${playerCounter}: ${Hourse.innerHTML}:${Minuts.innerHTML}:${Seconds.innerHTML}:${Miliseconds.innerHTML} \n`);
    textArea.value = playerList.join(' ');
});
//  reset all timer vlaue and PlayerList value;
Reset.addEventListener('click', () => {
    counter = i = j = playerCounter = 0;
    playerList = [];
    textArea.value = "";
    Hourse.innerHTML = Minuts.innerHTML = Seconds.innerHTML = Miliseconds.innerHTML = "00";
    puaseConter();
});