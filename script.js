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
const m1 = document.querySelector("#mo1");
const form = document.querySelector("#form-id");
const p = document.querySelector("#congra-pragraph-id");
const muteBtn = document.querySelector("#btn-mute");
const imageSection = document.querySelector(".images-section");

// declaring the arrays that holds the words
const words = [
  "accident",
  "accidentally",
  "actual",
  "actually",
  "address",
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
  "calendar",
  "caught",
  "centre",
  "century",
  "certain",
  "circle",
  "complete",
  "consider",
  "continue",
  "decide",
  "describe",
  "different",
  "difficult",
  "disappear",
  "early",
  "earth",
  "eight",
  "eighth",
  "enough",
  "exercise",
  "experience",
  "experiment",
  "extreme",
  "famous",
  "favourite",
  "February",
  "forward",
  "forwards",
  "fruit",
  "grammar",
  "group",
  "guard",
  "guide",
  "heard",
  "heart",
  "height",
  "history",
  "imagine",
  "increase",
  "important",
  "interest",
  "island",
  "knowledge",
  "learn",
  "length",
  "library",
  "material",
  "medicine",
  "mention",
  "minute",
  "natural",
  "naughty",
  "notice",
  "occasion",
  "occasionally",
  "often",
  "opposite",
  "ordinary",
  "particular",
  "peculiar",
  "perhaps",
  "popular",
  "position",
  "possess",
  "possession",
  "possible",
  "potatoes",
  "pressure",
  "probably",
  "promise",
  "purpose",
  "quarter",
  "question",
  "recent",
  "regular",
  "reign",
  "remember",
  "sentence",
  "separate",
  "special",
  "straight",
  "strange",
  "strength",
  "suppose",
  "surprise",
  "therefore",
  "though",
  "although",
  "thought",
  "through",
  "various",
  "weight",
  "woman",
  "women",
];

// this for loop help me to debug the actuall words that is in the array and then used execl file to compare what I want to story in the array and the order they are and the actual out put from the array

let CourageWords = [
  "Perfect you deserve 🎂",
  "Well done sir 🤵",
  "You are super star ⭐⭐",
  "You are flying now ✈✈ ",
  "Now you are unstoppable 🏎 🏎",
];

const getEncourageWord = () => {
  const courage = Math.floor(Math.random() * CourageWords.length);
  const theCourageWord = CourageWords[courage];
  return theCourageWord;
};

let correctCount = 1;
let wrongCount = 1;
let myName;
let comparingAnswer;

form.addEventListener("submit", (e) => e.preventDefault());

firstName.addEventListener("keypress", (e) => {
  let value = e.target.value;

  if (e.key === "Enter") {
    myName = spanElName.innerText = value;
    firstName.disabled = true;
    startingWord.disabled = true;
    endingWord.disabled = true;
    displayButton.focus();
    if (myName === "Mohamed") {
      m1.src =
        "https://scontent.fman1-2.fna.fbcdn.net/v/t39.30808-6/273018888_2945578109067650_1879626940334376411_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=MvMaZcvWtc8AX8VaYIT&_nc_ht=scontent.fman1-2.fna&oh=00_AfCbrAAar87YWq6f1JBfiW5NFkRu2XV4rH9F7pNwxLJjoA&oe=639F3EFF";
      firstName.disabled = true;
      startingWord.disabled = true;
      endingWord.disabled = true;
      displayButton.focus();
    } else if (myName === "Rayaan") {
      m1.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZo01AYdIwh4DQHvIQyGEQ_5Dj5tsFVbpQOc44mSj-MV5pyebQI40zjKsp2hZPWPZrAfY&usqp=CAU";
    }
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

muteBtn.addEventListener('click', (e) => {
  speechSynthesis.cancel();
})

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
    checkAnswer();
  }
});

const checkAnswer = () => {
  if (inputEl.value === comparingAnswer) {
    playerInfContainer.disabled = true;
    sayResult.text = getEncourageWord();
    p.textContent = `${getEncourageWord()} ${myName} keep going`;
    inputEl.value = "";
    spanElCorrect.textContent = correctCount++;
    speechSynthesis.speak(sayResult);
    inputEl.innerText = "";
    displayButton.focus();
  } else {
    sayResult.text = "get it right next time";
    p.textContent = `📚 Nothing is impossible ${myName}, get it right next time, keep practicing 📖`;
    inputEl.value = "";
    spanElWrong.textContent = wrongCount++;
    speechSynthesis.speak(sayResult);
    inputEl.innerText = "";
    displayButton.focus();
  }
};

window.onload = () => {
  // playerInfContainer.style.backgroundColor = "lightgreen"; // add timer
  spell.text = `
Number one:- Select the range of words... you want to practice ....
Number two:- Enter you name,... and then... press Enter key
`;
  speechSynthesis.speak(spell);
};
