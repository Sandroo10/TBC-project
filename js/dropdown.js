document.querySelectorAll('nav ul li > a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const dropdown = this.nextElementSibling;
        const overlay = document.querySelector('.overlay');

        // Toggle dropdown
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            overlay.classList.remove('show');
            this.classList.remove('active');
        } else {
            document.querySelectorAll('nav ul li ul').forEach(ul => ul.classList.remove('show'));
            dropdown.classList.add('show');
            document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
            overlay.classList.add('show');
        }
    });
});

// Close overlay when clicking outside
document.addEventListener('click', function(event) {
    const overlay = document.querySelector('.overlay');
    const nav = document.querySelector('nav');

    if (!nav.contains(event.target)) {
        document.querySelectorAll('nav ul li ul').forEach(ul => ul.classList.remove('show'));
        overlay.classList.remove('show');
        document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
    }
});
