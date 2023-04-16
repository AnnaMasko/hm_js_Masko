export default class Nav{
    constructor(){
        this.init()
    }
    create(){
        const nav = document.createElement("div")
        nav.classList.add('nav')
        this.element = nav
    }

    init (){
        this.create()
    }

}

const nav = new Nav();
nav.init();
export {nav};
//console.log(header)