function createTouchCounter(element) {
    let currentValue = 0;
    let isTouching = false;
    let previousY = 0;
    let sensitivity = 30; // pixels of movement needed to change number

    // Initialize display
    element.textContent = currentValue;

    // Inizio Tocco
    element.addEventListener('touchstart', (e) => {
        e.preventDefault();
        if (e.touches.length > 0) {
            isTouching = true;
            previousY = e.touches[0].clientY;
        }
    }, { passive: false });

    // Movimento del Tocco
    element.addEventListener('touchmove', (e) => {
        if (!isTouching || e.touches.length === 0) return;
        e.preventDefault();

        const currentY = e.touches[0].clientY;
        const deltaY = currentY - previousY;

        // Accumulate movement until we reach sensitivity threshold
        if (Math.abs(deltaY) >= sensitivity) {
            // Moving up (decrease number)
            if (deltaY > 0) {
                currentValue = (currentValue - 1 + 10) % 10;
            }
            // Moving down (increase number)
            else if (deltaY < 0) {
                currentValue = (currentValue + 1) % 10;
            }
            
            // Update display and reset previous position
            element.textContent = currentValue;
            previousY = currentY;
        }
    }, { passive: false });

    // Fine Tocco
    const endTouch = () => {
        if (isTouching) {
            isTouching = false;
        }
    };

    element.addEventListener('touchend', endTouch);
    element.addEventListener('touchcancel', endTouch);
}

// Apply to multiple elements
createTouchCounter(document.getElementById('touchCounter-1'));
createTouchCounter(document.getElementById('touchCounter-2'));
createTouchCounter(document.getElementById('touchCounter-3'));