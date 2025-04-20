// Login Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginOverlay = document.getElementById('loginOverlay');
    const loginButton = document.getElementById('loginButton');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    
    // Focus on the username field when the page loads
    usernameInput.focus();
    
    // Login button click event
    loginButton.addEventListener('click', validateLogin);
    
    // Also allow Enter key to submit
    passwordInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            validateLogin();
        }
    });
    
    usernameInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            passwordInput.focus();
        }
    });
    
    // Login validation function
    function validateLogin() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        // Check if fields are empty
        if (username === '' || password === '') {
            showError('Lütfen kullanıcı adı ve şifre giriniz');
            return;
        }
        
        // Check if credentials are correct
        if (username === 'admin' && password === '3496') {
            // Success: Hide the login overlay with animation
            loginOverlay.classList.add('login-hidden');
            
            // Clear any error messages
            errorMessage.textContent = '';
            
            // Optional: Store login state in session storage to prevent requiring login again on page refresh
            sessionStorage.setItem('loggedIn', 'true');
        } else {
            // Failed login
            showError('Kullanıcı adı veya şifreniz yanlış, kontrol ediniz');
            passwordInput.value = ''; // Clear password field
            passwordInput.focus();
        }
    }
    
    // Show error message with animation
    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.animation = 'none';
        
        // Trigger reflow to restart animation
        void errorMessage.offsetWidth;
        
        errorMessage.style.animation = 'shake 0.5s ease-in-out';
    }
    
    // Check if user was already logged in
    if (sessionStorage.getItem('loggedIn') === 'true') {
        loginOverlay.classList.add('login-hidden');
    }
    
    // Add shake animation for error message
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(styleSheet);
});

// Particles.js Konfigürasyonu
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#6c5ce7', '#a55eea', '#00cec9']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.9,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.3,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#6c5ce7',
            opacity: 0.8,
            width: 2.5,
            shadow: {
                enable: true,
                color: '#6c5ce7',
                blur: 8
            }
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce',
            bounce: true,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1,
                    width: 4
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Navbar Scroll Efekti
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobil Menü Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Mobil menüyü kapat
            navLinks.classList.remove('active');
        }
    });
});

// Scroll Indicator Animasyonu
const scrollIndicator = document.querySelector('.scroll-indicator');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '0.7';
    }
    
    lastScrollTop = scrollTop;
}); 
