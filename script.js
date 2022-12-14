const displayButton = document.getElementById("word-display-btn");
const mainEl = document.querySelector(".main");
const checkAnswerButton = document.getElementById("check-answer-btn");
const questionDisplay = document.querySelector("#dispaly-word-paragraph");
const inputEl = document.querySelector("#input-word");
const spanElCorrect = document.querySelector("#count-correct-answers");
const spanElWrong = document.querySelector("#count-wrong-answers");
const firstName = document.querySelector("#fNme");
const nameContainer = document.querySelector("#name-container");
const spanElName = document.querySelector("#name-span");
const playerInfContainer = document.querySelector(".player-info");
const startingWord = document.querySelector("#start-Word");
const endingWord = document.querySelector("#finish-Word");

// declaring the arrays that holds the words
const words = [
  "accident",
  "accidentally",
  "actual",
  "actually",
  "address",
  "although",
  "answer",
  "appear",
  "arrive",
  "believe",
  "bicycle",
  "breath",
  "breathe",
  "build",
  "busy",
  "business",
];

let practiceRange = ["actual", "actually", "address", "although", "answer"];

let correctCount = 1;
let wrongCount = 1;
let myName;
let comparingAnswer;

firstName.addEventListener("keypress", (e) => {
  let value = e.target.value;

  if (e.key === "Enter") {
    myName = spanElName.innerText = value;
    firstName.disabled = true;
    startingWord.disabled = true;
    endingWord.disabled = true;
    displayButton.focus();
  }
});

let spell = new SpeechSynthesisUtterance();
spell.rate = 1;
spell.volume = 5;
spell.pitch = 1;
spell.voice = speechSynthesis.getVoices()[0];

let sayResult = new SpeechSynthesisUtterance();
sayResult.rate = 1;
sayResult.volume = 5;
sayResult.pitch = 1;
sayResult.voice = speechSynthesis.getVoices()[1];

const sayTheWord = (theWord) => {
  speechSynthesis.cancel();
  inputEl.innerText = "";
  let start = startingWord.value - 1;
  let end = endingWord.value;
  let newArry = words.slice(start, end);

  //questionDisplay.textContent = theWord;
  //speech = questionDisplay.textContent = theWord;

  if (newArry.length !== 0) {
    let randomIndex = Math.floor(Math.random() * newArry.length);
    let word = newArry[randomIndex];
    theWord = word;
    comparingAnswer = questionDisplay.textContent = theWord;
    spell.text = theWord;
    speechSynthesis.speak(spell);
    playerInfContainer.style.backgroundColor = "bisque";
    playerInfContainer.style.color = "black";
    inputEl.focus();
  } else {
    spell.text = "Select the range of words you want to practice";
    speechSynthesis.speak(spell);
    playerInfContainer.style.backgroundColor = "Orange";
    playerInfContainer.style.color = "white";
    startingWord.focus();
  }
};

displayButton.addEventListener("click", sayTheWord);

inputEl.addEventListener("keypress", (e) => {
  let event = e.target.value;
  if (e.key === "Enter") {
    console.log();
    if (inputEl.value === comparingAnswer) {
      playerInfContainer.disabled = true;
      sayResult.text = `Exellent ${myName} You got it, let keep practice `;
      inputEl.value = "";
      spanElCorrect.textContent = correctCount++;
      speechSynthesis.speak(sayResult);
      inputEl.innerText = "";
      displayButton.focus();
    } else {
      sayResult.text = `Not quit right this time, ${myName}, but keep practicing`;
      console.log(spanElName.value);
      speechSynthesis.speak(sayResult);
      spanElWrong.textContent = wrongCount++;
      inputEl.innerText = "";
      displayButton.focus();
    }
  }
});

window.onload = () => {
  playerInfContainer.style.backgroundColor = "lightgreen"; // add timer
  spell.text = `    
Number one:- Select the range of words... you want to practice ....
Number two:- Enter you name,... and then... press Enter key
`;
  speechSynthesis.speak(spell);
};
