const mainScreen = document.querySelector('.main-screen');
const playBtn = document.querySelector('.control-play');
const menuLinks = document.querySelectorAll('.nav-link');

const audio = new Audio();

let animal = 'main';

mainScreen.addEventListener('animationend', () => {
    mainScreen.classList.remove('background-fadeIn');
});

function changeBackground() {
    mainScreen.classList.add('background-fadeIn');
    mainScreen.style.backgroundImage = `url(./img/${animal}.png)`;
}

function playAudio() {
    if (!playBtn.classList.contains('pause')) {
        playBtn.classList.add('pause');
        playBtn.classList.remove('play');
    }
    
    audio.src = `./audio/${animal}.mp3`;
    audio.currentTime = 0;
    audio.loop = true;
    audio.play();
}

function pauseAudio() {
    if (!playBtn.classList.contains('play')) {
        playBtn.classList.add('play');
        playBtn.classList.remove('pause');
    }
    audio.pause();
}

playBtn.addEventListener('click', function() {
    if (this.classList.contains('play')) {
        playAudio();
    }
    else {
        pauseAudio();
    }
});

function clearClassActive() {
    menuLinks.forEach(link => {
        link.classList.remove('active');        
    });
}


menuLinks.forEach(link => {
    
    link.addEventListener('click', function() {
        clearClassActive();
        animal = this.dataset.animal;
        this.classList.add('active');
        changeBackground();
        playAudio();

    });
    
});

document.querySelector('.logo').addEventListener('click', function() {
    clearClassActive();
    animal = 'main';
    changeBackground();
    playAudio();

});


document.getElementById('year').textContent = new Date().getFullYear();