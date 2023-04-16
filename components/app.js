import Header, {header} from './header.js'
import Nav, {nav} from './nav.js'
import Main, {main} from './main.js'
import Footer, {footer} from './footer.js'


export default class App{
    getData(){
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data=>{
                if (!localStorage.getItem('products'))
                {
                localStorage.setItem('products', JSON.stringify(data))
                const returnObject = JSON.parse(localStorage.getItem('products'))
                console.log(returnObject)
                }
            })
    }
    constructor(){        
        this.init()
    }
    create(){
        const app = document.createElement("div")
        app.classList.add('app')
        this.element = app
    }
    render(){
        document.body.prepend(this.element)
        this.element.append(header.element)
        this.createHeader()
        this.element.append(nav.element)
        this.createNav()
        this.element.append(main.element)
        this.createCards()

        this.element.append(footer.element)
       
    }
    createHeader(){
        const title = document.createElement('h1')
        title.classList.add('header__title')
        header.element.append(title)
        title.innerHTML = 'Our Store'
    }

    createNav(){
        const home = document.createElement('a')
        home.classList.add('nav__item')
        home.setAttribute('href', '#')
        home.innerHTML='Home'
        nav.element.append(home)

        const shop = document.createElement('a')
        shop.classList.add('nav__item')
        shop.setAttribute('href', '#')
        shop.innerHTML='Shop'
        nav.element.append(shop)

        const contacts = document.createElement('a')
        contacts.classList.add('nav__item')
        contacts.setAttribute('href', '#')
        contacts.innerHTML='Contacts'
        nav.element.append(contacts)
    }

    createCards(){

        const cards = document.createElement('div')
        cards.classList.add('cards')
        main.element.append(cards)
        
        const ret = JSON.parse(localStorage.getItem('products'))
        console.log(ret)
        ret.forEach(element => {
        const card = document.createElement('div')
        card.classList.add('card')
        cards.append(card)
        
        //const id = document.createElement('div')
        //id.classList.add('id')
        //card.append(id)

        const image = document.createElement('img')
        image.classList.add('image')
        image.setAttribute('src', element.image)
        image.setAttribute('alt', 'image')
        card.append(image)

        const title = document.createElement('h4')
        title.classList.add('card__title')
        card.append(title)
        title.innerHTML = element.title

        const price = document.createElement('p')
        price.classList.add('card__price')
        card.append(price)
        price.innerHTML = element.price + ' USD'

        const btn = document.createElement('button')
        btn.classList.add('card__button', 'button')
        btn.innerHTML ='BUY'
        card.append(btn)

        });
        
    }
    init (){
        this.getData();
        const head = document.createElement('meta')
        document.head.append(head)
        head.setAttribute('charset', 'UTF-8')

        const title = document.createElement('title')
        document.head.append(title)
        title.innerHTML = 'My Projekt'


        const link = document.createElement('link')
        document.head.append(link)
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('href', '/css/style.css')
       
        this.create()
        this.render()
    }

}

const app1 = new App ()
console.log(app1)