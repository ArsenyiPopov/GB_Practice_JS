// if (confirm("вы уверены?")) {
//     alert ("Hello workd");
// }

//else {
  //  alert("Всем пока!");
//}
//console.log("всем привет")


function changedColor() {


// создаем переменую element и находим HTML елемент по id=el
let element = document.getElementById("el");
// выводим консоль
console.log(element);
//проверка на наличие класса
// if (element.classList.contains("gold"))
//     // Удаляем класс
//     element.classList.remove("gold");
// else   

//     element.classList.add("gold");
//проверка на наличие класса (как условие выше)
element.classList.toggle("gold");
element.textContent = element.textContent == "Just Do It" ? "Think Different" : "Just Do It";
}


let button = document.getElementById("main_btn");
console.log(button);
button.addEventListener('click', changedColor)

let name = prompt("Как вас зовут?",);

alert(`Добро пожаловать, ${name}`); 


let age = prompt("Сколько вам лет?");
switch(true){
  case 0 < age && age < 18 : 
      alert("Ты еще ребенок!");
  break;
  case 18 < age && age < 30 : 
      alert("Добро пожаловать!");
  break;
}

