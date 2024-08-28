document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('video')) {
        const video = document.querySelector('video');
        const btnPlay = document.querySelector('.video-play');
        const btnMute = document.querySelector('.video-sound');

        // Функция для управления воспроизведением
        btnPlay.addEventListener('click', function () {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        // Функция для управления звуком
        btnMute.addEventListener('click', function () {
            if (video.muted) {
                video.muted = false;
            } else {
                video.muted = true;
            }
        });
    }
    if (document.querySelector('.photos__slider')) {
        const slider = document.querySelector('.photos__slider');
        const track = slider.querySelector('.slider__track');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            e.preventDefault();
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = x - startX; // Ускоряем прокрутку
            slider.scrollLeft = scrollLeft - walk;
        });

        // Обработка событий тач-устройств
        slider.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('touchend', () => {
            isDown = false;
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - slider.offsetLeft;
            const walk = x - startX; // Ускоряем прокрутку
            slider.scrollLeft = scrollLeft - walk;
        });
    }
    Fancybox.bind('[data-fancybox]', {});
    if (document.querySelector('.header__button-menu')) {
        document.querySelector('.header__button-menu').addEventListener('click', () => {
            document.querySelector('.header__button-menu').classList.toggle('header__button-menu--active');
            document.querySelector('.header__nav').classList.toggle('header__nav--active');
            if (document.querySelector('.header__nav').classList.contains('header__nav--active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
});
