const ceasarSection = document.getElementById("ceasar");
const vigenereSection = document.getElementById("vigenere");
const hillSection = document.getElementById("hill");

const ceasarTab = document.getElementById("ceasarTab");
const vigenereTab = document.getElementById("vigenereTab");
const hillTab = document.getElementById("hillTab");

hillTab.addEventListener("click", function () {
  document
    .querySelectorAll(".tab:not(#hill)")
    .forEach((tab) => tab.classList.remove("toggle-tab"));
  ceasarSection.style.display = "none";
  vigenereSection.style.display = "none";
  hillSection.style.display = "block";
  this.classList.add("toggle-tab");
  // this.classList.toggle("hover-tab");
});

vigenereTab.addEventListener("click", function () {
  document
    .querySelectorAll(".tab:not(#vigenere)")
    .forEach((tab) => tab.classList.remove("toggle-tab"));
  ceasarSection.style.display = "none";
  vigenereSection.style.display = "block";
  hillSection.style.display = "none";
  this.classList.add("toggle-tab");
  // this.classList.toggle("hover-tab");
});

ceasarTab.addEventListener("click", function () {
  document
    .querySelectorAll(".tab:not(#ceasar)")
    .forEach((tab) => tab.classList.remove("toggle-tab"));
  ceasarSection.style.display = "block";
  vigenereSection.style.display = "none";
  hillSection.style.display = "none";
  this.classList.add("toggle-tab");
  // this.classList.toggle("hover-tab");
});
