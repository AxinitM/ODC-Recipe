const textarea = document.getElementById("opinion");
const counter = document.getElementById("counter");
const maxLength = textarea.getAttribute("maxlength");

textarea.addEventListener("input", () => {
  const remaining = maxLength - textarea.value.length;
  counter.textContent = remaining;

  if (remaining >= 15 && remaining <= 30) {
    counter.className = "brown";
  } else if (remaining >= 31 && remaining <= 500) {
    counter.className = "darkgreen";
  } else if (remaining <= 15) {
    counter.className = "red";
  }
})