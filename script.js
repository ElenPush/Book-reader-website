
// PROGRESS BAR ANIMATION
document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById("my-progress-bar");
    const body = document.body;
    const html = document.documentElement;
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    window.addEventListener("scroll", function() {
        const scrollTop = window.pageYOffset || (document.documentElement || body.parentNode || body).scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = scrollPercent + "%";
    });
});

//PORTRAITS ANIMATION
const timelineItems = document.querySelectorAll('.list-content');
const youngImage = document.getElementById('youngImage');
const oldImage = document.getElementById('oldImage');
let opacity = 0;

timelineItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    item.closest('.list').classList.add('active');

    // Check if the list item is active after a click
    const isActive = item.closest('.list').classList.contains('active');

    if (isActive) {
    // Increase the opacity of oldImage by 5% with each click, up to a maximum of 100%
    if (index < 15) {
      opacity += 6;
      if (opacity > 90) {
          opacity = 100;
      }
    } else {
      // If the 16th element is clicked, reset the opacity
      opacity = 0;
      }
    } else {
      // If the list item is inactive, reset the opacity of oldImage
      opacity = 0;
    }

    // Apply opacity to oldImage
    oldImage.style.transition = 'opacity 0.5s';
    oldImage.style.opacity = `${opacity / 100}`;
    youngImage.style.transition = 'opacity 0.5s';
    youngImage.style.opacity = `${1 - opacity / 100}`;
  });
});

//MAP ANIMATION
var animationStarted = false;

function startAnimation() {
  if (!animationStarted) {
    console.log("starting first animation");
    document.getElementById("marker").style.visibility = "visible";
    document.getElementById("marker").classList.add("moveMe"); /* apply a new class to the element */
    animationStarted = true;
  }
}

function startSecondAnimation() {
  console.log("starting second animation");
  document.getElementById("marker2").style.visibility = "visible";
  document.getElementById("marker2").classList.add("moveMe");
}