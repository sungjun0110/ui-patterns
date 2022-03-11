const btn4 = document.getElementById('btn4');

btn4.addEventListener('click', () => {
    btn4Handler();
})

function btn4Handler() {
    btn4.classList.toggle('clicked');
}