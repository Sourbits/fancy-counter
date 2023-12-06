const increaseButtonE1 = document.querySelector(".counter__button--increase");
const decreaseButtonE1 = document.querySelector(".counter__button--decrease");
const resetButtonE1 = document.querySelector(".counter__reset-button");
const counterValueE1 = document.querySelector(".counter__value");

function incrementCounter() {
  const currentValue = counterValueE1.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber + 1;
  if (newValue > 5) {
    newValue = 5;
  }
  counterValueE1.textContent = newValue;
}

resetButtonE1.addEventListener("click", function () {
  counterValueE1.textContent = 0;
});

increaseButtonE1.addEventListener("click", incrementCounter);

decreaseButtonE1.addEventListener("click", function () {
  const currentValue = counterValueE1.textContent;
  const currentValueAsNumber = +currentValue;
  let newValue = currentValueAsNumber - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  counterValueE1.textContent = newValue;
});

document.addEventListener("keydown", incrementCounter);
