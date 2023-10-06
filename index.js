let hands = ["rock", "paper", "scissor"]
let images = ["images/Rock.png","images/Paper.png","images/Scissor.png"]
let lastRanNum = 0
let countSame = 0
let randomNumber = 0
let resultEl = document.getElementById("result-el")
let resultImg = document.getElementById("result-Img")
let audioEL = document.getElementById("bgMusic")


// Create a function that returns a random number
function newRandomNumber(){
    let randomNum = Math.floor((Math.random()*3)+1)
    return randomNum
}

function checkLastAndNew(i=0){
    if(lastRanNum==i){
        countSame+=1
    }else{
        countSame=0
    }
}
  
function setToLastRan(){
    lastRanNum=randomNumber
}
function playBtnFunction(){
    playClickSound()
    randomNumber=newRandomNumber();
    checkLastAndNew(randomNumber)
    console.log("Random Number :"+randomNumber)
    console.log("Same Counter :"+countSame)
    if (countSame>=3){
        playBtnFunction()
    }
    setToLastRan()
    
    resultEl.textContent = hands[(randomNumber-1)]
    resultImg.innerHTML = "<img id='result-Img' src='"+images[(randomNumber-1)]+"'></img>"
}

function resetBtnFunction(){
    resetClickSound()
    resultEl.innerHTML = "Hello Welcome to Rock Paper Scissor !!!<br> Click Play Button" 
    resultImg.innerHTML = "<img id='result-Img' src='images/down-arrow.png'></img>"
}
function playClickSound(){
    let playSound = new Audio('audio/playClick.wav')//wav is also supported
    playSound.play()
    playSound.volume=0.6//plays the sound
}
function resetClickSound(){
    let playSound = new Audio('audio/resetClick.wav')//wav is also supported
    playSound.play()
    playSound.volume=0.6//plays the sound
}

window.addEventListener('load',()=>{
    audioEL.play();
    audioEL.volume = 0.5;
    audioEL.autoplay = true;
    audioEL.loop = true;

})

