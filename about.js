let buttons = document.querySelectorAll(".buttons_container button");

function reset() {
  document.querySelectorAll(".for_content>div").forEach((div) => {
    div.style.display = "none";
  });
  buttons.forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    reset();
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
    document.querySelector(`.button${index + 1}_div`).style.display = "flex";
  });
});

document.querySelector(".blue_button").addEventListener("click", () => {
  reset();
  buttons[0].style.backgroundColor = "blue";
  buttons[0].style.color = "white";
  document.querySelector(`.button1_div`).style.display = "flex";
});


