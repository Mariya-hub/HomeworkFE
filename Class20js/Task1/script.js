// Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.
function fun1() {
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
    if (a < b && a < c) {
        console.log("Наименьшее число" + " " + a);
    }
    if (b < a && b < c) {
        console.log("Наименьшее число" + " " + b);
    }
    if (c < a && c < b) {
        console.log("Наименьшее число" + " " + c);
    }
}

// Создайте функцию, которая получает в качестве аргументов значения суток, часов и минут, а возвращает соответствующее им количество секунд.

function fun2() {
    let day = parseInt(document.getElementById('day').value);
    let hour = parseInt(document.getElementById('hour').value);
    let min = parseInt(document.getElementById('min').value);
    let sec = (day*24*60*60) + (hour*60*60) + (min*60);
    console.log(sec);
}