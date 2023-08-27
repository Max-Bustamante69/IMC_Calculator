const heightValue = document.getElementById("heightVal");
const ageValue = document.getElementById("ageVal");
const weightValue = document.getElementById("weightVal");

const genderButtons = document.querySelectorAll(".btnGender");

const heightSlider = document.getElementById("hSlide");

const calculateButton = document.getElementById("btnCalcular");

const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");

const dialog = document.querySelector("dialog");
const closeDialog = document.querySelector("#closeDialog")
const result = document.getElementById("result")
const IMC = document.getElementById("IMC")
const resultDescription = document.getElementById("resultDescription")

let selectedGenderIndex = 0;

initializeHeightSlider();
setInitialHeightValue();
bindGenderButtonClick();
bindCalculateButtonClick();
bindPlusButtonClick();
bindMinusButtonClick();
bindCloseDialogButton();

function bindCloseDialogButton(){
  closeDialog.addEventListener("click", () => { 
    dialog.classList.add('hide');
    dialog.addEventListener('webkitAnimationEnd', function(){
        dialog.classList.remove('hide');
        dialog.close();
        dialog.removeEventListener('webkitAnimationEnd',  arguments.callee, false);
    }, false);})
}

function initializeHeightSlider() {
  heightSlider.addEventListener("input", handleHeightChange);
}

function setInitialHeightValue() {
  heightValue.textContent = heightSlider.value + " cm";
}

function bindGenderButtonClick() {
  genderButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("selected")) {
        button.classList.add("selected");
        genderButtons[selectedGenderIndex].classList.remove("selected");
        selectedGenderIndex = index;
      }
    });
  });
}

function bindCalculateButtonClick() {
  calculateButton.addEventListener("click", () => {
    const weight = parseInt(weightValue.textContent);
    const height = parseInt(heightValue.textContent);


    if (isNaN(weight) || isNaN(height)) {
      window.alert("Invalid weight or height");
      return;
    }

    const imcResult = (weight / Math.pow(height / 100, 2)).toFixed(2);

     IMC.textContent = imcResult
    

    switch (true) {
      case imcResult <= 18.5:
        result.textContent = "Bajo Peso";
        result.style.color = "yellow";
        resultDescription.textContent = "Estas debajo de lo optimo para tu altura y peso."
        
        break;
      case imcResult <= 24.9:
        result.textContent = "Peso Normal";
        result.style.color = "green";
        resultDescription.textContent = "Estas en optimo para tu altura y peso."

        break;
      case imcResult <= 29.9:
        result.textContent = "Sobre Peso";
        result.style.color = "orange";
        resultDescription.textContent = "Estas encima de lo optimo para tu altura y peso."

        break;
      case imcResult <= 34.9:
        result.textContent = "Obesidad I";
        result.style.color = "#DC143C";
        resultDescription.textContent = "Estas muy por encima de lo optimo para tu altura y peso."

        break;
      case imcResult <= 39.9:
        result.textContent = "Obesidad II";
        result.style.color = "#B22222";
        resultDescription.textContent = "Estas muy por encima de lo optimo para tu altura y peso."

        break;
      case imcResult <= 49.9:
        result.textContent = "Obesidad III";
        result.style.color = "#8B0000";
        resultDescription.textContent = "Estas muy por encima de lo optimo para tu altura y peso."

        break;
      default:
        result.textContent = "Obesidad IV";
        result.style.color = "#800000";
        resultDescription.textContent = "Estas muy por encima de lo optimo para tu altura y peso."

    }
    dialog.showModal()
  });
}

function bindButtonHold(button, increment) {
  let interval = 200;
  let delay = 1000;
  let isHolding = false;

  button.addEventListener("mousedown", () => {
    isHolding = true;
    delay = 1000;
    interval = 100;

    setTimeout(() => {
      if (isHolding) {
        const timer = setInterval(() => {
          if (increment) {
            handleIncrement(button);
          } else {
            handleDecrement(button);
          }
        }, interval);

        button.addEventListener("mouseup", () => {
          isHolding = false;
          clearInterval(timer);
        });

        button.addEventListener("mouseleave", () => {
          isHolding = false;
          clearInterval(timer);
        });
      }
    }, delay);
  });

  button.addEventListener("click", () => {
    if (!isHolding) {
      if (increment) {
        handleIncrement(button);
      } else {
        handleDecrement(button);
      }
    }
  });
}

function handleIncrement(button) {
  if (button.id === "plusW" && parseInt(weightValue.textContent) < parseInt(weightValue.getAttribute("max"))) {
    addWeight(1);
  } else if (parseInt(ageValue.textContent) < parseInt(ageValue.getAttribute("max"))) {
    addAge(1);
  }
}

function handleDecrement(button) {
  if (button.id === "minusW" && parseInt(weightValue.textContent) > parseInt(weightValue.getAttribute("min"))) {
    addWeight(-1);
  } else if (parseInt(ageValue.textContent) > parseInt(ageValue.getAttribute("min"))) {
    addAge(-1);
  }
}


function bindPlusButtonClick() {
  plusButtons.forEach(button => bindButtonHold(button, true));
}

function bindMinusButtonClick() {
  minusButtons.forEach(button => bindButtonHold(button, false));
}


function handleHeightChange() {
  heightValue.textContent = heightSlider.value + " cm";
}

function addWeight(value) {
  const buffer = parseInt(weightValue.textContent) + value;
  weightValue.textContent = buffer.toString();
}

function addAge(value) {
  const buffer = parseInt(ageValue.textContent) + value;
  ageValue.textContent = buffer.toString();
}

