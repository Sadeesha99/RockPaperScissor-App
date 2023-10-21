// Audio elements
const audioEL = document.getElementById("bgMusic");

//Other elements
const mainDivEl = document.getElementById("mainDiv-El")
const bodyContentEl = document.getElementById("mainDiv-El")
const headEl = document.getElementById("head-El")



//Audio autoPlay eventListener
window.addEventListener('click', () => {
    audioEL.play();
    audioEL.volume = 0.5;
    audioEL.autoplay = true;
    audioEL.loop = true;
})

//setting Up sessions onload
window.addEventListener('load', () => {
    localStorage.setItem('playerWins', 0);
    localStorage.setItem('roundNumber', 0);
    localStorage.setItem('computerWins', 0);
    localStorage.setItem('roundDraws', 0);
})



function onclickPlay() {
    // Use a prompt to get the user's name
    let nameEntered = prompt("Please enter your name:");
    
        // Check if a name is entered
        if (nameEntered !== null && nameEntered.trim() !== "") {
            //setting up session name
            localStorage.setItem('nameEn', nameEntered);
            // URL of the next page
            window.location.href = "otherHTML/index2.html";
        } else {
            alert("Please enter a valid name.");
            resetClickSound()
            
        }
    
};

// Function for Starting Game
function startGame() {
    playClickSound()
    setTimeout(() => { onclickPlay() }, 250);

}

