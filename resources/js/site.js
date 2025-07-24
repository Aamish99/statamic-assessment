// Import Alpine.js
import Alpine from 'alpinejs'

// Make Alpine available on the window object for debugging (optional)
window.Alpine = Alpine

// Component B functionality
window.componentB = function() {
    return {
        init() {
            console.log('Component B initialized with dynamic cards');
        },

        // Image carousel functionality is handled directly in the template
        // using Alpine.js reactive data and transitions

        // Additional utility methods can be added here
        handleImageError(event) {
            console.warn('Image failed to load:', event.target.src);
            // You could set a fallback image here
            event.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
        }
    }
}

// Initialize Alpine.js
Alpine.start()

// This is all you.
