'use strict';

const input = document.querySelector("input[type='text']");
const div_todo = document.querySelector('div.todo');
const clearButton = document.querySelector("button.clear");
const ul = document.createElement('ul');
input.after(ul);
ul.classList.add('todo__items');



input.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
        if(input.value !=="")
        {createToDo();}
        else{ alert('Повтори ввод');}   
    }
});

function createToDo() {   
    const chekbox = document.createElement('input');
    chekbox.setAttribute('type', 'checkbox');
    chekbox.classList.add('checkbox')
    const li = document.createElement('li');
    let textSpan = document.createElement("span");
    textSpan.classList.add('item');
    textSpan.append(input.value);
    ul.appendChild(li).append(chekbox, textSpan);
    if (input.value === input.value) {
        input.value = '';
    }

    chekbox.addEventListener("click", () => {
        li.style.textDecoration = "line-through";
        if (chekbox.checked === false) {
            li.style.textDecoration = "none";
        }
    }
    )

    textSpan.addEventListener("click", () => {
        const change = prompt('Измени задачу');
        console.log(change);
        if (change !== "")
        {
            textSpan.append(change);
            textSpan.innerHTML = "";
            ul.appendChild(li).append(chekbox, textSpan);
        }
        else alert('Задача не будет изменена');

        
    }
    )
}


clearButton.addEventListener("click", () => {
    ul.innerHTML = "";
    localStorage.removeItem('todos', ul.innerHTML);
});



