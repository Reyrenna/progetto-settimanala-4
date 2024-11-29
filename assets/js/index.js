const myHero = document.getElementById("hero");
let altezza = myHero.offsetHeight;
console.log(altezza);
const header = document.getElementById("header");

if (header===altezza){
  header.classList.replace("header", "header2");
};