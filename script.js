const switchBtnBack = document.querySelector('.switch-card-back');
const switchBtnFront = document.querySelector('.switch-cards-front');

switchBtnBack.addEventListener('click', function() {
    window.location.href = "card-back/index.html";
})

switchBtnFront.addEventListener('click', function() {
    console.log('clicked');
    window.location.href = "./index.html";
})
