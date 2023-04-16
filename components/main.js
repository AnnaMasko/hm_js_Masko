export default class Main{
    constructor(){
        this.init()
    }
    create(){
        const main = document.createElement("div")
        main.classList.add('main')
        this.element = main
    }    

    init (){
        this.create()
    }

}

const main = new Main();
main.init();
export {main};
//console.log(header)