'use strict';

const style = document.createElement('style');
document.head.append(style);
style.innerHTML = `
h1{
    font-size: 36px;
    font-family: 'Arvo', serif;
    font-weight: 400;
    color: #212121;
    text-align: center;
}
.p1 {
    font-size: 14px;
    font-family: 'OpenSans', serif;
    color: #9FA3A7;
    text-align: center;
}
.cards{
    height: 480px;
    display: flex;
    justify-content: center;
    
}
.card{
    width: 400px;
    outline: 1px solid #E8E9ED;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h5{
    width: 107px;
    font-family: 'Montserrat', serif;
    font-size: 12px;
    font-weight: 700;
    
    text-align: center;
}
.title_h2{
    width: 210px;
    font-size: 36px;
    font-family: 'Arvo', serif;
    font-weight: 400;
    color: #212121;
    text-align: center;
}
.description{
    width: 210px;
    font-size: 12px;
    font-family: 'OpenSans', serif;
    color: #212121;
    color: #9FA3A7;
    text-align: center;
}
.button{
    width: 147px;
    height: 46px;
    border: solid 1px;
    border-radius: 50px;
    border-color: #FFC80A;
    display: flex;
    justify-content: center;
    align-items: center;
}
.text_button{
    font-family: 'Montserrat', serif;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
}
.backcolor{
    background-color: #8F75BE;
}
.h5_color{
    color: #FFC80A;
}

.h2_color{
    color: #FFFFFF;
}
.description_color{
    color: #FFFFFF;
}
.text_button_color{
    color: #FFFFFF;
}
`

let title = document.createElement('title');
title.innerHTML = 'call to action';

let metaUTF8 = document.createElement('meta');
metaUTF8.setAttribute('charset', 'UTF-8');

document.head.append(title);
document.head.append(metaUTF8);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
document.body.append(h1);

let p = document.createElement('p');
p.setAttribute('class', 'p1');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
document.body.append(p);

const cards = [
    {
        titleFirst: "FREELANCER",
        titleSecond: "Initially designed to",
        text: 'But I must explain to you how all this mistaken idea of denouncing',
        button_text: 'Start here'
    },
    {
        titleFirst: "STUDIO",
        titleSecond: "Initially designed to",
        text: 'But I must explain to you how all this mistaken idea of denouncing',
        button_text: 'Start here'
    }
]

let div = document.createElement('div');
document.body.append(div);
div.setAttribute('class', 'cards');

cards.forEach(el => {

    let div_card = document.createElement('div');
    div.append(div_card);
    div_card.setAttribute('class', 'card');

    let h5 = document.createElement('h5');
    h5.innerHTML = el.titleFirst;
    div_card.append(h5);

    let h2 = document.createElement('h2');
    h2.innerHTML = el.titleSecond;
    div_card.append(h2);
    h2.setAttribute('class', 'title_h2');

    let p = document.createElement('p');
    p.innerHTML = el.text;
    div_card.append(p);
    p.setAttribute('class', 'description');


    let div_btn = document.createElement('div');
    div_card.append(div_btn);
    div_btn.setAttribute('class', 'button');
    let a = document.createElement('a');
    a.innerHTML = el.button_text;
    div_btn.append(a);
    a.setAttribute('class', 'text_button');
}
)

let listCard = document.getElementsByClassName('card');
listCard[1].setAttribute('class', 'card backcolor');

let listh5 =  document.getElementsByTagName('h5');
listh5[1].setAttribute('class', 'h5 h5_color');

let listh2 =  document.getElementsByClassName('title_h2');
listh2[1].setAttribute('class', 'title_h2 h2_color');

let listDescription =  document.getElementsByClassName('description');
listDescription[1].setAttribute('class', 'description description_color');

let listLink =  document.getElementsByClassName('text_button');
listLink[1].setAttribute('class', 'text_button text_button_color');