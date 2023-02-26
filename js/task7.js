let s=2000000, p=10, years=5;
Pereplata = (s*p/12*Math.pow(1+p/12,60))/(Math.pow(p/12,60)-1)*60;
console.log('Переплата по кредиту', Pereplata);