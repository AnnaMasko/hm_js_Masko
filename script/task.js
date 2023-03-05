"use strict";
//task1
{
    for (let i = 1; i <= 50; i++)
        console.log(i);

    for (let i = 35; i >= 8; i--)
        console.log(i);
}

//task2
{
    let i = 89;
    document.write(`task2<br>`)
    while (i >= 11) {
        document.write(`${i}<br>`)
        i--
    }
}
//task3
{
    let s = 0;
    for (let i = 0; i <= 100; i++) {
        s = s + i;
    }
    document.write(`сумма чисел от 0 до 100 = ${s}<br>`)
}

//task4
{
    let n = prompt('Введи число от 1 до 5');
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s = s + i;
    }
    document.write(`сумма чисел от 0 до ${n} = ${s}<br>`)
}

//task5

{
    document.write(`task5 через while <br>`)
    let i = 8;
    while (i <= 56) {
        document.write(`${i}<br>`)
        i = i + 2;
    }
    document.write(`task5 через for <br>`)
    for (i = 8; i <= 56; i++)
        if (i % 2 == 0) {
            document.write(`${i}<br>`)
        }
}

//task6
{
    for (let i = 2; i < 10; i++) {
        for (let j = 1; j <= 9; j++) {
            let k = i * j;
            document.write(`${i}*${j} = ${k} <br>`)
        }
    }
}

//task7
{
    let n = 1000;
    let num = 0;
    while (n >= 50) {
        num++;
        n = n / 2;
    }
    document.write(`Получилось число ${n}, количество итераций ${num} <br>`)
}

//task8
{
    let count = 0;
    let str;
    let s = 0;
    while (str !== null) {
        str = prompt('Введи число');
        s = s + Number(str);
        count++;
    }
    let srznach = s / (count - 1);
    document.write(`Сумма чисел =  ${s}, среднее арифметическое =  ${srznach} <br>`)
}

//task9
{
    let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57 ";
    let max = str[0];
    let min = str[0];
    let st = '';
    document.write(` Исходная строка ${str}`);
    for (let i = 1; i < str.length; i++) {
        if (str[i + 1] === ' ') {
            st = Number(str[i - 1] + str[i]);
            if (st > max) { max = st; }
            if (st < min) {
                min = st;
            }
        }
    }
    document.write(` min = ${min}, max = ${max} <br>`);
}

//task10
{
    let n = prompt('Введи число');
    let count = 0;
    let s = 0;
    let str = '';
    document.write(`Цифры числа: <br>`);
    for (let i = 0; i < n.length; i++) {
        document.write(` ${n[i]} <br>`);
        count++;
        s = s + Number(n[i]);
    }
    document.write(`Количество цифр в числе: ${count} <br> Сумма цифр = ${s} <br>`);
    for (let i = n.length - 1; i >= 0; i--) {
        str = str + n[i];
    }
    document.write(`Перевернутое число: ${str} <br>`);
}