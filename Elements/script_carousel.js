const slidecont = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const pbtn = document.getElementById("slide-arrow-prev");
const nbtn = document.getElementById("slide-arrow-next");

nbtn.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidecont.scrollLeft += slideWidth;
});

pbtn.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidecont.scrollLeft -= slideWidth;
});