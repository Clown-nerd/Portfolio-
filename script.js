// Dark Mode Toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Integrate EmailJS or Netlify here
    alert('Message sent!');
    e.target.reset();
});

// Scroll Animations
document.querySelectorAll('.skill-card, .project-card').forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    observer.observe(card);
});

