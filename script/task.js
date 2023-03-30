'use strict';

function Car (){
    this.state = false;

    this.drive = function(){
        this.state = true;        
    }
    this.notDrive = function(){
        this.state = false;
    }
    this.get = function (){
        this.s = +prompt('Какое расстояние планируете проехать в км?');
        this.toplivo = confirm('Заправляем машину газом?');
        this.model = prompt('Введи модель автомобиля: audi, mercedes, bmw');        
        this.price();
    }
   
    this.price = function(){
        if (this.toplivo === true)
        switch (this.model) {
            case 'audi':
                this.result = Math.round( this.s * 12/100*1.29);
                break;
            case 'mercedes':
                this.result = Math.round( this.s * 0.1*1.29);
                break;
                case 'bmw':
                this.result = Math.round( this.s * 14.2/100*1.29);
                break;
                default: this.result = 0;
        }
        else 
        switch (this.model) {
            case 'audi':
                this.result =Math.round( this.s * 12/100*2.66);
                break;
            case 'mercedes':
                this.result = Math.round( this.s * 0.1*2.66);
                break;
                case 'bmw':
                this.result = Math.round( this.s * 14.2/100*2.66);
                break;
                default: this.result = 0;
        }
    }
    this.show = function() {
        alert(`Стоимость вашей поездки составит ${this.result} рублей`);
    }
}

let cars = new Car ();
cars.get();
cars.show();

let carVolvo = {
    mark: 'volvo',
    __proto__:cars
}
carVolvo.drive();
carVolvo.price();
console.log(carVolvo)




