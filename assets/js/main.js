

- Add event listener to multiple elements
  */
  const addEventOnElements = function (elements, eventType, callback) {
  elements.forEach(element => element.addEventListener(eventType, callback));
  };

/**

- Throttle function for performance optimization
  */
  const throttle = (func, delay) => {
  let lastCall = 0;
  return function (…args) {
  const now = new Date().getTime();
  if (now - lastCall < delay) return;
  lastCall = now;
  return func(…args);
  };
  };

/**

- Debounce function for performance optimization
  */
  const debounce = (func, delay) => {
  let timeoutId;
  return function (…args) {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
  };

// ==========================================
// Navigation Menu Toggle
// ==========================================

const menuToggle = document.getElementById(‘menuToggle’);
const navMenu = document.getElementById(‘navMenu’);
const navLinks = document.querySelectorAll(’.nav-link’);

// Toggle mobile menu
if (menuToggle) {
menuToggle.addEventListener(‘click’, function() {
navMenu.classList.toggle(‘active’);

```
    // Animate hamburger icon
    const spans = this.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active')
        ? 'rotate(45deg) translateY(10px)'
        : 'none';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active')
        ? 'rotate(-45deg) translateY(-10px)'
        : 'none';
});
```

}

// Close menu when clicking on nav links
addEventOnElements(navLinks, ‘click’, function() {
if (window.innerWidth <= 768) {
navMenu.classList.remove(‘active’);

```
    // Reset hamburger icon
    if (menuToggle) {
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}
```

});

// Close menu when clicking outside
document.addEventListener(‘click’, function(event) {
if (navMenu && menuToggle) {
const isClickInsideMenu = navMenu.contains(event.target);
const isClickOnToggle = menuToggle.contains(event.target);

```
    if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');

        // Reset hamburger icon
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}
```

});

// ==========================================
// Active Navigation Link on Scroll
// ==========================================

const sections = document.querySelectorAll(‘section[id]’);

const highlightNavigation = () => {
const scrollY = window.pageYOffset;

```
sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add('active');
    } else {
        navLink?.classList.remove('active');
    }
});
```

};

window.addEventListener(‘scroll’, throttle(highlightNavigation, 100));

// ==========================================
// Header Scroll Effect
// ==========================================

const header = document.querySelector(’.header’);

const headerScrollEffect = () => {
if (window.scrollY > 50) {
header?.classList.add(‘scrolled’);
} else {
header?.classList.remove(‘scrolled’);
}
};

window.addEventListener(‘scroll’, throttle(headerScrollEffect, 100));

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================

const scrollLinks = document.querySelectorAll(‘a[href^=”#”]’);

addEventOnElements(scrollLinks, ‘click’, function(e) {
const href = this.getAttribute(‘href’);

```
// Skip if href is just "#"
if (href === '#') return;

const targetElement = document.querySelector(href);

if (targetElement) {
    e.preventDefault();

    const headerHeight = header?.offsetHeight || 0;
    const targetPosition = targetElement.offsetTop - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}
```

});

// ==========================================
// Scroll to Top Button
// ==========================================

// Create scroll to top button
const createScrollTopButton = () => {
const button = document.createElement(‘button’);
button.innerHTML = ‘<i class="fas fa-arrow-up"></i>’;
button.className = ‘scroll-to-top’;
button.setAttribute(‘aria-label’, ‘بازگشت به بالا’);
document.body.appendChild(button);

```
// Add styles
const style = document.createElement('style');
style.innerHTML = `
    .scroll-to-top {
        position: fixed;
        bottom: 30px;
        left: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(37, 99, 235, 0.4);
    }

    .scroll-to-top.show {
        opacity: 1;
        visibility: visible;
    }

    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.6);
    }
`;
document.head.appendChild(style);

// Show/hide button on scroll
window.addEventListener('scroll', throttle(() => {
    if (window.scrollY > 300) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
}, 100));

// Scroll to top on click
button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
```

};

// Initialize scroll to top button
createScrollTopButton();

// ==========================================
// Intersection Observer for Animations
// ==========================================

const animateOnScroll = () => {
const observerOptions = {
threshold: 0.1,
rootMargin: ‘0px 0px -100px 0px’
};

```
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
const animatedElements = document.querySelectorAll('.skill-card, .project-card, .experience-item');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add animation class
const style = document.createElement('style');
style.innerHTML = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
```

};

// Initialize animations when DOM is loaded
if (document.readyState === ‘loading’) {
document.addEventListener(‘DOMContentLoaded’, animateOnScroll);
} else {
animateOnScroll();
}

// ==========================================
// Loading Animation
// ==========================================

window.addEventListener(‘load’, () => {
document.body.classList.add(‘loaded’);

```
// Add fade-in animation
const style = document.createElement('style');
style.innerHTML = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }

    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);
```

});

// ==========================================
// Form Validation (for contact page)
// ==========================================

const validateForm = (formElement) => {
if (!formElement) return;

```
formElement.addEventListener('submit', function(e) {
    e.preventDefault();

    let isValid = true;
    const inputs = this.querySelectorAll('input[required], textarea[required]');

    inputs.forEach(input => {
        const errorElement = input.nextElementSibling;

        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
            if (errorElement && errorElement.classList.contains('error-message')) {
                errorElement.textContent = 'این فیلد الزامی است';
            }
        } else {
            input.classList.remove('error');
            if (errorElement && errorElement.classList.contains('error-message')) {
                errorElement.textContent = '';
            }
        }

        // Email validation
        if (input.type === 'email' && input.value.trim()) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value)) {
                isValid = false;
                input.classList.add('error');
                if (errorElement && errorElement.classList.contains('error-message')) {
                    errorElement.textContent = 'ایمیل معتبر وارد کنید';
                }
            }
        }
    });

    if (isValid) {
        // Submit form or show success message
        console.log('Form submitted successfully!');
        this.reset();
        alert('پیام شما با موفقیت ارسال شد!');
    }
});

// Remove error on input
const inputs = formElement.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        this.classList.remove('error');
        const errorElement = this.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = '';
        }
    });
});
```

};

// Initialize form validation
const contactForm = document.getElementById(‘contactForm’);
validateForm(contactForm);

// ==========================================
// Console Message
// ==========================================

console.log(’%c🚀 Welcome to Hamid Eghtedarian's Portfolio!’, ‘color: #2563eb; font-size: 20px; font-weight: bold;’);
console.log(’%c💻 Built with HTML, CSS, and JavaScript’, ‘color: #7c3aed; font-size: 14px;’);
console.log(’%c📧 Contact: hamid@example.com’, ‘color: #64748b; font-size: 12px;’);
