document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            // Could add more interactive effects or logging
            console.log('Hovered over:', link.textContent);
        });
    });
});
