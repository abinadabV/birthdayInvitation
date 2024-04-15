window.addEventListener('scroll', function(){
    let animation1 = document.getElementById('animated1');
    let animation2 = document.getElementById('animated2');
    let animation3 = document.getElementById('animated3');
    let animation4 = document.getElementById('animated4');

    let positionImage1 = animation1.getBoundingClientRect().top;
    let positionImage2 = animation2.getBoundingClientRect().top;
    let positionImage3 = animation3.getBoundingClientRect().top;
    let positionImage4 = animation4.getBoundingClientRect().top;

    let screenSizeThird = window.innerHeight / 3;
    let sizeAction = screenSizeThird * 2;

    if (positionImage1 < sizeAction){
        animation1.style.animation = 'moved 1s ease-out'
    }

    if (positionImage2 < sizeAction){
        animation2.style.animation = 'moved 1s ease-out'
    }

    if (positionImage3 < sizeAction){
        animation3.style.animation = 'moved 1s ease-out'
    }

    if (positionImage4 < sizeAction){
        animation4.style.animation = 'moved 1s ease-out'
    }
})