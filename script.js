document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Hitung Umur Otomatis ---
    const birthDate = new Date('2005-09-02');
    const ageElement = document.getElementById('age-display');
    
    function calculateAge(dob) {
        const diff = Date.now() - dob.getTime();
        const ageDate = new Date(diff); 
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    if(ageElement) {
        ageElement.innerText = calculateAge(birthDate);
    }

    // --- 2. Animasi Skill Bar saat di-scroll ---
    const skillSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.progress');

    function showProgress() {
        progressBars.forEach(progressBar => {
            const value = progressBar.getAttribute('data-width');
            progressBar.style.width = value;
        });
    }

    function hideProgress() {
        progressBars.forEach(progressBar => {
            progressBar.style.width = 0;
        });
    }

    // Event Listener Scroll untuk Skill
    window.addEventListener('scroll', () => {
        if(!skillSection) return; // Cek biar gak error kalo elemen gak ketemu
        
        const sectionPos = skillSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            showProgress();
        } else {
            hideProgress();
        }
    });

    // --- 3. Mobile Navigation (Hamburger Menu) ---
    const navSlide = () => {
        const burger = document.querySelector('.menu-toggle');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        if(burger) {
            burger.addEventListener('click', () => {
                // Toggle Class Navigasi
                nav.classList.toggle('nav-active');

                // Animate Links (Muncul satu per satu)
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                    }
                });

                // Burger Animation (Jadi X)
                burger.classList.toggle('toggle');
            });
        }
    }

    navSlide();

});