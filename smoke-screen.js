let smoke = document.querySelector('.smoke-screen');

smoke.onended = function () {
    smoke.pause();
    smoke.currentTime = 0;
    smoke.style.opacity = "0"
};