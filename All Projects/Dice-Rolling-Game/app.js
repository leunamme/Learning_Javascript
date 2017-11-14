/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

	//Variable Declaration
var score, roundScore, activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', () => {
    if (gamePlaying){
        //Generate random number
        var dice = Math.floor(Math.random() * 6)+ 1;

        //Display dice result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display= 'block';
        diceDom.src='dice-' + dice + '.png';

            //condition to stop round when 1 is rounded
            if (dice !== 1) {
                //add score
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent= roundScore;
            } else {
                //next player
                nextPlayer();
            }
    }
});



document.querySelector('.btn-hold').addEventListener('click', () => {
    if(gamePlaying) {
        //add current score to total score
        score[activePlayer] += roundScore;

        //updating total score for an activePlayer on the UI
        document.querySelector('#score-' + activePlayer).textContent= score[activePlayer];

            //winner
            if (score[activePlayer] >= 100) {
                //active wins
                document.querySelector('#name-' + activePlayer).textContent= 'WINNER!!!';
                document.querySelector('.dice').style.display= 'none';
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                gamePlaying= false;
            } else {
                //next player
                nextPlayer();
            }  
    }
});


//for new game btn
document.querySelector('.btn-new').addEventListener('click', init);


////////////////////////////functions///////////////////////

function nextPlayer() {
    //next player
        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;
        
        //turns the roundScore to 0 when 1 is rolled
        document.querySelector('#current-0').textContent=0;
        document.querySelector('#current-1').textContent=0;
        
        //move the active property to the activePlayer
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //hide the dice image to begin next player's round
        document.querySelector('.dice').style.display= 'none';
}



function init() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    gamePlaying= true;
    
    //hide the dice image to begin next player's round
    document.querySelector('.dice').style.display= 'none';

    document.querySelector('#score-0').textContent='0';
    document.querySelector('#score-1').textContent='0';
    document.querySelector('#current-0').textContent='0';
    document.querySelector('#current-1').textContent='0';
    document.querySelector('#name-0').textContent= 'PLAYER 1';
    document.querySelector('#name-1').textContent= 'PLAYER 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
}
