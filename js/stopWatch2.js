const btnGroup = document.querySelector('.timer-btn-group');
let selectedId;

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