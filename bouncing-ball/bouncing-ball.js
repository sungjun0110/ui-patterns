// elements for the ball
const canvas = document.getElementById('bouncing-ball');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// elements for the control panel
const elasticityLabel = document.getElementById('elasticity-label');
const elasticityScale = document.getElementById('elasticity-scale');
const restartBtn = document.getElementById('restart-button');

let x, y, vx, vy, offsetX, offsetY, radius, color, hit = false, elasticity = Number(elasticityScale.value);
let gravity = .05;
let isOut = false, isDragging = false, restart = false;

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
    if (y + radius === canvas.height) {
        console.log('here ', Math.abs(vy) <= 6);
        
        if (Math.abs(vy) <= 6) {
            console.log('here');
            vy = 0;
            return drawBall(x, y, radius, color, elasticity);
        }
        else {
            calculateVy(elasticity, true);
            calculateY();
        }
    } else {
        calculateVy(elasticity, false);
        calculateY();
    }
    drawBall(x, y, radius, color, elasticity);
};

// calculate the ball speed in Y axis
function calculateVy(elasticity, hit) {
    if (hit) {
        console.log(vy, ' ', elasticity);
        // vy = -1 * Math.sqrt(2 * (canvas.height - offsetY) * gravity) * elasticity;
        vy = -1 * Number(parseFloat(vy * elasticity).toFixed(2));
        // console.log(vy * elasticity, ' ', elasticity);
    } else {
        if ( vy < 0 && Math.abs(Number(parseFloat(gravity * 60).toFixed(2))) > Math.abs(vy)) {
            console.log('test', vy);
            vy = 0;
        } else {
            vy += Number(parseFloat(gravity * 60).toFixed(2));
        }
    }
}

// calculate new position Y of a ball
function calculateY() {
    y += vy;
    console.log(y);
    if (y + radius >= canvas.height) {
        y = canvas.height - radius;
    }
}

function animate() {
    if (restart) return;
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fall();
    if (vy === 0 && y === canvas.height - radius) {
        return;
    }
}

function initBall() {
    vy = 0;
    vx = 0;
    offsetX = 0;
    offsetY = radius;
    restart = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall(canvas.width/2, offsetY, 70, 'blue', elasticity);
    animate();
}

elasticityLabel.innerText = elasticityScale.value;

elasticityScale.addEventListener('change', () => {
    elasticityLabel.innerText = elasticityScale.value;
    elasticity = Number(elasticityScale.value);
});

restartBtn.addEventListener('click', () => {
    restart = true;
    setTimeout(() => {
        initBall();
    }, 100);
})

// init the ball
drawBall(canvas.width/2, offsetY, 70, 'blue', elasticity);
initBall();
