
let buttonIdStart = document.getElementById('buttonstart')
let buttonStart = document.getElementById('buttonuser')
let titleStart = document .getElementById('titlestart')
let titleSecond = document.getElementById('titlesecond')
let soundBattle = document.getElementById('sound')
let battleUser = document.getElementById('battle')
let resetGameBtn = document.getElementById('buttonreset')
let score = document.getElementById('score')
let percentage = document.getElementById('wins')

let wins = 0; let loses = 0;

let gameScore = document.getElementById("result")
let battleScore = document.getElementById('scoreplayer')
let battleScoreComputer = document.getElementById('scorecomputer')
let choiceComputer = document.getElementById('choicecomputer')

const choices = ["Pierre", "Feuille", "Ciseaux"]

let grolem = document.getElementById('grolem')
let mystherbe = document.getElementById('mystherbe')
let insecateur = document.getElementById('insecateur')

function hiddenButton () {
    buttonStart.classList.add('d-none')
    titleStart.classList.add('d-none')
    buttonIdStart.classList.add('d-none')
    titleSecond.classList.remove('d-none')
    soundBattle.classList.remove('d-none')
    battleUser.classList.remove('d-none')
}

function randomComputer (userChoice){
    const computerChoiceGame = choices[Math.floor(Math.random() *choices.length)];

    switch(userChoice + '_' + computerChoiceGame){
        case 'Feuille_Ciseaux':
        case 'Pierre_Feuille':
        case 'Ciseaux_Pierre':
            loses += 1;
            gameScore.innerHTML = "PERDU"

            break;
            case 'Feuille_Pierre':
        case 'Pierre_Ciseaux':
        case 'Ciseaux_Feuille':
            wins += 1;
            gameScore.innerHTML ="GAGNÉ"
            break;
            case 'Feuille_Feuille':
                case 'Pierre_Pierre':
        case 'Ciseaux_Ciseaux':
            gameScore.innerHTML = 'ÉGALITÉ'
            break; 
        }
    choiceComputer.innerHTML = "Choix de l'ordinateur : " + computerChoiceGame
    percentage.classList.remove('d-none')
    resetGameBtn.classList.remove('d-none')
    battleScore.classList.remove('d-none')
    battleScoreComputer.classList.remove('d-none')
    battleScore.innerHTML = "Joueur : " + wins
    battleScoreComputer.innerHTML = "Ordinateur : " + loses
}

buttonStart.addEventListener('click', hiddenButton)
grolem.addEventListener('click', () => randomComputer ("Pierre") )
mystherbe.addEventListener('click', () => randomComputer ("Feuille"))
insecateur.addEventListener('click', () => randomComputer ("Ciseaux"))

const restartButton = document.getElementById('reset')
restartButton.addEventListener('click', () => {
    wins = 0;
    loses = 0;
    score.forEach(cell => {
        cell.classList.remove("pierre", "feuille", "ciseaux") 
        battleScore.innerHTML = "Joueur : 0"
        battleScoreComputer.innerHTML = "Ordinateur : 0"
    });
})