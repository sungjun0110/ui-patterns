// elements for the ball
const canvas = document.getElementById('bouncing-ball');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// elements for the control panel
const elasticityLabel = document.getElementById('elasticity-label');
const elasticityScale = document.getElementById('elasticity-scale');
const restartBtn = document.getElementById('restart-button');

let x, y, vx, vy, offsetX, offsetY, radius, color, elasticity = elasticityScale.value;
let gravity = 9.8 * 600;
let isOut = false, isDragging = false, restart=false;

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
function calculateVy(elasticity, direction = '') {
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
    if (restart) return;
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fall();
}

function stopAnimation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function initBall() {
    vy = 0;
    vx = 0;
    gravity = 9.8 * 600;
    offsetX = 0;
    offsetY = radius*2;
    restart = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(canvas.width/2, 0, 70, 'blue', elasticity);
    animate();
}
// starts animation
initBall();

elasticityLabel.innerText = elasticityScale.value;

elasticityScale.addEventListener('change', () => {
    elasticityLabel.innerText = elasticityScale.value;
    elasticity = elasticityScale.value;
});

restartBtn.addEventListener('click', () => {
    restart = true;
    setTimeout(() => {
        initBall();
    }, 100);
})