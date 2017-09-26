const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1200;
canvas.height = 600;

const cw = canvas.width;
const ch = canvas.height;

const playerSize = 100;
let playerX = 30;
let playerY = 30;

const orbSize = 55;
let orbX = cw / 2;
let orbY = ch / 2;


function orb() {
    ctx.fillStyle = 'white';
    ctx.fillRect(orbX, orbY, orbSize, orbSize);
}

function map() {
    ctx.fillStyle = 'darkblue';
    ctx.fillRect(0, 0, cw, ch);
}

function player() {
    ctx.fillStyle = 'red';
    ctx.fillRect(playerX, playerY, playerSize, playerSize);
}
function game() {
    map()
    orb()
    player()
}

game()
setInterval(game, 1000 / 60)