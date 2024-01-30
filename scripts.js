////
// Get HTML elements into objects

let idElements = document.querySelectorAll('[id]');

for (let i = 0; i < idElements.length; i++) {
    window[idElements[i].id] = idElements[i];
}


////
// Thoses buttons define the number of wins required and starts the game

let win = 0;
bo1.onclick = function() {start();win = 1};
bo3.onclick = function() {start();win = 2};
bo5.onclick = function() {start();win = 3};
bo9.onclick = function() {start();win = 5};

function start() {
    rps.innerHTML = 'Pierre-Papier-Ciseaux !</br>À toi de jouer !'
    bo1.classList.add('hidden');
    bo3.classList.add('hidden');
    bo5.classList.add('hidden');
    bo9.classList.add('hidden');
    splash.classList.add('hidden');
    rock.classList.remove('hidden');
    paper.classList.remove('hidden');
    scissors.classList.remove('hidden');
    window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
            scoreboard.children[0].classList.add('fade-top');
            scoreboard.children[1].classList.add('fade-top');
        });
    });
};


////
// rival will randomly define the "opponent" choice, which will determine which text appears and score incrementation if there is one. it 
// will then check if someone is winning, and end the game if needed.
// 0 rock
// 1 paper
// 2 scissors

let yourScore = 0;
let hisScore = 0;
let player = undefined;

rock.onclick = function() {
    player = "rock";
    yourock.classList.remove('hidden');
    play();
};

paper.onclick = function() {
    player = "paper";
    youpaper.classList.remove('hidden');
    play();
};

scissors.onclick = function() {
    player = "scissors";
    youscissors.classList.remove('hidden');
    play();
};

function play() {

    rock.classList.add('hidden');
    paper.classList.add('hidden');
    scissors.classList.add('hidden');
    ok.classList.remove('hidden');

    let rival = Math.floor(Math.random() * 3);
    let rivalResult = undefined;
    let result = undefined;

    switch (rival) {
        case 0:
            rivalResult = 'Pierre';
            rival = "rock";
            jorock.classList.remove('hidden');
            break;
        case 1:
            rivalResult = 'Papier';
            rival = "paper";
            jopaper.classList.remove('hidden');
            break;
        case 2:
            rivalResult = 'Ciseaux';
            rival = "scissors";
            joscissors.classList.remove('hidden');
            break;
        default:
            rivalResult = "undefined rivalResult";
            break;
    };

    switch (player+rival) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            result = 'Rejouez !';
             break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            result = 'Point pour John !';
            hisScore ++;
            break;
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
            result = 'Point pour toi !';
            yourScore ++;
            break;
        default:
            result = "undefined result";
            break;
    };

    if (hisScore == win) {
        result = "Tu as perdu..."
    }
    else if (yourScore == win) {
        result = "Tu as gagné !"
    };

    rps.innerHTML = rivalResult + " !</br>" + result;
    score.innerHTML = yourScore;
    aScore.innerHTML = hisScore;
}


////
// Buttons for between rounds and game over

ok.onclick = okay;
replay.onclick = again;

function okay() {
    ok.classList.add('hidden');
    yourock.classList.add('hidden');
    youpaper.classList.add('hidden');
    youscissors.classList.add('hidden');
    jorock.classList.add('hidden');
    jopaper.classList.add('hidden');
    joscissors.classList.add('hidden');
    if (yourScore == win || hisScore == win) {
        window.requestAnimationFrame(function (time) {
            window.requestAnimationFrame(function (time) {
                scoreboard.children[0].classList.add('fade-top-back');
                scoreboard.children[1].classList.add('fade-top-back');
            });
        });
        replay.classList.remove('hidden');
        rps.innerHTML = 'Rejouer ?';
    }
    else {
        rock.classList.remove('hidden');
        paper.classList.remove('hidden');
        scissors.classList.remove('hidden');
        rps.innerHTML = 'Pierre-Papier-Ciseaux !';
    }
}

function again() {
    replay.classList.add('hidden');
    bo1.classList.remove('hidden');
    bo3.classList.remove('hidden');
    bo5.classList.remove('hidden');
    bo9.classList.remove('hidden');
    splash.classList.remove('hidden');
    scoreboard.children[0].classList.remove('fade-top-back');
    scoreboard.children[1].classList.remove('fade-top-back');
    rps.innerHTML = 'Pierre-Papier-Ciseaux !</br>Combien de manches gagnantes ?';
    win = 0;
    yourScore = 0;
    hisScore = 0;
    score.innerHTML = yourScore;
    aScore.innerHTML = hisScore;
}

