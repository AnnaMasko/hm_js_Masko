'use strict';

//task1
{ const result = (a, b, c) => console.log((a - b) / c); }

//task2
{
    function chislo(a) {
        let arr = [];
        arr.push(Math.pow(a, 2));
        arr.push(Math.pow(a, 3));
        return (arr)
    }

    console.log(chislo(3));
}
//task3
{
    const max = (a, b) => {
        if (a > b) { return (a) }
        return (b)

    }

    const min = (a, b) => {
        if (a < b) { return (a) }
        return (b)
    }
    console.log('max = ')
    console.log(max(prompt('Введи а'), prompt('Введи b')))
    console.log('min = ')
    console.log(min(prompt('Введи а'), prompt('Введи b')))
}

//task4
{
    let arr = [];
    let a = '';
    function arrelem() {

        while (a !== null) {
            a = prompt('Введи элемент массива');
            arr.push(a)
        }
    }

    function arrvyvod() {
        for (let i = 0; i < arr.length - 1; i++)
            console.log(arr[i]);
    }
    arrelem();
    arrvyvod();
}

//task5

function isEven(a) {
    if (a % 2 === 0)
        return (true)
    return (false)
}
console.log(isEven(prompt('Введи число для проверки четности')));


//task6
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
function EvenArr(a) {
    for (let i = 0; i < a.length; i++)
        if (isEven(a[i]) === false)
            a.splice(i, 1);
    return (a);
}
console.log(EvenArr(arr));

//task7
function piramide(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++)
            document.write(i);
        document.write(`<br>`);
    }

}
console.log(piramide(prompt('введи количество рядов пирамиды')));
*/
//task8

{
    
    

    function drawTriangle(height) {

        for (let i=1;i<=height; i++){
          let symbol = " ".repeat(whitespace) ; 
          whitespace--
          console.log(`${symbol}${string.join(``)}${symbol}`);
          string.push(`**`)
        }

    }    
    let height = prompt('Введи высоту пирамиды');
    let string = ["*"]
    let whitespace = height-1;
    drawTriangle(height);

}


//task9
function fib() {
    let a = 1;
    let b = 1;
    let arr = [1, 1];
    for (let i = 3; i <= 16; i++) {
        let c = a + b;
        a = b;
        b = c;
        arr.push(b);
    }
    return arr;
}

console.log(fib());

//task10
function getChislo(n) {
    let sum = 0;
    n = String(n);
    for (let i = 0; i < n.length; i++) {
        sum = sum + Number(n[i]);
        //console.log('sum = ', sum);
    }

    if (sum > 9)
    getChislo(sum)
    else console.log('сумма цифр числа = ',sum);
}
getChislo(prompt('Введи число'));

//task11
let arr = [10,21,34,43,55,76,5];
function arrVyvod(arr) {
	console.log(arr.shift(), arr);
	
	if (arr.length != 0) {
		arrVyvod(arr);
	}
}
arrVyvod(arr);

//task12
function getStudent(name, surname, otch, numgr){
    
    let s='Домашняя работа: "Функции"';
    let s1=`Выполнил студент гр ${numgr}`;
    let s2 = `${surname} ${name} ${otch}`;
    let max=0;
    if (s.length>max) max=s.length;
    if (s1.length>max) max= s1.length;
    if (s2.length>max) max=s2.length;
    for (let i=0; i<max; i++)
    {
        document.write('*');
    }
    document.write(`<br>${s} <br>`);
    document.write(`${s1} <br>`);
    document.write(`${s2} <br>`);
    for (let i=0; i<max; i++)
    {
        document.write('*');
    }
}
let name = prompt('Введи имя');
    let  surname = prompt('Введи фамилию');
    let otch = prompt('Введи отчество');
    let numgr = prompt('Введи номер группы');
getStudent(name, surname, otch, numgr);