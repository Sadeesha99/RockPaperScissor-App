//Globel Variables
let lastRanNum = 0;
let countSame = 0;
let randomNumber = 0;
let sessionRound = 0;

// Audio elements
const audioEL = document.getElementById("bgMusic");

// Constants
const hands = ["rock", "paper", "scissor"];
const images = ["/images/Rock.png", "/images/Paper.png", "/images/Scissor.png"];

// Query DOM elements
const resultEl1 = document.getElementById("result-el1");
const resultEl2 = document.getElementById("result-el2");
const resultImg1 = document.getElementById("imageArea1");
const resultImg2 = document.getElementById("imageArea2");
const roundEl = document.getElementById("round-el");

//Player Data Storing Object
let playerData = {
    name: '',
    playerWins: 0,
    roundNumber: 0,
    computerWins: 0,
    roundDraws:0,
    computerSessionWins: 0,
    playerSessionWins: 0,
    drawsInTheSession: 0
}


//Onload Event Listener To Load up Game and Player Stats
window.addEventListener('load', () => {
    //player name is setting up 
    playerData.name = (localStorage.getItem('nameEn'));
    playerData.playerWins = parseInt(localStorage.getItem('playerWins'));
    playerData.computerWins = parseInt(localStorage.getItem('computerWins'));
    playerData.roundNumber = parseInt(localStorage.getItem('roundNumber'));
    playerData.roundDraws = parseInt(localStorage.getItem('roundDraws'));

    displayGameRound();
    displayPlayerName();
    displayRoundStats();
    

})
//Audio autoPlay eventListener
window.addEventListener('click', () => {
    audioEL.play();
    audioEL.volume = 0.5;
    audioEL.autoplay = true;
    audioEL.loop = true;
})




const rockBtnFunction = () => {
    playClickSound();
    computerPlayFun();
    resultImg2.innerHTML = "<img id='image-El1' alt='" + hands[0] +" 'src='../images/Rock.png''>";
    winnerAndLoser(0);
    sessionRound += 1;
    console.log(sessionRound);


}

const paperBtnFunction = () => {
    playClickSound();
    computerPlayFun();
    resultImg2.innerHTML = "<img id='image-El1' alt='" + hands[1] +" 'src='../images/Paper.png''>";
    winnerAndLoser(1);
    sessionRound += 1;
    console.log(sessionRound);
}

const scissorBtnFunction = () => {
    playClickSound();
    computerPlayFun();
    resultImg2.innerHTML = "<img id='image-El1' alt='" + hands[2] +" 'src='../images/Scissor.png''>";
    winnerAndLoser(2);
    sessionRound += 1
    console.log(sessionRound);
}

const resetGame = () => {

    resetClickSound();
    setTimeout(() => { window.location.href = "../index.html"; }, 250);


}
//check for 5 section rounds
function checkFiveSessionRounds(functionVariable) {
    if (sessionRound <= 5) {
        functionVariable();
        displayRoundStats();
    }
}

//disable the functions of playing buttons
function buttonDisableFunct() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
}

function sessionRoundCheck() {
    if (sessionRound === 5) {
        console.log("Session Round Count Does not Support Playing")
        buttonDisableFunct();
        setTimeout(() => {
            const nextRoundConfirm = confirm("Would you like to go for another round ??")
            if (nextRoundConfirm) {
                playerData.roundNumber += 1
                //checking who won the round
                whoWonTheRound();
                //setting up session data values
                localStorage.setItem('roundNumber', playerData.roundNumber);
                localStorage.setItem('playerWins', playerData.playerWins);
                localStorage.setItem('computerWins', playerData.computerWins);
                localStorage.setItem('roundDraws', playerData.roundDraws);
                console.log(localStorage.setItem('playerWins', playerData.playerWins))
                
                // URL of the next page
                window.location.reload();

            }
        }, 1000);


    }
}



rockBtn.addEventListener('click', () => {
    checkFiveSessionRounds(rockBtnFunction);
    sessionRoundCheck()

});
paperBtn.addEventListener('click', () => {
    checkFiveSessionRounds(paperBtnFunction);
    sessionRoundCheck();
});
scissorBtn.addEventListener('click', () => {
    checkFiveSessionRounds(scissorBtnFunction);
    sessionRoundCheck();
});
restartBtn.addEventListener('click',()=>{
    resetGame();
    //setting up session data values
    localStorage.removeItem('roundNumber');
    localStorage.removeItem('playerWins');
    localStorage.removeItem('computerWins');
    localStorage.removeItem('roundDraws');
    localStorage.removeItem('nameEn');

});