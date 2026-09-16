const scrollContainer = document.querySelector(".gallery");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

prevButton.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 400;
    scrollContainer.style.scrollBehavior = "smooth";
});

nextButton.addEventListener("click", () => {
    scrollContainer.scrollLeft += 400;
    scrollContainer.style.scrollBehavior = "smooth";
});