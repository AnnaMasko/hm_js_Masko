'use strict';

function App() {

    this.createTag = function () {
        const tag = document.createElement('p')
        document.body.append(tag)
    }

    this.getTag = function () {
        document.querySelector('p');
    }

    this.setAttribut = function () {
        const input = document.querySelector('input')
        input.setAttribute('type', 'text')
    }

    this.addContent = function () {
        const value = document.querySelector('p');
        value.innerHTML = prompt('введи свой текст')
    }
    this.searchClass = function () {
        const div = document.querySelector('.class')
    }
    this.addClass = function () {
        const setClass = document.querySelector('p')
        setClass.classList.add('paragraph')
    }
    this.removeClass = function () {
        const removeClass = document.querySelector('p')
        removeClass.classList.remove('paragraph')
    }

    this.toggleClass = function () {
        const getTag = document.querySelector('p')
        getTag.classList.toggle('newStyle');

    }
    this.hasClass = function () {
        const hasclas = document.querySelector('p')
        if (hasclas.classList.contains === true)
            return true
        else return false
    }
    this.appendEl = function () {
        const element = document.querySelector('div')
        const elem = document.createElement('p')
        const message = confirm('Добавить элемент внутрь тега div?')
        if (message === true) {
            element.append(elem)
        }
        else {
            element.before(elem)
        }
    }


}

let app = new App();
console.log(app)
app.createTag();
app.getTag();
app.setAttribut();
app.addContent();
app.searchClass();
app.addClass();
app.removeClass();
app.toggleClass();
app.appendEl();
