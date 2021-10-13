var step = 0;
var timer;
var Tempo = 120;
var speed = 60000/Tempo;

function buttonClicked(event) {
    clickedButton = event.target;
    innerDot = clickedButton.children[0];
    innerDot.classList.toggle("selected-dot");
  }
  
  function instrButtonClicked(event) {
    instrButtons.forEach(setOffAll);
    clickedButton = event.target;
    dot = clickedButton.parentElement.children[0];
    dot.classList.toggle("selected-dot");
  }
  
  function patternButtonClicked(event){
    patternButtons.forEach(setOffAll)
    clickedButton = event.target;
    dot = clickedButton.parentElement.children[0];
    dot.classList.toggle("selected-dot")
  }
  
  sequenceButtons = document.querySelectorAll(".button:not(.small):not(.big-button)");
  instrButtons = document.querySelectorAll(".small");
  patternButtons = document.querySelectorAll(".pattern");
  
  sequenceButtons.forEach(assignClick);
  instrButtons.forEach(assignInstrClick);
  patternButtons.forEach(assignOneClick);
  
  function assignClick(item) {
    item.onclick = buttonClicked;
  }
  
  function assignInstrClick(item) {
    item.onclick = instrButtonClicked;
  }
  
  function assignOneClick(item) {
    item.onclick = patternButtonClicked;
  }
  
  function setOffAll(item) {
    item.parentElement.children[0].classList.remove("selected-dot");
  }



  function render() {
    sequenceButtons.forEach(renderDots);
    document.getElementById("tempo").innerHTML = Tempo;
  }

  function renderDots (button, index) {
    button.children[0].classList.toggle("selected-dot", index == step);
  }

  function updateStep() {
    step = (step + 1) % bar.children.length;
    render();
  }

  setInterval(updateStep, speed);