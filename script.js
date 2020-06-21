const container = document.getElementById('container');
const text = document.getElementById('circle-text');
const playVoiceCheck = document.getElementById('play-voice');

const timeBreatheIN = 4000;
const timeHold = 7000;
const timeBreatheOut = 8000;

//Creating the utterance which we will use to speake the message.
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
  container.className = 'container grow';
  setTimeout(hold, timeBreatheIN);
  sayMessage('inhale');
}

function hold() {
  text.innerText = 'Hold!';
  setTimeout(breatheOut, timeHold);
  sayMessage('hold');
}

function breatheOut() {
  text.innerText = 'Exhale!';
  container.className = 'container shrink';
  sayMessage('exhale');
  setTimeout(breatheIN, timeBreatheOut);
}

function sayMessage(message) {
  if (_playVoice) {
    utterance.text = message;
    speechSynthesis.speak(utterance);
  }
}
