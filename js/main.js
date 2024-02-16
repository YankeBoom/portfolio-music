/ Header кнопка

let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

// audio проигрыватель

const audioContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const audio = document.getElementById('audio');
const progressContainer = document.getElementById('audio-progress')
const progress = document.getElementById('progress');



function playSong() {
    audioContainer.classList.add('play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    audioContainer.classList.remove('play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');

    audio.pause();
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPersent = (currentTime / duration) * 100
    progress.style.width = `${progressPersent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
    const isPlaying = audioContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress);
