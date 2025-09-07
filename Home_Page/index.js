 const logoVideo = document.getElementById("logoAnimate");

// Autoplay once when page loads
window.addEventListener("load", () => {
  logoVideo.play().catch(err => {
    console.log("Autoplay blocked by browser:", err);
    // fallback → wait for user click
    logoVideo.addEventListener("click", () => logoVideo.play());
  });
});

    // Restart with delay after finishing
    logoVideo.addEventListener("ended", () => {
      setTimeout(() => {
        logoVideo.play();
      }, 3000); // 3000 ms = 3 sec delay before replay
    });

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  CHANGING Background 

const targetSection = document.querySelector(".section"); // your section
const defaultBg = "#ffffff"; // normal background
const activeBg = "#a4b6ebff"; // color when section is in view

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.background = activeBg; // change when 80% visible
    } else {
      document.body.style.background = defaultBg; // revert when not 80%
    }
  });
}, { threshold: 0.6 }); // 80%

observer2.observe(targetSection);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//  slide Image 

    const content = document.querySelector('.booking');
    const imageBox = document.querySelector('.slideimage');

    // Images to cycle
    let current = 0;
    const images = [
      "Images/user_interface/slidingimg1.jpg",
    "Images/user_interface/slideimg3.webp",
    "Images/user_interface/slidingimg4.webp",
    "Images/user_interface/slidingimg6.jpg",
    "Images/user_interface/slidingimg7.jpg",
    "Images/user_interface/slidingimg8.jpg"

    ];

    
    imageBox.style.backgroundImage = `url(${images[current]})`;


// Slide-in observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Slide in
      content.classList.add('show');
      imageBox.classList.add('show');

      // Start slideshow once visible
      if (!imageBox.dataset.slideshowStarted) {
        // 🔹 Fix: set first image immediately
        imageBox.style.backgroundImage = `url(${images[0]})`;

        setInterval(() => {
          current = (current + 1) % images.length;
          imageBox.style.backgroundImage = `url(${images[current]})`;
        }, 3000);

        imageBox.dataset.slideshowStarted = "true";
      }
    } else {
      // Slide out
      content.classList.remove('show');
      imageBox.classList.remove('show');
    }
  });
}, { threshold: 0.1 });

observer.observe(content);
observer.observe(imageBox);





