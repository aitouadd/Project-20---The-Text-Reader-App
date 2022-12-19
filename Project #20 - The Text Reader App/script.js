const textDesplay = document.querySelector("#text");
const speedBtn = document.querySelector("#speed");
const readBtn = document.querySelector(".read");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
let currentchar;


// Rreading Functionality (1)
  readBtn.addEventListener("click", function () {
    readText(textDesplay.value);
  });

// pausing text  (2)
 pauseBtn.addEventListener("click" , pauseText);

//  stopnig text (3)
stopBtn.addEventListener("click" , stopText);

// speeding functionality (4)
speedBtn.addEventListener("input" , function(){
  stopText();
  readText(utterance.text.substring(currentchar)); 
});
  const utterance = new SpeechSynthesisUtterance();

  utterance.addEventListener("end", function(){
    textDesplay.disabled = false;
  });

// the last functionality (0)
utterance.addEventListener("boundary" , function (e) {  
  console.log(currentchar)
  currentchar = e.charIndex;
  
})

// readText Function (1)
function readText(scope) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
     
  if (speechSynthesis.speaking) return;

  utterance.text = scope;
  utterance.rate = speedBtn.value || 1;
  textDesplay.disabled = true;
  speechSynthesis.speak(utterance);
}

// pauseText Function (2)
function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause();
}
  

// pausing text functionALITY (3) 
function stopText(){
  speechSynthesis.resume();
  speechSynthesis.cancel();
}