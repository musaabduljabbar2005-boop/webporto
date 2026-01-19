document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Hitung Umur Otomatis
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

    // 2. Animasi Skill Bar saat di-scroll
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

    window.addEventListener('scroll', () => {
        const sectionPos = skillSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            showProgress();
        } else {
            hideProgress();
        }
    });
});