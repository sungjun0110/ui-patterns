const thumbsUp = document.getElementsByClassName('fa-thumbs-up')[0];

thumbsUp.addEventListener('click', () => {
    likeHandler();
});

function likeHandler(){
    thumbsUp.classList.toggle('active');
}