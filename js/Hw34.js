// const sss = document.querySelectorAll('div');
// console.log(sss)

const ggGhost = document.querySelector('.box');
const text = document.querySelector('.txt');

function openGhost() {
    ggGhost.style.display = 'flex'
}
function closeGhost() {
    ggGhost.style.display = 'none'
}
text.addEventListener("mouseover", openGhost)
text.addEventListener("mouseout", closeGhost)