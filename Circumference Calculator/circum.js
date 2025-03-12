//CIRCUMFERENCE CALCULATORR
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmitt").onclick = function(){
    radius = Number(document.getElementById("myText").value)
    circumference = 2 * radius * PI;
    document.getElementById("myh3").textContent = circumference + "cm"
}