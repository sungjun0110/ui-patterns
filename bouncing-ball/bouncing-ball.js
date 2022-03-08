const canvas = document.getElementById('bouncing-ball');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let x, y, vx, vy, offsetX, offsetY, elasticity, radius, color;
let gravity = 9.8 * 600;
let isOut = false, isDragging = false;

vy = 0;
vx = 0;
offsetX = 0;
offsetY = 0;

function drawBall(newX, newY, newRadius, newColor, newElasticity) {
    x = newX;
    y = newY;
    elasticity = newElasticity;
    radius = newRadius;
    color = newColor;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function fall() {
    if (y + radius >= canvas.height) {
        if (Math.abs(vy) <= 0.1) {
            vy = 0;
            y = canvas.height - radius;
        }
        if (Math.abs(vy) > 0.1) {
            calculateVy(elasticity, 'hit');
            calculateY();
        } 
    } else {
        calculateVy(elasticity);
        calculateY();
    }
    drawBall(x, y, radius, color, elasticity);
};

// calculate the ball speed in Y axis
function calculateVy(elasticity = 1.0, direction = '') {
    if (direction === 'hit') {
        vy = -vy * elasticity;
    } else {
        vy += gravity/60;
    }
}

// calculate new position Y of a ball
function calculateY() {
    y += (vy/60) + gravity/7200;
    if (y + radius >= canvas.height) {
        y = canvas.height - radius;
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fall();
}

drawBall(canvas.width/2, 0, 70, 'blue', .7);
animate();
