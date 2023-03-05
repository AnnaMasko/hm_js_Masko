"use strict";
//task1
const name = prompt('Введите ваше имя');
const age= prompt('Введите ваше возраст');
{  
    const city=prompt('в каком городе Вы живете');
    const phone=prompt('Введите номер телефона');
    const email=prompt('Введите email');
    const company=prompt('Где вы работаете?');
    alert(`Меня зовут ${name}. Мне ${age} лет. Я живу в ${city} и работаю в компании ${company}. Мои контактные данные ${phone}, ${email} `)
    
}
//task2
{
    const date = new Date();
    console.log('Вы родились в ',date.getFullYear()-age), 'году' ;
}


//task3
{
    const t = '123456';
    let num1 = Number(t[1]) + Number(t[2]) + Number(t[3]);
    let num2 = Number(t[4]) + Number(t[5]) + Number(t[6]);
    if (num1 === num2) {
        console.log('да')
    }
    else { console.log('нет'); }
}



//task 4
let a = 1;
{
    if (a > 0) { console.log('верно'); }
    else {
        console.log('неверно');
    }
}


//task5
{
    a = 10;
    let b = 2;
    console.log('сумма = ', a + b);
    console.log('разность = ', a - b);
    console.log('произведение = ', a * b);
    console.log('частное = ', a / b);
    if (a + b > 1) {
        console.log('сумма в квадрате = ', Math.pow(a + b, 2));
    }
}



// task6
{
    if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
        console.log('Верно');
    }
    else {
        console.log('неверно');
    }
}

//task7
{
    let n =prompt('Введи число от 0 до 59');
    if (n>0 && n<=15) {console.log('n в первой четверти часа')}
    if (n>15 && n<=30) {console.log('n во второй четверти часа')}
    if (n>30 && n<=45) {console.log('n в  третьей четверти часа')}
    if (n>45 && n<=59) {console.log('n в четвертой четверти часа')}
    
}
 
//task8
{
    let day =prompt('Введи число от 1 до 31');
    if (day>0 && day<=10) {console.log('первая декада')}
    if (day>10 && day<=20) {console.log('вторая декада')}
    if (day>20 && day<=31) {console.log('третья декада')}    
}

//task9
const day =prompt('Введи количество дней');
{
    
    const year = day/365;
    const month = Math.ceil(day/31);
    const week = day/7;
    const h = day *24;
    const min = h*60;
    const sec = min * 60;
    if (day < 7) {
        console.log('Меньше года \n Меньше месяца \n Меньше недели \n', h, 'часов \n', min,'минут \n', sec,'секунд \n');
    }
    if (day>=7 && day<31)
    {
        console.log('Меньше года \n Меньше месяца', week,'недель \n', h, 'часов \n', min,'минут \n', sec,'секунд \n');
    }
    if (day>=31 && day<365)
{
    console.log('Меньше года \n',month,'месяцев \n', week,'недель \n', h, 'часов \n', min,'минут \n', sec,'секунд \n');
}    
if (day>=365)
{
    console.log(year,' лет \n',month,'месяцев \n', week,'недель \n', h, 'часов \n', min,'минут \n', sec,'секунд \n');
}

//task10
switch (month){
    case 1:
    case 2:
    case 12: console.log ((month),' -й месяц \n Зима');
    break;
    case 3:
        case 4:
            case 5: console.log ((month),' -й месяц \n Весна');
            break;
            case 6:
        case 7:
            case 8: console.log ((month),' -й месяц \n Лето');
            break;
            case 9:
        case 10:
            case 11: console.log ((month),' -й месяц \n Осень');
            break;
            default: console.log(':)');
            break
}
}    



