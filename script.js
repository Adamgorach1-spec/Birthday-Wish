
// script.js

let userName = "";


function hideAllScreens(){

  

  document.getElementById("entryScreen").classList.add("hidden");
  document.getElementById("loadingScreen").classList.add("hidden");
  document.getElementById("giftScreen").classList.add("hidden");
  document.getElementById("funnyScreen").classList.add("hidden");
  document.getElementById("prankScreen").classList.add("hidden");
  document.getElementById("emotionalScreen").classList.add("hidden");
  document.getElementById("finalScreen").classList.add("hidden");


}

function startSurprise(){

  document.getElementById("emmoMusic").play();

  let name = document.getElementById("nameInput").value;
  let birthdate = document.getElementById("birthdate").value;

  if(name === "" || birthdate === ""){

    alert("Please enter your details 🎂");
    return;

  }

  userName = name;

  

  hideAllScreens();

  document.getElementById("loadingScreen").classList.remove("hidden");

  let messages = [

    "Connecting to Birthday Server... 🎂",

    "Finding secret memories... 👀",

    "Preparing surprise package... 🎁",

    "Checking happiness level... 😭",

    "Almost ready... ✨"

  ];

  let index = 0;

  let loadingText = document.getElementById("loadingText");

  let interval = setInterval(() => {

    index++;

    if(index >= messages.length){
      index = 0;
    }

    loadingText.innerText = messages[index];

  }, 2000);

  setTimeout(() => {

    clearInterval(interval);

    hideAllScreens();

    document.getElementById("giftScreen").classList.remove("hidden");

  }, 10000);

}

function showFunnyShayri(){

  hideAllScreens();

  // Music

  document.getElementById("emmoMusic").pause();
  document.getElementById("funnyMusic").play();

  document.getElementById("funnyScreen").classList.remove("hidden");

  setTimeout(() => {

    hideAllScreens();

    document.getElementById("prankScreen").classList.remove("hidden");

  }, 10000);

  setTimeout(() => {

    showEmotional();

  }, 18000);

}

function showEmotional(){

  hideAllScreens();

  document.getElementById("funnyMusic").pause();

  document.getElementById("emmoMusic").play();

  document.getElementById("emotionalScreen").classList.remove("hidden");

  let text = `
  Dear ${userName} ❤️

  Some people are ordinary,
  but some people make life brighter ✨

  And honestly...
  you are one of them 💫

  May your smile always stay the same,
  and may happiness always follow you 🌸

  Never stop shining the way you do ✨
  Today is your special day 🎂
  `;

  document.getElementById("emotionalText").innerHTML = text;

  setTimeout(() => {

    showFinalWish();

  }, 20000);

}

function showFinalWish(){

  hideAllScreens();

  document.getElementById("finalScreen").classList.remove("hidden");

  document.getElementById("finalWish").innerHTML =
  `🎉 HAPPY BIRTHDAY ${userName.toUpperCase()} 🎂`;

}

