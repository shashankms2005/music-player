console.log("welcome");

var heartButton = document.querySelectorAll(".heart");
for (let i = 0; i < heartButton.length; i++) {
  heartButton[i].addEventListener("click", function () {
    if (heartButton[i].getAttribute("src") === "./suit-heart.svg") {
      heartButton[i].setAttribute("src", "./red-heart-svgrepo-com.svg");
    } else {
      heartButton[i].setAttribute("src", "./suit-heart.svg");
    }
  });
}

let arr = [
  "./music/HukumJailer(PagalWorlld.Com).mp3",
  "./music/Lokiverse-2.0-MassTamilan.dev.mp3",
  "./music/Nenjukkul-Peidhidum-MassTamilan.com.mp3",
  "./music/Mudhal-Nee-Mudivum-Nee-Title-Track-MassTamilan.io.mp3",
  "./music/Ava-Enna-Enna-MassTamilan.com.mp3",
  "./music/Ordinary-Person(PaglaSongs).mp3",
];

var playButtons = document.querySelectorAll(".play");
let mplay=document.querySelector(".mplay");


var audioElements = [];
for (let i = 0; i < arr.length; i++) {
    audioElements.push(new Audio(arr[i]));
  }

for (let i = 0; i < playButtons.length; i++) {
  playButtons[i].addEventListener("click", function () {
    let currentElement = playButtons[i];
    let currentId = currentElement.id;
    document.querySelectorAll(".s1")[i].classList.toggle("tnans");
    console.log(currentId);
    if (currentElement.getAttribute("src") === "./play-circle.svg") {
      music(currentId, currentElement.getAttribute("src"));
      currentElement.setAttribute("src", "./pause-circle.svg");
      mplay.setAttribute("src","./pause-circle.svg");
    
    } else {
      music(currentId, currentElement.getAttribute("src"));
      currentElement.setAttribute("src", "./play-circle.svg");
      mplay.setAttribute("src","./play-circle.svg");
    }
  });
}

let pausearr=[];
function music(key, attri) {
  console.log(key);
  console.log(attri);
  if (attri === "./play-circle.svg") {
    magaPlayPause(audioElements[key - 1]);
    audioElements[key - 1].play();
  } else {
    audioElements[key - 1].pause();
    audioElements[key - 1].currentTime=0;
  }
}
let myProgressBar = document.getElementById('myProgressBar');
function magaPlayPause(music) {
      music.addEventListener("timeupdate", function () {
        let progress = (music.currentTime / music.duration) * 100;
        myProgressBar.value = progress;
      });
  }


