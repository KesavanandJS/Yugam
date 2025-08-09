// 3D Stacking Card Animation (Vanilla JS version of provided jQuery)
document.addEventListener('DOMContentLoaded', function() {
    var cardsContainer = document.querySelector('.cards');
    if (!cardsContainer) return;
    var cards = Array.from(cardsContainer.querySelectorAll('.card'));
    var currentIdx = cards.findIndex(card => card.classList.contains('card--current'));
    if (currentIdx === -1) currentIdx = 0;

    function setClasses() {
        cards.forEach((card, idx) => {
            card.classList.remove('card--current', 'card--out', 'card--next');
            if (idx === currentIdx) {
                card.classList.add('card--current');
            } else if (idx === (currentIdx + 1) % cards.length) {
                card.classList.add('card--next');
            }
        });
    }

    // Add event for next button
    var nextBtn = document.getElementById('nextCardBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentIdx = (currentIdx + 1) % cards.length;
            setClasses();
        });
    }

    // Optionally: allow clicking the current card to go next
    cards.forEach(card => {
        card.addEventListener('click', function() {
            if (!card.classList.contains('card--current')) return;
            currentIdx = (currentIdx + 1) % cards.length;
            setClasses();
        });
    });

    setClasses();
    cardsContainer.classList.add('cards--active');
});

// Scroll-triggered fade-in for sections (repeatable on scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced: fade-in on scroll, fade-out when out of view (repeatable)
    var fadeEls = document.querySelectorAll('.scroll-fade');
    if ('IntersectionObserver' in window) {
        var fadeObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.18 });
        fadeEls.forEach(function(el) { fadeObserver.observe(el); });
    } else {
        // Fallback: show all
        fadeEls.forEach(function(el) { el.classList.add('visible'); });
    }
});

// Scroll-triggered fade-in for individual content elements (repeatable on scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced: fade-in on scroll for content elements
    var fadeContentEls = document.querySelectorAll('.scroll-fade-content');
    if ('IntersectionObserver' in window) {
        var fadeContentObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.16 });
        fadeContentEls.forEach(function(el) { fadeContentObserver.observe(el); });
    } else {
        fadeContentEls.forEach(function(el) { el.classList.add('visible'); });
    }
});

// Add fade/slide effect for each main content row on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced: fade/slide effect on scroll for main content rows
    var mainRows = document.querySelectorAll('.main-content-section > div, .main-content-section > section');
    if ('IntersectionObserver' in window) {
        var mainRowObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15 });
        mainRows.forEach(function(el) { mainRowObserver.observe(el); });
    } else {
        mainRows.forEach(function(el) { el.classList.add('visible'); });
    }
});
