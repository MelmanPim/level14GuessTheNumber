let askName = function () {
    console.log('vraagt om je naam');

    let person = prompt('Vul je naam in', 'Pim');
    alert('Hey ' + person + ', welkom bij het spel!');
    return person;
};

let askNumber = function () {
    console.log('gaat om een cijfer vragen');
    let number = prompt('Vul een cijfer in tussen 0 en 25', 1);

    if (number > 25 | number < 0) {
        alert('Nummer ' + number + ' dat je hebt gekozen ligt niet tussen 0 en 25, probeer het nog een keer.');
        askNumber();
    }
    else {
        alert('Het nummer dat je hebt gekozen is ' + number);
    }

    let randomNumber = Math.floor(Math.random() * 2);
    alert('De computer heeft ' + randomNumber + ' gekozen.');

    if (randomNumber == number) {
        alert('Gefeliciteerd, je hebt het goed geraden en het spel gewonnen!');

    }
    else {
        alert('Je nummer komt niet overeen, probeer het nog een keer');
        timesGuessed();
    }

    let timesLeft = timesGuessed();
    console.log('gaat vertellen hoeveel pogingen je nog hebt');
    console.log(timesLeft);

    if (timesLeft < 1) {
        alert('Je bent game over, je pogingen zijn op');
    }
    else {
        console.log('gaat opnieuw een nummer aan je vragen');
        return;
    }

};

let timesGuessed = function () {
    console.log('begint met uitrekenen van aantal pogingen');

    for (let i = 5; i >= 0; i--) {
        alert('Je hebt nog ' + i + ' pogingen over');
        console.log('heeft het aantal pogingen berekend en returned');
        askNumber();
    }
};

let byePlayer = function () {
    console.log('wilt gedag zeggen');
    let person2 = askName();
    console.log('gaat gedag zeggen');
    alert('Dag ' + person2 + ', tot de volgende keer!');
    console.log('heeft gedag gezegd');
};

function startGame() {
    askName();
    askNumber();
    byePlayer();
};