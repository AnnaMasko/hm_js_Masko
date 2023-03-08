"use strict";
//task1
{
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < 5; i++)
        document.write(`${arr[i]} `)
    document.write(`<br> `)
}

//task2
{
    let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    document.write(`Исходный массив: <br> `)
    for (let i = 0; i < arr.length; i++)
        document.write(`${arr[i]} `)
    document.write(`<br> `)
    document.write(`Элементы больше -10 и меньше -3: <br> `)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > -10 && arr[i] < -3) {
            document.write(`${arr[i]} `)

        }
    }
    document.write(`<br> `)
}

//task3
{
    let arr = [];
    let i = 23;
    let result = 0;
    while (i <= 57) {
        arr.push(i);
        i++;
    }
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i];
        document.write(`${arr[i]} `)
    }
    document.write(`<br> Сумма чисел = ${result} `)
}

//task4
{
    let arr = ['10', '20', '30', '50', '235', '3000'];
    document.write(`<br> Массив из строковых чисел <br>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`${arr[i]} `)
    }
    document.write(`<br> Элементы, начинающиеся на 1, 2 или 5 <br>`)
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        let char = elem[0];
        if (Number(char) === 1 || Number(char) === 2 || Number(char) === 5)
            document.write(` ${arr[i]}  `)

    }

}

//task5
{
    document.write(` <br>`)
    let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'СБ' && arr[i] !== 'ВС') {
            document.write(`${arr[i]} <br>`)
        }
        else document.write(`<h1>${arr[i]} </h1>`)
    }
}
//task6
{
    let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    arr.push('Неделя');
    for (let i = 0; i < arr.length; i++)
        document.write(`${arr[i]} `)
    document.write(` <br>`)
    document.write(`Последний элемент массива ${arr[arr.length - 1]} <br>`);
}

//task7
{
    let arr = [];
    let k;
    while (k !== null) {
        k = prompt('Введи число');
        if (k !== null) {
            arr.push(k);
        }

    }
    document.write(`Исходный массив <br>`)
    for (let i = 0; i < arr.length; i++)
        document.write(`${arr[i]} `);
    arr.sort(function (a, b) { return a - b; }
    )
    document.write(`Отсортированный  массив <br>`)
    for (let i = 0; i < arr.length; i++)
        document.write(`${arr[i]} `);
}

//task 8
{
    let i;
    let arr = [12, false, 'Текст', 4, 2, -5, 0];
    document.write(`Исходный массив <br>`)
    for (i = 0; i < arr.length; i++)
        document.write(`${arr[i]} `);
    i = 0;
    while (i < arr.length) {
        arr.reverse();
        i++;

    }

    document.write(`<br> Перевернутый массив <br>`)
    for (i = 0; i < arr.length; i++)
        document.write(`${arr[i]} `);
}

//task9
{
    let count = 0;
    let arr = [5, 9, 21, , , 9, 78, , , , 6];
    document.write(`Исходный массив <br>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`${arr[i]} `);
        if (arr[i] === undefined)
            count++;
    }
    document.write(`<br> Количество пустых элементов = ${count} <br>`)
}

//task10
{
    let arr = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
    let result = 0;
    let k = 0;
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            k = i;
            break;
        }
    }
    for (let i = arr.length - 1; i > k; i--) {
        if (arr[i] === 0) {
            n = i;
            break;
        }
    }
    if (n !== 0) {
        for (let i = k; i < n; i++) {
            result = result + arr[i];
        }
    } else document.write(`В массиве нет двух нулей <br>`);
    if (result !== 0)
        document.write(`Сумма элементов между двумя нулями = ${result}`);




}