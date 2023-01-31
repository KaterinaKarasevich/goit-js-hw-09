
const startBtn = document.querySelector("[data-start]");
console.log(startBtn)
const stopBtn = document.querySelector("[data-stop]");
console.log(stopBtn)
const body = document.querySelector("body");
console.log(body)


startBtn.addEventListener("click", () => {
  stopBtn.removeAttribute("disabled");
  timerId = setInterval(() => {
    const color = getRandomHexColor()
    body.style.backgroundColor = color;
  }, 1000);
   console.log(timerId);
   startBtn.setAttribute("disabled", true);
});


stopBtn.addEventListener("click", () => {
  startBtn.removeAttribute("disabled");
  clearInterval(timerId);
  alert("The timer has been stoppped already!") 
  stopBtn.setAttribute("disabled", true); //
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}