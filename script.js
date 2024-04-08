document.addEventListener('DOMContentLoaded', (event) => {
    const wrapper = document.querySelector('.slider-wrapper');
    const slides = Array.from(wrapper.children);
    let currentIndex = 0;

    function moveToNextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            // If we've reached the end, move the first slide to the end and reset index
            let firstSlide = slides.shift();
            wrapper.appendChild(firstSlide);
            slides.push(firstSlide);
            currentIndex--;
        }
        updateSliderPosition();
    }

function moveToPreviousSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        // If we've reached the beginning, move the last slide to the front and reset index
        let lastSlide = slides.pop(); // Take the last slide
        wrapper.prepend(lastSlide); // Place it at the front
        slides.unshift(lastSlide); // Add it to the beginning of the array
        currentIndex = 0; // Reset currentIndex to the new "first" slide
    }
    updateSliderPosition();
}

    function updateSliderPosition() {
        const offset = currentIndex * (300 + 20); 
        wrapper.style.transition = 'none'; 
        setTimeout(() => {
            wrapper.style.transition = 'transform 0.5s ease-in-out';
        }, 0);
    }

    document.querySelector('.prev-button').addEventListener('click', moveToPreviousSlide);
    document.querySelector('.next-button').addEventListener('click', moveToNextSlide);
});


var mybutton = document.getElementById("back-to-top");

// При прокрутке вниз от верха документа на 20px, показываем кнопку
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// При клике на кнопку, плавно прокручиваем документ наверх
mybutton.addEventListener('click', function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
document.getElementById("openQua").addEventListener("click", function() {
    window.location.href = "qua.html";
});