document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    body.classList.add('fade-in');
    setTimeout(() => {
        body.classList.add('show')
    }, 150); // Small delay for fade class to apply before transition

    const anchors = document.querySelectorAll('a');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent immediate page navigation
            document.body.classList.add('fade-out');
            setTimeout(() => {
                body.classList.add('hide')
            }, 150); // Small delay for fade class to apply before transition

            const href = this.href; // Target URL
            
            // Wait for fade-out transition to finish
            setTimeout(function() {
                window.location.href = href
            }, 1000);  // Match with CSS transition time
        });
    });
});