'use strict';

function Car (){
    this.state = false;

    this.on = function(){
        this.state = true;        
    }
    this.off = function(){
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
                this.result = this.s * 12/100*1.29;
                break;
            case 'mercedes':
                this.result = this.s * 0.1*1.29;
                break;
                case 'bmw':
                this.result = this.s * 14.2/100*1.29;
                break;
                default: this.result = 0;
        }
        else 
        switch (this.model) {
            case 'audi':
                this.result = this.s * 12/100*2.66;
                break;
            case 'mercedes':
                this.result = this.s * 0.1*2.66;
                break;
                case 'bmw':
                this.result = this.s * 14.2/100*2.66;
                break;
                default: this.result = 0;
        }
    }
    this.show = function() {
        alert(`Стоимость вашей поездки составит ${this.result} рублей`);
    }
}

let Cars = new Car ();
Cars.on();
Cars.get();
Cars.show();
Cars.off();

