let slidePos = 0;
const carousels = document.querySelectorAll('.carousel_item');
const carouselsLength = carousels.length;

document.querySelector("#carousel_button--next").addEventListener("click", function () {
    moveToNext();
});

document.querySelector("#carousel_button--prev").addEventListener("click", function () {
    moveToPrev();
});

function updateSlidePosition() {
    for (let slide of carousels) {
        slide.classList.remove("visible")
        slide.classList.add("hidden")
    }

    carousels[slidePos].classList.add('visible')
}

function moveToNext() {
    
    if (slidePos == carouselsLength - 1) { /* count is different */
        slidePos = 0;
    } 
    else {
        slidePos++;
    }
    updateSlidePosition();
}

function moveToPrev() {
    
    if (slidePos == 0) { /* count is different */
        slidePos = carouselsLength - 1;
    } 
    else {
        slidePos--;
    }
    updateSlidePosition();
}