"use strict";

const kolya = {
    id: '1',
    name: 'Kolya',
    email: 'tut@mail.ru',
    address: 'pushkina 20-25',
    phone: '+375291112345'
}

const kolya1 = {
    id: '2',
    name: 'Kolya',
    email: 'tut@gmail.ru',
    address: 'pushkina 20-25',
    phone: '+375292222222'
}


class User {
    constructor(user) {
        this.data = user
    }
    editUser(newUser) {
        this.data = newUser
    }
    getUser() {
        return this.data
    }
}

const user = new User(kolya)



class Contacts {
    constructor() {
        this.data = []
    }

    add(newCont) {
        const newUser = new User(newCont)
        this.data = [... this.data, newUser.data] //оператор расширения
    }
    edit(id, data) {
        const users = this.data.map(element => {
            if (element.id === id) {
                return { ...element, ...data }
            }
            return element
        })
        user.editUser.call(this, users)

    }

    remove(id) {
        return this.data = this.data.filter(element => element.id !== id)
    }

    get() {
        return this.data
    }


}

const users = new Contacts();
/*console.log(users)
users.add(kolya)
users.add(kolya1)
users.edit('1', {name: "Dima"})
users.remove('2')
console.log(users.get())

*/
class ContactApp extends Contacts {
    constructor() {
        super();
        this.render();
        this.id = 1;
        if (!localStorage.getItem('contact'))
        {this.getData();}
        
    }
    //  id = 0;
    render() {
        const form = document.querySelector('form')
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const { elements } = form
            this.contact = {}

            Array.from(elements)
                .filter(element => element.name)
                .forEach(element => {
                    const { name, value } = element
                    this.contact[name] = value
                    this.contact.id = this.id
                    element.value = ""
                })
            super.add(this.contact)
            this.onAdd()
            this.handleLocalStrogare()
        })
    }

    setCookie(name, value) {
        let exp = new Date()

        //exp.setDate(exp.getDate() + 10)
        exp.setSeconds(exp.getSeconds() + 20)
        document.cookie = `${name}=${value}; path=/; expires= ${exp}`
    }

    deleteCookie(name) {
        setCookie(name, "", {
            'max-age': -1
        })
    }

    handleLocalStrogare() {
        if (!this.data.length) {
            return localStorage.removeItem('users')
        }
        localStorage.setItem('users', JSON.stringify(this.data))
        this.setCookie('storageExpiration', 'true')
        this.deleteCookie('storageExpiration')
    }

    //асинхронные запросы к серверу
    getData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.data = [... this.data, ... data]
                this.handleLocalStrogare()
            })
    }

    onAdd() {

        const users = document.querySelector('.contacts__list')
        const list = document.createElement('div')
        list.className = 'user__item'


        // console.log(this.contact, '=====this.contsct ')
        //console.log('his.contsct.name ', this.contact.name)

        const nameUser = document.createElement('span')
        nameUser.innerHTML = this.contact.name
        nameUser.classList.add('user__itemName', 'item')

        const emailUser = document.createElement('span')
        emailUser.innerHTML = this.contact.email
        emailUser.classList.add('user__itemEmail', 'item')

        const adressUser = document.createElement('span')
        adressUser.innerHTML = this.contact.address
        adressUser.classList.add('user__itemadress', 'item')

        const phoneUser = document.createElement('span')
        phoneUser.innerHTML = this.contact.phone
        phoneUser.classList.add('user__itemphone', 'item')


        //создание кнопок для редактирования и удаления контакта
        const button__container = document.createElement("div")

        button__container.className = "buttonContainer"
        const editButton = document.createElement('button')
        editButton.classList.add('user__editButton', 'button')
        editButton.innerHTML = "Edit"

        const removeButton = document.createElement('button')
        removeButton.classList.add('user__removeButton', 'button')
        removeButton.innerHTML = "Remove"

        button__container.append(editButton, removeButton)
        users.append(list)
        list.append(nameUser, emailUser, adressUser, phoneUser, button__container)
        list.setAttribute('id', this.id)
        this.id++;


        removeButton.addEventListener("click", event => {
            const { target } = event
            const container = target.closest('.user__item')
            container.remove(this.id)
            super.remove(+container.id)
            console.log(super.remove(+container.id))
            this.handleLocalStrogare()
        })


        editButton.addEventListener("click", event => {
            const { target } = event
            const container = target.closest('.user__item')

            const elems = container.childNodes;
            /* for (let elem of elems) {
                 console.log(elem.innerHTML);
                 
             }*/
            let a;

            if (confirm('Change your name?') === true) {
                a = prompt('New name')
                if (a !== '') {
                    elems[0].textContent = a
                }
            }

            if (confirm('Change your email?') === true) {
                a = prompt('New email?')
                if (a !== '') {
                    elems[1].textContent = a
                }
            }
            if (confirm('Change your adress?') === true) {
                a = prompt('New adress?')
                if (a !== '') {
                    elems[2].textContent = a
                }
            }

            if (confirm('Change your phone?') === true) {
                a = prompt('New phone?')
                if (a !== '') {
                    elems[3].textContent = a
                }
            }
            super.edit(+this.id, container)
            this.handleLocalStrogare()
        })

    }
}

window.addEventListener("load", () => {
    if (!document.cookie.includes("storageExpiration")) {
        localStorage.removeItem("contacts");
    }
});

const contactApp = new ContactApp();
//contactApp.onAdd();