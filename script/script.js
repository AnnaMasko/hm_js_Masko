"use strict";
const slider = document.querySelector('.sliderContainer')
const sliderImg = document.querySelectorAll('.item__img')
const sliderLine = document.querySelector('.items')

const btnnext = document.querySelector('.button__next')
const btnprev = document.querySelector('.button__prev')


let countSlide = 0
let sliderWidth = (slider.offsetWidth)/5
//console.log(sliderWidth)


const nextSlide = () =>{
    countSlide++;
    //console.log(countSlide)
    if (countSlide >= sliderImg.length-5){
        countSlide =0
    }
    
    rollSlider()
}

const prevSlide = () =>{
    countSlide--;
    //console.log(countSlide)
    if (countSlide < 0){
        countSlide = sliderImg.length -5
    }
    rollSlider()
}

btnnext.addEventListener('click', nextSlide)
btnprev.addEventListener('click', prevSlide)

const rollSlider =() =>{
    sliderLine.style.transform = `translateX(${-countSlide * sliderWidth}px)`
} 

sliderImg.forEach (element =>{
    element.addEventListener('click', (img) =>{
        let src = img.currentTarget.src
        console.log(src);
        window.open('about: black', 'image').document.write("<img src='" + src + "' alt='something' />")
    })
})
