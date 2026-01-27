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
  "/Images/user_interface/slidingimg1.jpg",
  "/Images/user_interface/slideimg3.webp",
  "/Images/user_interface/slidingimg4.webp",
  "/Images/user_interface/slidingimg6.jpg",
  "/Images/user_interface/slidingimg7.jpg",
  "/Images/user_interface/slidingimg8.jpg"
];

// set first image
imageBox.style.backgroundImage = `url(${images[current]})`;

// Function to start slideshow
function startSlideshow() {
  content.classList.add('show');
  imageBox.classList.add('show');

  if (!imageBox.dataset.slideshowStarted) {
    setInterval(() => {
      current = (current + 1) % images.length;
      imageBox.style.backgroundImage = `url(${images[current]})`;
    }, 3000);
    imageBox.dataset.slideshowStarted = "true";
  }
}

// Slide-in observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startSlideshow();
    } else {
      content.classList.remove('show');
      imageBox.classList.remove('show');
    }
  });
}, { threshold: 0.14 });

observer.observe(content);
observer.observe(imageBox);

// ✅ Reload-safe check
window.addEventListener("load", () => {
  const rect = content.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    startSlideshow(); // run immediately if already visible
  }
});



// #######################################################3/
// Feature Text Animation & Scroll Snapping

  const featureTexts = document.querySelectorAll('.feature-text');
  const stickyParent = document.querySelector('.sticky-parent');
  if (featureTexts.length > 0 ) {
    // Observer for the fade/translate animation
    const featureObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
        } else {
          entry.target.classList.remove('is-active');
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    });

    featureTexts.forEach(text => {
      featureObserver.observe(text);
    });
      
    // // Observer to change body background for the sticky section
    // const stickyBgObserver = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if(entry.isIntersecting) {
    //             document.body.style.backgroundColor = '#1a1a1a';
    //             document.body.classList.add('sticky-active');
    //         } else {
    //             document.body.style.backgroundColor = '#f5f5f5';
    //             document.body.classList.remove('sticky-active');
    //         }
    //     });
    // }, { threshold: 0.1 });
      
    // stickyBgObserver.observe(stickyParent);

    // --- CORRECTED: Scroll Snapping Logic ---
    let scrollTimeout;
    let isProgrammaticallyScrolling = false;

    const snapToClosestFeature = () => {
        let closestElement = null;
        let minDistance = Infinity;
        // The target position: 40% from the top of the viewport
        const snapPosition = window.innerHeight * 0.4;

        featureTexts.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Only consider elements that are at least partially in the viewport
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                const elementCenter = rect.top + rect.height / 2;
                const distance = Math.abs(elementCenter - snapPosition);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestElement = el;
                }
            }
        });

        if (closestElement) {
            isProgrammaticallyScrolling = true;
            
            // This new calculation is more accurate.
            // It finds the difference between the element's current center and the target snap position.
            const elementRect = closestElement.getBoundingClientRect();
            const elementCenter = elementRect.top + elementRect.height / 2;
            const scrollDelta = elementCenter - snapPosition;

            // Then, it scrolls by that exact difference.
            window.scrollBy({
                top: scrollDelta,
                behavior: 'smooth'
            });

            // Prevent this function from running again while the smooth scroll animation is playing
            setTimeout(() => {
                isProgrammaticallyScrolling = false;
            }, 500); 
        }
    };

    window.addEventListener('scroll', () => {
        // Don't snap if the page is already in the middle of a snap animation
        if (isProgrammaticallyScrolling) return;
        // Wait for the user to stop scrolling for 150ms, then trigger the snap
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(snapToClosestFeature, 100);
    }, { passive: true });
  }