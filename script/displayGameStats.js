function displayPlayerName(){
    //Display player name
    if (playerData.name ==''){
        resultEl2.innerHTML = "Player Input<br>"
    }else{
        resultEl2.innerHTML = playerData.name
    }
}

function displayGameRound(){
    //number of rounds played is checking up in the session    
    if (playerData.roundNumber<10 && playerData.roundNumber>0){
        console.log((playerData.roundNumber + 1))
        roundEl.innerHTML = "Round 0"+(playerData.roundNumber + 1)+"<br>"+playerData.computerWins+" - "+playerData.playerWins+"<br>"+'Draw Count - '+ playerData.roundDraws;
    }else if(playerData.roundNumber>=10){
        roundEl.innerHTML = "Round "+(playerData.roundNumber + 1)+"<br>"+playerData.computerWins+" - "+playerData.playerWins+"<br>"+'Draw Count - '+ playerData.roundDraws;
    }else{
        roundEl.textContent = "Round 01";
    }
    
}

function displayRoundStats() {
    //Computer Session Wins are checking up and displaying
    if (playerData.computerSessionWins != 0) {
        resultEl1.innerHTML = "Computer - " + playerData.computerSessionWins+"/5";
    }else{
        resultEl1.innerHTML = "Computer - " + playerData.computerSessionWins+"/5";
    }
    //Player Session Wins are checking up and displaying
    if (playerData.playerSessionWins != 0) {
        resultEl2.innerHTML = playerData.name + " - " + playerData.playerSessionWins+"/5";
    }else{
        resultEl2.innerHTML = playerData.name + " - " + playerData.playerSessionWins+"/5";
    }
    console.log("draws - "+playerData.drawsInTheSession)
    console.log("draws - "+playerData.roundDraws)
}
