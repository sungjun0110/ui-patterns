const thumbsUp = document.getElementsByClassName('fa-thumbs-up')[0];
const likeBtn = document.getElementsByClassName('like-btn')[0];
const heart = document.getElementsByClassName('heart')[0];

thumbsUp.addEventListener('click', () => {
    likeHandler();
});

function likeHandler(){
    thumbsUp.classList.toggle('active');
    animateLikeBtn();
}

function animateLikeBtn() {
    thumbsUp.style.transform = 'rotate(10deg)';
    setTimeout(() => {
        thumbsUp.style.transform = 'rotate(-10deg)';
    }, 100);
    setTimeout(() => {
        thumbsUp.style.transform = 'rotate(10deg)';
    }, 200);
    setTimeout(() => {
        thumbsUp.style.transform = 'rotate(0deg)';
    }, 300);
}

likeBtn.addEventListener('click', () => {
    clickHandler();
});

function clickHandler() {
    likeBtn.classList.toggle('clicked');
    heart.classList.toggle('clicked');
    console.log(likeBtn.childNodes);
}