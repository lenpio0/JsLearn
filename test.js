let rps = document.getElementById('rps');
let r = document.getElementById('r');
let p = document.getElementById('p');
let s = document.getElementById('s');
let ok = document.getElementById('ok');
let replay = document.getElementById('replay');
let endl = document.getElementById('endless');
let rset = document.getElementById('reset');
let difficulty = document.getElementById('difficulty');
let yourScoreP = document.getElementById('score');
let hisScoreP = document.getElementById('a-score');
let bo1 = document.getElementById('bo1');
let bo3 = document.getElementById('bo3');
let bo5 = document.getElementById('bo5');
let bo9 = document.getElementById('bo9');
let reward = document.getElementById('reward');
let yourScore = 0;
let hisScore = 0;
let win = 0;
let rick = document.getElementById('rick');
let rickGif = document.getElementById('rick-gif');
let stopIt = document.getElementById('stop-it');
let youDied = document.getElementById('you-died');
const rickRoll = new Audio(
    "never-gonna.mp3"
  );  

r.onclick = rock;
p.onclick = paper;
s.onclick = scissors;
ok.onclick = okay;
replay.onclick = again;
endl.onclick = endless;
rset.onclick = reset;
diff.onclick = diff;
bo1.onclick = BO1;
bo3.onclick = BO3;
bo5.onclick = BO5;
bo9.onclick = BO9;
stopIt.onclick = plzStop;

function BO1() {
    rps.innerHTML = 'Pierre-Papier-Ciseaux !'
    bo1.classList.add('hidden');
    bo3.classList.add('hidden');
    bo5.classList.add('hidden');
    bo9.classList.add('hidden');
    endl.classList.add('hidden');
    r.classList.remove('hidden');
    p.classList.remove('hidden');
    s.classList.remove('hidden');
    win = 1;
}

function BO3() {
    rps.innerHTML = 'Pierre-Papier-Ciseaux !'
    bo1.classList.add('hidden');
    bo3.classList.add('hidden');
    bo5.classList.add('hidden');
    bo9.classList.add('hidden');
    endl.classList.add('hidden');
    r.classList.remove('hidden');
    p.classList.remove('hidden');
    s.classList.remove('hidden');
    win = 2;
}

function BO5() {
    rps.innerHTML = 'Pierre-Papier-Ciseaux !'
    bo1.classList.add('hidden');
    bo3.classList.add('hidden');
    bo5.classList.add('hidden');
    bo9.classList.add('hidden');
    endl.classList.add('hidden');
    r.classList.remove('hidden');
    p.classList.remove('hidden');
    s.classList.remove('hidden');
    win = 3;
}

function BO9() {
    rps.innerHTML = 'Pierre-Papier-Ciseaux !'
    bo1.classList.add('hidden');
    bo3.classList.add('hidden');
    bo5.classList.add('hidden');
    bo9.classList.add('hidden');
    endl.classList.add('hidden');
    r.classList.remove('hidden');
    p.classList.remove('hidden');
    s.classList.remove('hidden');
    win = 5;
}

function endless() {
    bo1.classList.add('hidden');
    bo3.classList.add('hidden');
    bo5.classList.add('hidden');
    bo9.classList.add('hidden');
    endl.classList.add('hidden');
    r.classList.remove('hidden');
    p.classList.remove('hidden');
    s.classList.remove('hidden');
    rset.classList.remove('hidden');
    win = Infinity;
}

function rock() {
    let rival = Math.floor(Math.random() * 3);
    r.classList.add('hidden');
    p.classList.add('hidden');
    s.classList.add('hidden');
    ok.classList.remove('hidden');
    if (rival == 0) {
        rps.innerHTML = 'Pierre !</br>Rejouez';
    }
    else if (rival == 1) {
        rps.innerHTML = 'Papier !</br>Point pour moi >:)';
        hisScore ++;
        hisScoreP.innerHTML = 'Score Adverse : ' + hisScore;
    }
    else if (rival == 2) {
        rps.innerHTML = ' Ciseaux !</br>Point pour toi \\o/';
        yourScore ++;
        yourScoreP.innerHTML = 'Votre Score : ' + yourScore;
    }
    if (yourScore == win) {
        let result = 0
        switch (rival) {
            case 0:
                result = 'Pierre';
                break;
            case 1:
                result = 'Papier';
                break;
            case 2:
                result = 'Ciseaux';
                break;
            default:
                result = "Erreur dans le switch :'(";
                break;
        }
        rps.innerHTML = result + " !</br>gg t'as gagné t'es trop un bg (ou une bg hein je suis un jeu progressiste)";
        reward.classList.remove('hidden');
        rickGif.classList.remove('hidden');
        stopIt.classList.remove('hidden');
          rickRoll.play();

    }
    if (hisScore == win) {
        let result = 0
        switch (rival) {
            case 0:
                result = 'Pierre';
                break;
            case 1:
                result = 'Papier';
                break;
            case 2:
                result = 'Ciseaux';
                break;
            default:
                result = "Erreur dans le switch :'(";
                break;
        }
        rps.innerHTML = result + " !</br>Booouh t'as perdu cheh";
        youDied.classList.remove('hidden');
    }
}

function paper() {
    let rival = Math.floor(Math.random() * 3);
    r.classList.add('hidden');
    p.classList.add('hidden');
    s.classList.add('hidden');
    ok.classList.remove('hidden');
    if (rival == 0) {
        rps.innerHTML = 'Pierre !</br>Point pour toi \\o/';
        yourScore ++;
        yourScoreP.innerHTML = 'Votre Score : ' + yourScore;
    }
    else if (rival == 1) {
        rps.innerHTML = 'Papier !</br>Rejouez';
    }
    else if (rival == 2) {
        rps.innerHTML = 'Ciseaux !</br>Point pour moi >:)';
        hisScore ++;
        hisScoreP.innerHTML = 'Score Adverse : ' + hisScore;
    }
    if (yourScore == win) {
        let result = 0
        switch (rival) {
            case 0:
                result = 'Pierre';
                break;
            case 1:
                result = 'Papier';
                break;
            case 2:
                result = 'Ciseaux';
                break;
            default:
                result = "Erreur dans le switch :'(";
                break;
        }
        rps.innerHTML = result + " !</br>gg t'as gagné t'es trop un bg (ou une bg hein je suis un jeu progressiste)";
        reward.classList.remove('hidden');
        rickGif.classList.remove('hidden');
        stopIt.classList.remove('hidden');
      
          rickRoll.play();
    }
    if (hisScore == win) {
        let result = 0
        switch (rival) {
            case 0:
                result = 'Pierre';
                break;
            case 1:
                result = 'Papier';
                break;
            case 2:
                result = 'Ciseaux';
                break;
            default:
                result = "Erreur dans le switch :'(";
                break;
        }
        rps.innerHTML = result + " !</br>Booouh t'as perdu cheh";
        youDied.classList.remove('hidden');
    }
}

function scissors() {
    let rival = Math.floor(Math.random() * 3);
    r.classList.add('hidden');
    p.classList.add('hidden');
    s.classList.add('hidden');
    ok.classList.remove('hidden');
    if (rival == 0) {
        rps.innerHTML = 'Pierre !</br>Point pour moi >:)';
        hisScore ++;
        hisScoreP.innerHTML = 'Score Adverse : ' + hisScore;
    }
    else if (rival == 1) {
        rps.innerHTML = 'Papier !</br>Point pour toi \\o/';
        yourScore ++;
        yourScoreP.innerHTML = 'Votre Score : ' + yourScore;
    }
    else if (rival == 2) {
        rps.innerHTML = 'Ciseaux !</br>Rejouez';
    }
    if (yourScore == win) {
        let result = 0
        switch (rival) {
            case 0:
                result = 'Pierre';
                break;
            case 1:
                result = 'Papier';
                break;
            case 2:
                result = 'Ciseaux';
                break;
            default:
                result = "Erreur dans le switch :'(";
                break;
        }
        rps.innerHTML = result + " !</br>gg t'as gagné t'es trop un bg (ou une bg hein je suis un jeu progressiste)";
        reward.classList.remove('hidden');
        rickGif.classList.remove('hidden');
        stopIt.classList.remove('hidden');
          rickRoll.play();
    }
    if (hisScore == win) {
        let result = 0
        switch (rival) {
            case 0:
                result = 'Pierre';
                break;
            case 1:
                result = 'Papier';
                break;
            case 2:
                result = 'Ciseaux';
                break;
            default:
                result = "Erreur dans le switch :'(";
                break;
        }
        rps.innerHTML = result + " !</br>Booouh t'as perdu cheh";
        youDied.classList.remove('hidden');
    }
}

function okay() {
    ok.classList.add('hidden');
    youDied.classList.add('hidden');
    if (yourScore == win || hisScore == win) {
        replay.classList.remove('hidden');
        rps.innerHTML = 'Rejouer ?';
    }
    else {
        r.classList.remove('hidden');
        p.classList.remove('hidden');
        s.classList.remove('hidden');
        rps.innerHTML = 'Pierre-papier-ciseaux !';
    }
}

function again() {
    replay.classList.add('hidden');
    bo1.classList.remove('hidden');
    bo3.classList.remove('hidden');
    bo5.classList.remove('hidden');
    bo9.classList.remove('hidden');
    endl.classList.remove('hidden');
    reward.classList.add('hidden');
    rps.innerHTML = 'Pierre-papier-ciseaux !</br>Combien de manches gagnantes ?';
    win = 0;
    yourScore = 0;
    hisScore = 0;
    yourScoreP.innerHTML = 'Votre Score : ' + yourScore;
    hisScoreP.innerHTML = 'Score Adverse : ' + hisScore;

}

function reset() {
    r.classList.add('hidden');
    p.classList.add('hidden');
    s.classList.add('hidden');
    rset.classList.add('hidden');
    bo1.classList.remove('hidden');
    bo3.classList.remove('hidden');
    bo5.classList.remove('hidden');
    bo9.classList.remove('hidden');
    endl.classList.remove('hidden');
    rps.innerHTML = 'Pierre-papier-ciseaux !</br>Combien de manches gagnantes ?';
    win = 0;
    yourScore = 0;
    hisScore = 0;
    yourScoreP.innerHTML = 'Votre Score : ' + yourScore;
    hisScoreP.innerHTML = 'Score Adverse : ' + hisScore;
}

function plzStop() {
    rickGif.classList.add('hidden');
    stopIt.classList.add('hidden');
    reward.classList.add('hidden');
    rickRoll.pause();
    rickRoll.currentTime = 0;
}
// 0 rock
// 1 paper
// 2 scissors
