//if (confirm("вы уверены?")) {
  //  alert ("Hello workd");
//}

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
if (element.classList.contains("gold"))
    // Удаляем класс
    element.classList.remove("gold");
else   

    element.classList.add("gold");
}


let button = document.getElementById("main_btn");
console.log(button);
button.addEventListener('click', changedColor)