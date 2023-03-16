'use strict';

//task1
{
    let str = 'aaa@bbb@ccc';
    let new_str = str.replace(/@/, '!');
    console.log(new_str);
}

//task2
{
    const date = '2025-12-31';
    let newDate = date.split('-').reverse().join('/');
    console.log(date);
    console.log(newDate);
}

//task3
{
    const str ='Я учу javascript';
    let s ='учу';
    let s1 ='javascript';
    let n = str.indexOf(s);
    let k = str.indexOf(s1);    
    console.log(str.substring(n,s.length+n));
    console.log(str.substring(k,s1.length+k));
}

//task4
{
    let sum =0;
    const arr = [4, 2, 5, 19, 13, 0, 10];
    for (let i=0; i<arr.length; i++)
        sum += Math.pow(arr[i],3);    
    console.log('Квадратный корень из суммы кубов элементов = ',Math.sqrt(sum)); 
}

//task5 
{
    let a = 3;
    let b = 6;
    let c = Math.abs(a-b);
    console.log(c);
}
//task6
{
    let date = new Date();
    console.log (date);
    const month = date.getMonth();
    const day = date.getDate()
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    function zero (num){
        if (num > 0 && num <10) 
        return '0'+num;
        else return num;
    }
   console.log(`${hour}:${minute}:${second} ` , zero(day),'.', zero(month+1),'.', date.getFullYear());
}

//task7
{
    const str = 'aa aba abba abbba abca abea';
    console.log(str.match(/ab+a/g));
}

//task8
{
    function ValidPhone(phone) {
        let t = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
        let valid = t.test(phone);
        if (valid) return true; else return false;
    }
    console.log(ValidPhone(prompt('введи номер телефона')));
}

//task9
{
    {
        function ValidEmail(email) {
            let t = /^[\w_\.]{3,16}@[\w]+\.[a-z]{2,4}$/i;
            let valid = t.test(email);
            if (valid) return true; else return false;
        }
        console.log(ValidEmail(prompt('введи email')));
    }
}