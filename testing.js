document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.features-wrapper');
    const panes = document.querySelectorAll('.feature-pane');
    const dotsContainer = document.querySelector('.navigation-dots');
    const totalPanes = panes.length;
    let currentIndex = 0;
    let isThrottled = false; // Flag to prevent rapid scrolling

    // Create navigation dots
    for (let i = 0; i < totalPanes; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToPane(i));
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll('.dot');

    // Function to move to a specific pane
    function goToPane(index) {
        if (index >= 0 && index < totalPanes) {
            currentIndex = index;
            wrapper.style.transform = `translateY(-${currentIndex * 100}vh)`;
            updateDots();
        }
    }

    // Function to update which dot is active
    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Main event listener for the scroll wheel
    document.querySelector('.main-container').addEventListener('wheel', event => {
        if (isThrottled) return;
        isThrottled = true;
        
        // Add a delay before the user can scroll again
        setTimeout(() => { isThrottled = false; }, 1000);

        const delta = event.deltaY;

        if (delta > 0 && currentIndex < totalPanes - 1) {
            // Scrolling down
            goToPane(currentIndex + 1);
        } else if (delta < 0 && currentIndex > 0) {
            // Scrolling up
            goToPane(currentIndex - 1);
        }
    });
});