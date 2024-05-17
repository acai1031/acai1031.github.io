// scroll down change navbar from transparent to light
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('introNavbar');
    if (window.scrollY > document.querySelector('.full-page-image').offsetHeight) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-light', 'with-box-shadow'); 
    } else {
        navbar.classList.remove('bg-light', 'with-box-shadow');
        navbar.classList.add('bg-transparent');
    }
});

// scroll down change navbar from home to experience
$(document).ready(function() {
    $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop();
      var expTop = $('#row-exp').offset().top;
  
      if (scrollDistance >= expTop) {
        $('.navbar-nav .nav-item').removeClass('active');
        $('.navbar-nav .nav-item:nth-child(2)').addClass('active');
      } else {
        $('.navbar-nav .nav-item').removeClass('active');
        $('.navbar-nav .nav-item:first-child').addClass('active');
      }
    });
});


// start: open typing effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["A Data Scientist", "A Statistical Analyst", "An Artist", "A Photographer", "A Nature Lover"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
})
// end: open typing effect

// life background image shift
const words = document.querySelectorAll('.word');
const wordContainer = document.querySelector('.word-container');

words.forEach((word) => {
    word.addEventListener('mouseenter', () => {
        const hoverImage = word.getAttribute('data-hover-image');
        wordContainer.style.backgroundImage = `url(${hoverImage})`;
    });

    word.addEventListener('mouseleave', () => {
        wordContainer.style.backgroundImage = 'url(images/life_bg.jpg)'; // Reset to default background image
    });
});