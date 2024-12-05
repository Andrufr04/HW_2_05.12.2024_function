// Завдання 1
//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.
//
// let Task1 = function(a, b){ // Функциональное выражение
//     if(a < b) return-1;
//     else if(a > b) return 1;
//     else return 0;
// }

// let Task_1 = (a, b) => { // Стрелочная функция
//     if(a<b) return-1;
//     else if(a>b) return 1;
//     else return 0;
// }

// document.write(`Результат ${Task1(1, 2)} <br/>`);
// document.write(`Результат ${Task1(3, 2)} <br/>`);
// document.write(`Результат ${Task1(4, 4)} <br/>`);

// document.write(`Результат ${Task_1(1, 2)} <br/>`);
// document.write(`Результат ${Task_1(3, 2)} <br/>`);
// document.write(`Результат ${Task_1(4, 4)} <br/>`);

// Задание 2
// Написать функцию, которая вычисляет факториал переданного ей числа.
//
// let Task2 = function(n) {
//     let res = 1;
//     for (let i = 1; i <= n; i++) {
//         res *= i;
//     }
//     return res;
// }

// document.write(`n! = ${Task2(3)} <br/>`);

// Задание 3
// Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149.
// 
// let Task3 = function(a, b, c){
//     return a *100 + b *10 + c;
// }

// document.write(`Your num = ${Task3(1, 6, 3)} <br/>`);

// Задание 4
// Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрат
// 
// let Task4 = function(a, b){
//     if(b == undefined){
//         res = a * a;
//     }
//     else{
//         res = a * b;
//     }
//     return res;
// }

// document.write(`S = ${Task4(2, 3)} <br/>`);
// document.write(`S = ${Task4(2)} <br/>`);

// Задание 5
// Написать функцию, которая проверяет, является ли переданное 
// ей число совершенным. Совершенное число – это
// число, равное сумме всех своих собственных делителей.
// 
// let Task5 = function (num) {
//     if (num <= 1) return "Не совершенное";

//     let sum = 0;

//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//             sum += i;
//         }
//     }

//     if (num === sum){
//         return "Совершенное";
//     }
//     else{
//         return "Не совершенное";
//     }
// }

// document.write(`Ваше число - ${Task5(6)} <br/>`);

// Задание 6
// Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет.
//
// let Task6 = function (min, max) {
//     for (let num = min; num <= max; num++) {
//         let sum = 0;

//         for (let i = 1; i <= num / 2; i++) {
//             if (num % i === 0) {
//                 sum += i;
//             }
//         }

//         if (num > 1) {
//             if (num === sum) {
//                 document.write(`Число ${num} — совершенное <br/>`);
//             }
//         }
//     }
// }

// Task6(0, 10000);

// Задание 7
// Написать функцию, которая принимает время (часы, минуты, секунды) 
// и выводит его на экран в формате «чч:мм:сс». 
// Если при вызове функции минуты и/или секунды 
// не были переданы, то выводить их как 00.
// 
// let Task7 = function (h, m, s){
//     if (m == undefined)
//     {
//         m = "00"
//     }
//     if (s == undefined)
//     {
//        s = "00"
//     }

//     return `${h} : ${m} : ${s}`
// }

// document.write(`${Task7(1, 11, 11)} <br/>`);
// document.write(`${Task7(2, 22)} <br/>`);
// document.write(`${Task7(3)} <br/>`);

// Задание 8
// Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.
//
// let Task8 = function(h, m, s){
//     return (h * 3600) + (m * 60) + s;
// }

// document.write(`${Task8(1, 1, 1)} <br/>`);

// Задание 9
// Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч:мм:сс».
//
// let Task9 = function(sec)
// {
//     let h = Math.floor(sec / 3600);
//     let m = Math.floor((sec % 3600) / 60);
//     let s = sec % 60;

//     h = (h < 10 ? "0" : "") + h;
//     m = (m < 10 ? "0" : "") + m;
//     s = (s < 10 ? "0" : "") + s;

//     return `${h} : ${m} : ${s}`;
// }

// document.write(`${Task9(10)} <br/>`);

// Задание 10
// Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2
// даты, и возвращает результат в виде строки «чч:мм:сс». При
// выполнении задания используйте функции из предыдущих 2-х заданий: 
// сначала обе даты переведите в секунды,
// узнайте разницу в секундах, а потом разницу переведите
// обратно в «чч:мм:сс».
// 
// let Task10 = function(h1, m1, s1, h2, m2, s2){
//     let first = Task8(h1, m1, s1);
//     let second = Task8(h2, m2, s2);

//     let total = first - second;

//     return Task9(total);
// }

// document.write(`${Task10(1, 1, 1, 0, 0, 1)} <br/>`);