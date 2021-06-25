let askName = function () {

    let person = prompt('Vul je naam in', '');
    return person;
};

let playGame = function () {

    const min = parseInt(prompt("Geef een minimale waarde: "));
    const max = parseInt(prompt("Geef een maximale waarde: "));
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('Random value tussen ' + min + ' en ' + max + ' is ' + randomNumber);

    let lives = 0;

    alert('Het spel staat klaar, je hebt 5 levens om het cijfer te raden tussen jouw aangegeven range');

    for (i = 4; i >= lives; i--) {

        let number = prompt('Raad een cijfer tussen jouw aangegeven range',);

        if (randomNumber == number) {
            alert('Gefeliciteerd, je hebt het goed geraden en het spel gewonnen!');
            return;
        }
        else {
            alert('Fout! Je hebt ' + i + ' levens over');
        }

        if (i <= 0) {
            alert('Je levens zijn op, probeer het nog eens!');
        };
    }

}

let person = askName();

function startGame() {
    askName();
    alert('Hey ' + person + ', welkom bij het spel!');
    playGame();
    alert('Dag ' + person + ', tot de volgende keer!');
};



