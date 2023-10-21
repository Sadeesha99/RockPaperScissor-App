function winnerAndLoser(playerInput) {

    function computerWins(){
        playerData.computerSessionWins+=1;
    }
    function playerWins(){
        playerData.playerSessionWins+=1;
    }
    function playerDraws(){
        playerData.drawsInTheSession+=1;
    }
    // Combine the two values to create a unique identifier
    const combination = `${playerInput}-${randomNumber}`;

    // Use a switch statement or if-else conditions to print special messages
    switch (combination) {
        case "0-0":
            console.log("Special message for combination 0-0 --> Draw");
            playerDraws();
            break;
        case "0-1":
            console.log("Special message for combination 0-1 --> Computer Wins");
            computerWins();
            break;
        case "0-2":
            console.log("Special message for combination 0-2 --> Player Wins");
            playerWins();
            break;
        case "1-0":
            console.log("Special message for combination 1-0 --> Player Wins");
            playerWins();
            break;
        case "1-1":
            console.log("Special message for combination 1-1 --> Draw");
            playerDraws();
            break;
        case "1-2":
            console.log("Special message for combination 1-2 --> Computer Wins");
            computerWins();
            break;
        case "2-0":
            console.log("Special message for combination 2-0 --> Computer Wins");
            computerWins();
            break;
        case "2-1":
            console.log("Special message for combination 2-1 --> Player Wins");
            playerWins();
            break;
        case "2-2":
            console.log("Special message for combination 2-2 --> Draw");
            playerDraws();
            break;
        default:
            console.log("No special message for this combination.");
    }

}

function whoWonTheRound(){
    if (playerData.computerSessionWins<playerData.playerSessionWins){
        console.log('Player Won that Round!');
        playerData.playerWins+=1;
    }else if(playerData.computerSessionWins>playerData.playerSessionWins){
        console.log('Computer Won that Round!');
        playerData.computerWins+=1;
    }else if(playerData.playerSessionWins == playerData.computerSessionWins){
        console.log('That round was a draw')
        playerData.roundDraws+=1;
    }
}