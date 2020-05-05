const container = document.getElementById('container');
const text = document.getElementById('circle-text');
const playVoiceCheck = document.getElementById('play-voice');

const timeBreatheIN = 4000;
const timeHold = 7000;
const timeBreatheOut = 8000;
const utterance = new SpeechSynthesisUtterance();
utterance.rate = 0.6;

let _playVoice = false;

playVoiceCheck.addEventListener(
  'click',
  () => (_playVoice = playVoiceCheck.checked)
);

breatheIN();

function breatheIN() {
  text.innerText = 'Inhale!';
  sayMessage('inhale');
  container.className = 'container grow';
  setTimeout(hold, timeBreatheIN);
}

function hold() {
  text.innerText = 'Hold!';
  sayMessage('hold');
  setTimeout(breatheOut, timeHold);
}

function breatheOut() {
  text.innerText = 'Exhale!';
  sayMessage('exhale');
  container.className = 'container shrink';
  setTimeout(breatheIN, timeBreatheOut);
}

function sayMessage(message) {
  if (_playVoice) {
    utterance.text = message;
    speechSynthesis.speak(utterance);
  }
}
