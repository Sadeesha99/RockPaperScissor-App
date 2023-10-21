//Click Sounds for Buttons
function playClickSound() {
    let playSound = new Audio('../audio/playClick.wav');
    playSound.play();
    playSound.volume = 0.6; //plays the sound
}
function resetClickSound() {
    let playSound = new Audio('../audio/resetClick.wav')
    playSound.play()
    playSound.volume = 0.6//plays the sound
}