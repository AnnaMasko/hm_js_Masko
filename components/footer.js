export default class Footer{
    constructor(){
        this.init()
    }
    create(){
        const footer = document.createElement("div")
        footer.classList.add('footer')
        this.element = footer
    }

    init (){
        this.create()
    }

}

const footer = new Footer();
footer.init();
export {footer};
//console.log(header)