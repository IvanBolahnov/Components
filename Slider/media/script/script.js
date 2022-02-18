let 
sliderAutoPlayDurations = 10000
sliders = document.querySelectorAll(".slider"),
slidesContainer = [],
slides = [],
countSlide = [],
nowSlide = [],
autoPlay = [],
nextSlide = [],
previousSlide = [],
sliderAfter = [],
sliderBefore = [],
autoPlay = [];

for (let i = 0; i < sliders.length; i++){
    slidesContainer[i] = sliders[i].querySelector(".slider__slides"),
    slides[i] = slidesContainer[i].querySelectorAll(".slider__slide");
    countSlide[i] = slides[i].length;
    nowSlide[i] = 0;
    sliderAfter[i] = sliders[i].querySelector(".slider__button--after");
    sliderBefore[i] = sliders[i].querySelector(".slider__button--before");

    nextSlide[i] = function() {
        clearInterval(autoPlay[i]);
        nowSlide[i]++;
        nowSlide[i] = (nowSlide[i] > countSlide[i] - 1) ? 0 : nowSlide[i];
        slidesContainer[i].style.left = -nowSlide[i] + "00%";
        autoPlay[i] = setInterval(nextSlide[i], sliderAutoPlayDurations); 
    }
    previousSlide[i] = function () {
        clearInterval(autoPlay[i]);
        nowSlide[i]--;
        nowSlide[i] = (nowSlide[i] < 0) ? countSlide[i] - 1 : nowSlide[i];
        slidesContainer[i].style.left = -nowSlide[i] + "00%";
        autoPlay[i] = setInterval(nextSlide[i], sliderAutoPlayDurations);
    }

    sliderAfter[i].onclick = nextSlide[i];
    sliderBefore[i].onclick = previousSlide[i];
    autoPlay[i] = setInterval(nextSlide[i], sliderAutoPlayDurations);
}
