window.onload = function() {
  var mobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
  if (mobile) {
    alert("Flip your screen for better view");
  } else {

  }
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();

  setTimeout(function() {
    key.classList.remove("playing");
  }, 100);
}

function playSoundOnClick(event) {
  const dataKey = event.target.dataset.key;
  const clickAudio = document.querySelector(`audio[data-key="${dataKey}"]`);
  clickAudio.currentTime = 0;
  clickAudio.play();

  const currentKey = this;
  currentKey.classList.add('playing');
  setTimeout(function() {
    currentKey.classList.remove("playing");
  }, 50);

}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener('click', playSoundOnClick)
});

window.addEventListener('keydown', playSound);
