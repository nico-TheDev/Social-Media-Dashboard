let button = document.querySelector('.switch-container');

let mainContainer = document.querySelector('.main');
let dashboard = document.querySelector('.dashboard');
let card = document.getElementsByClassName('card');
let cardOverview = document.getElementsByClassName('overview__card');
let overview = document.querySelector('.overview');


button.addEventListener('click',function(){
    mainContainer.classList.toggle('light');
    dashboard.classList.toggle('light-text');
    overview.classList.toggle('light-text');
    button.classList.toggle('light-switch');
    
    for (let i = 0; i < card.length; i++){
        card[i].classList.toggle('light-card');
    }

    for (let i = 0; i < cardOverview.length; i++){
        cardOverview[i].classList.toggle('light-card');
        cardOverview[i].classList.toggle('light-text');
    }
});