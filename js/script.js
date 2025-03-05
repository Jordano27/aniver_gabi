document.getElementById("showMessage").addEventListener("click", function() {
    document.getElementById("message").classList.toggle("hidden");
});

let index = 0;
const images = document.querySelectorAll(".carousel img");
const totalImages = images.length;
const dotsContainer = document.querySelector(".dots");

images.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active-dot");
    dot.addEventListener("click", () => showImage(i));
    dotsContainer.appendChild(dot);
});

function showImage(i) {
    images[index].classList.remove("active");
    document.querySelector(".dot.active-dot").classList.remove("active-dot");
    index = i;
    images[index].classList.add("active");
    dotsContainer.children[index].classList.add("active-dot");
}

function showNextImage() {
    showImage((index + 1) % totalImages);
}

document.getElementById("next").addEventListener("click", showNextImage);
document.getElementById("prev").addEventListener("click", function() {
    showImage((index - 1 + totalImages) % totalImages);
});

setInterval(showNextImage) 
3000;