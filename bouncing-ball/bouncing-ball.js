const canvas = document.getElementById('bouncing-ball');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let x, y, vx, vy, offsetX, offsetY, elasticity, radius, color;
let isOut = false, isDragging = false;

function drawBall(x, y, radius, color, elasticity) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

drawBall(canvas.width/2, 0, 70, 'blue', 0.555);
