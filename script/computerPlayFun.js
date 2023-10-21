
// Create a function that returns a random number
function newRandomNumber() {
    let randomNum = Math.floor((Math.random() * 3) )
    return randomNum
}
//Setting last random number and new number matching count
function checkLastAndNew(i = 0) {
    if (lastRanNum == i) {
        countSame += 1
    } else {
        countSame = 0
    }
}
//Setting random number as the last number
function setToLastRan() {
    lastRanNum = randomNumber
}
// main game function
function computerPlayFun() {
    randomNumber = newRandomNumber();
    checkLastAndNew(randomNumber);
    console.log("Random Number :" + randomNumber);
    console.log("Same Counter :" + countSame);
    if (countSame >= 3) {
        computerPlayFun();
    }
    setToLastRan();

    resultImg1.innerHTML = "<img id='' alt='" + hands[(randomNumber)] +"' src='" + images[(randomNumber)] + "'></img>";
}
