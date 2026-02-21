let number = document.getElementById("number");
let plus = document.getElementById("plus");
let number2 = document.getElementById("number2");
let ravno = document.getElementById("ravno");
let javob = document.getElementById("javob");

let son = prompt("son kiritin");
let znak = prompt("znak kiritin (+, -, *, /)");
let son2 = prompt("ikkinchi son kiritin");

let result;
let s1 = Number(son);
let s2 = Number(son2);


if (znak === "+") {
    result = s1 + s2;
} else if (znak === "-") {
    result = s1 - s2;
} else if (znak === "*") {
    result = s1 * s2;
} else if (znak === "/") {
    result = s2 !== 0 ? s1 / s2 : "0 ga mumkun emas";
} else {
    result = "noturi";
}



number.textContent = son;
plus.textContent = znak;
number2.textContent = son2;
ravno.textContent = "=";
javob.textContent = result;


let boxes = [number, plus, number2, ravno, javob];

let container = document.getElementById("container");

container.style.display = "flex";
container.style.gap = "15px";           
container.style.justifyContent = "center"; 
container.style.alignItems = "center";     
container.style.marginTop = "50px";

container.style.width = "600px";           
container.style.height = "300px";         
container.style.backgroundColor = "#f0f2f5"; 
container.style.border = "2px solid #ccc";   
container.style.borderRadius = "20px";     
container.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)"; 
container.style.margin = "50px auto";     



boxes.forEach(el => {
    el.style.display = "flex";
    el.style.alignItems = "center";     
    el.style.justifyContent = "center";
    el.style.width = "80px";            
    el.style.height = "80px";         
    el.style.border = "3px solid #333";
    el.style.borderRadius = "12px";     
    el.style.backgroundColor = "#fff"; 
    el.style.margin = "0";              
    el.style.fontSize = "24px";
    el.style.boxShadow = "4px 4px 0px #888"; 
});

plus.style.backgroundColor = "#ffeaa7"; 
ravno.style.backgroundColor = "#ffeaa7";  
javob.style.backgroundColor = "#55efc4";  
javob.style.borderColor = "#00b894";

