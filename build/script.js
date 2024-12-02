"use strict";
const carrossel = document.querySelector("[data-carrossel]");
function infiniteCarousel() {
    let count = 0;
    setInterval(() => {
        carrossel.style.transition = "transform 0.5s ease-in-out";
        carrossel.style.transform = `translateX(${(count * -100)}%)`;
        count++;
        if (count >= carrossel.children.length - 1) {
            setTimeout(() => {
                carrossel.style.transition = "none";
                carrossel.style.transform = `translateX(0)`;
                count = 0;
                carrossel.appendChild(carrossel.children[0]);
            }, 500);
        }
    }, 1800);
}
infiniteCarousel();
