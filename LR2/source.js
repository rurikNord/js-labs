alert("Задание 1");
var time;
time = prompt("Enter a numder:");
if (time > 17) {
    alert("Добрый вечер")
} else {
    alert("Добрый день");
}

alert("Задание 2");
var name;
name = prompt("Enter name:");
if (name == "Jonh") {
    alert("Hello, Jonh!")
} else {
    alert("Who are you?")
}

alert("Задание 3");
var login, pass;
var logArray = ["ivan", "ssss", "gibs"];
var passArray = ["333", "666", "0000"];
login = prompt("Enter login:");
pass = prompt("Enter password:");
logIn = false;
for (let i = 0; i < logArray.length; i++) {
    if (login == logArray[i] && pass == passArray[i]) {
        alert("Welcome!");
        logIn = true;
    }
}
if (!logIn) {
    alert("Unknown user");
}

alert("Задание 4");
var num1 = Number(prompt("Enter num1:"));
var num2 = Number(prompt("Enter num2:"));
var num3 = Number(prompt("Enter num3:"));
alert(Math.max(num1, num2, num3));