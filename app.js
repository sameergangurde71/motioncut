const slide = document.querySelectorAll(".slide")

var counter = 0;

slide.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    if (counter != 0){
        counter--;
        slideImage();
    }
}
const goNext = () => {
    if (counter < slide.length - 1){
        counter++;
        slideImage();
    }    
}

const slideImage = () => {
    slide.forEach((slide) => {
        slide.style.transform = `translateX(${-counter * 100}%)`;
    })
}