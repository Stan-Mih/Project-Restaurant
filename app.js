function playSound() {
    const baa = document.getElementById("main_logo");
    baa.play();
}
function stopSound() {
    const baa = document.getElementById("main_logo");
    baa.pause();
    baa.currentTime = 0;
}