let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.onclick = () => {
    if (button.dataset.value == "AC") {
      display.innerText = "";
    } else if (button.dataset.value == "DEL") {
      display.innerText = display.innerText
        .toString()
        .substr(0, display.innerText.toString().length - 1);
    } else if (display.innerText != "" && button.dataset.value == "=") {
      display.innerText = eval(display.innerText);
    } else {
      display.innerText += button.dataset.value;
    }
  };
});
