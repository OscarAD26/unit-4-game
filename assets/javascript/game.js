var w = 0; 
var l = 0;
var values = [];
var game = setupGame();

function setupGame() { 
    var game = { 
        wins: w,
        losses: l,
        round: randomNumber()
    };

    // brower looping
    for (i = 0; i < 4; i++) { 
        values.push(Math.floor(Math.random() * 9) + 1) 
    };
    
    
    for (var i = 0; i < 4; i++) {
        $('#browser').prepend('<div class="c"><img src="assets/images/logo' + i + '.png" /><p>' + game.round.browser[i] + '</p></div>')
    }; 

    // Show game value on page
    $('#goal').text(game.round.number)

    return game
};

//Set random Goal number 
function randomNumber() {
    var round = { 
        number: Math.floor(Math.random() * 60) + 30,
        browser: values, 
        score: 0
    }; 
    return round
};

// Check if the player has won
function hasWon(score) { 
    if(score === game.round.number) { 
        w++ 
        alert('Wow you actually Got it! You got the correct browser combination for ' + game.round.number + '.' )
        resetGame()
    } else {
        hasLost(score)
    };  
};

function hasLost(score) {
    if(score > game.round.number) { 
        l++ 
        alert(score + ' is greater than ' + game.round.number + '. HAHA you LOSS!!!')
        resetGame() 
    };
};

// Reset the game once won or lost
function resetGame() {
    values = [];
    game.round.score = 0; 
    $('.c').detach();
    game = setupGame();

};


$('#browser').on('click', '.c', function() { 
    game.round.score = parseInt(game.round.score) + parseInt($(this).text())
    $('#score').html(game.round.score)
    hasWon(game.round.score)
});
