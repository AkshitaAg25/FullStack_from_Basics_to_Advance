let playerScore=0;
let computerScore=0;

function game(userchoice){
    let min=1; let max=4;
    let random= Math.floor(Math.random()*(max-min)+min)
    // console.log(random)

    let generate="scissors";
    if(random==1){
        generate="rock";
    }else if(random==2){
        generate="paper";
    }else{
        generate="scissors";
    }
    // console.log(generate);
    // console.log(userchoice);
    let result='';
    if(generate==userchoice){
        console.log("It's a tie.")
        result="It's a tie.";
    }else if(generate=="rock" && userchoice=="paper" || generate=="paper" && userchoice=="scissors" || generate=="scissors" && userchoice=="rock"){
        console.log("Computer's was "+generate+". You win!");
        playerScore++;
        result="You win!";
    }else{
        console.log("Computer wins! "+"It's choice was "+generate);
        computerScore++;
        result="Computer wins!";
    }
    document.getElementById('game-result').textContent = result;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

// game("rock");
