export default class Header{
    constructor(){
        this.init()
    }
    create(){
        const header = document.createElement("div")
        header.classList.add('header')
        this.element = header
    }

    init (){
        this.create()
    }

}

const header = new Header();
header.init();
export {header};
//console.log(header)