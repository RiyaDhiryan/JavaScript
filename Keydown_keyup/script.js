const btn = document.getElementById("click");

document.addEventListener("keydown", function (e) {
    btn.style.color = "yellow";
    btn.innerText = e.key + " is keyDown";
  });
  
  document.addEventListener("keyup", function (e) {
    btn.style.color = "white";
    btn.innerText = e.key + " is keyUp";
  });