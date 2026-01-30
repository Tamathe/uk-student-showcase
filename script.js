/* ==========================================================================
   UK STUDENT SHOWCASE — JAVASCRIPT
   Handles:
     1. Scroll-triggered animations (Intersection Observer)
     2. Navbar scroll effects (transparent → solid)
     3. Mobile navigation toggle
     4. Animated stat counters
     5. Skill bar animations
     6. Smooth scroll for nav links

   NO CUSTOMIZATION NEEDED in this file unless you want to change
   animation behavior or add new interactive features.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ------------------------------------------------------------------
       1. SCROLL-TRIGGERED ANIMATIONS
       Elements with class "animate-on-scroll" fade in when they enter
       the viewport. Uses IntersectionObserver for performance.
       ------------------------------------------------------------------ */
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once animated, stop observing to save resources
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,              // viewport
        threshold: 0.15,         // trigger when 15% visible
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => scrollObserver.observe(el));

    /* ------------------------------------------------------------------
       2. NAVBAR SCROLL EFFECT
       Adds "scrolled" class to navbar when user scrolls past 100px.
       This switches from transparent to solid white background.
       ------------------------------------------------------------------ */
    const navbar = document.getElementById('navbar');
    let lastScrollY = 0;

    function handleNavbarScroll() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    }

    // Throttle scroll events for performance
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                handleNavbarScroll();
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });

    // Run once on load in case page is already scrolled
    handleNavbarScroll();

    /* ------------------------------------------------------------------
       3. MOBILE NAVIGATION TOGGLE
       Hamburger menu open/close for small screens.
       ------------------------------------------------------------------ */
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    /* ------------------------------------------------------------------
       4. ANIMATED STAT COUNTERS
       Counts up from 0 to the target number when the stat section
       scrolls into view. Reads from data-target and data-suffix attrs.

       CUSTOMIZE (in HTML only):
         data-target="150"    → the number to count to
         data-suffix="+"      → text appended after the number
       ------------------------------------------------------------------ */
    const statNumbers = document.querySelectorAll('.stat-number');

    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const suffix = element.getAttribute('data-suffix') || '';

        // If the target isn't a valid number, display it as-is
        if (isNaN(target)) {
            element.textContent = element.getAttribute('data-target') + suffix;
            return;
        }

        const duration = 2000; // ms
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out curve for natural feel
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(target * easeOut);

            element.textContent = currentValue.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString() + suffix;
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // Observe stat numbers
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    statNumbers.forEach(el => statObserver.observe(el));

    /* ------------------------------------------------------------------
       5. SKILL BAR ANIMATIONS
       Animates skill bars to their target width when they scroll
       into view. Reads from data-percent attribute.

       CUSTOMIZE (in HTML only):
         data-percent="85" → fills to 85% width
       ------------------------------------------------------------------ */
    const skillFills = document.querySelectorAll('.skill-fill');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const percent = entry.target.getAttribute('data-percent');
                if (percent && !isNaN(parseInt(percent))) {
                    entry.target.style.width = percent + '%';
                    entry.target.classList.add('animated');
                }
                skillObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    skillFills.forEach(el => skillObserver.observe(el));

    /* ------------------------------------------------------------------
       6. SMOOTH SCROLL FOR NAV LINKS
       Enhances anchor links with smooth scrolling behavior.
       (Most modern browsers support scroll-behavior: smooth in CSS,
       but this adds a fallback and handles the navbar offset.)
       ------------------------------------------------------------------ */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navbarHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top
                    + window.scrollY
                    - navbarHeight
                    - 20; // extra padding

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ------------------------------------------------------------------
       7. PARALLAX EFFECT ON HERO (subtle)
       Moves hero content slightly as user scrolls for depth effect.
       Only active on desktop for performance reasons.
       ------------------------------------------------------------------ */
    const heroContent = document.querySelector('.hero-content');
    const heroSection = document.querySelector('.hero');

    if (heroContent && heroSection && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const heroHeight = heroSection.offsetHeight;

            if (scrolled < heroHeight) {
                const parallaxOffset = scrolled * 0.3;
                const opacity = 1 - (scrolled / heroHeight) * 0.8;
                heroContent.style.transform = `translateY(${parallaxOffset}px)`;
                heroContent.style.opacity = opacity;
            }
        });
    }

    /* ------------------------------------------------------------------
       8. ACTIVE NAV LINK HIGHLIGHTING
       Highlights the nav link corresponding to the currently visible
       section as the user scrolls.
       ------------------------------------------------------------------ */
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');

    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            window.requestAnimationFrame(() => {
                highlightActiveSection();
            });
        }
    });

}); // end DOMContentLoaded
