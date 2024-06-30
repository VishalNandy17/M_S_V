function showPreloader() {
    const preloader = document.getElementById('preloader');
    preloader.classList.remove('hidden');
    preloader.style.opacity = '1';
}

function hidePreloader() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 300);
}

function setupPreloaderForButtons() {
    const signupButtons = document.querySelectorAll('a[href="signup.html"]');
    const loginButtons = document.querySelectorAll('a[href="login.html"]');

    [...signupButtons, ...loginButtons].forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            showPreloader();
            setTimeout(() => {
                window.location.href = button.href;
            }, 1500); // Simulating a delay before redirecting
        });
    });
}

document.addEventListener('DOMContentLoaded', setupPreloaderForButtons);