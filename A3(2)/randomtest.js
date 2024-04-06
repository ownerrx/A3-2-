const lightBtn = document.getElementById("light-btn");
const darkBtn = document.getElementById("dark-btn");
const customBtn = document.getElementById("custom-btn");

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeColorScheme(mode) {
  document.body.classList.remove("light-mode", "dark-mode", "custom-mode");
  document.body.classList.add(mode);

  if (mode === "custom-mode") {
    document.getElementById('p1').style.color = randomColors();
    document.body.style.backgroundColor = randomColors();
    document.body.classList.add("custom-mode");
    console.log("custom mod");
  } else if (mode === "light-mode") {   
    document.body.classList.add("light-mode");
    console.log("light mod");
  } else if (mode === "dark-mode") {
    document.body.classList.add("dark-mode");
    console.log("dark mod");
  }
}

customBtn.addEventListener("click", function() {
    changeColorScheme("custom-mode");
});
lightBtn.addEventListener("click", function() {
  changeColorScheme("light-mode");
});

darkBtn.addEventListener("click", function() {
  changeColorScheme("dark-mode");
});