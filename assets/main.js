// console.log('hello');
/*
creare un oggetto che rappresenta uno studente: ogni studente è caratterizzato da un nome, un cognome e un'età. Attraverso un ciclo for-in stampare a schermo tutte le sue proprietà e il relativo valore
creare un array di oggetti "studente". Ciclare su tutti gli studenti e stampare per ciascuno il nome e il cognome
tramite 3 prompt, chiedere all'utente il nome, il cognome e l'età di un nuovo studente. Creare con questi dati un nuovo oggetto e inserirlo nell'array del punto precedente.
*/

$(document).ready(function(){


    var student = {
        'name' : 'pippo',
        'surname' : 'verdi',
        'age' : 20,
    };

    console.log(student);
    // console.log(student.name);
    // console.log(student['surname']);
    // console.log(student['age']);

    for (var key in student) {
        // console.log(key);
        // console.log(student[key]);
        console.log(key + ' : ' + student[key]);
    }


    var students = [
        {
            'name' : 'pippo',
            'surname' : 'verdi',
            'age' : 20
        },
        {
            'name' : 'ciccio',
            'surname' : 'bianchi',
            'age' : 21,
        },
        {
            'name' : 'mimmo',
            'surname' : 'rossi',
            'age' : 22,
        },
    ];

    //console.log(students.length);

    // questo è un array con all'interno degli oggetti
    // per ciclare l'array ci va un ciclo for
    // per ciclare gli oggetti ci va un ciclo for in

/*
    for (var i = 0; i < students.length; i++) {
        var elementoCorrente = students[i];
        // console.log(students[i]);

        for (var key in elementoCorrente) {

            if (key == 'name' || key == 'surname') {
                console.log('studente ' + (i + 1) + ' ' + key + ' : ' + elementoCorrente[key]);

            }
        }
    }
*/


    var newStudent = {
        'name' : askName(),
        'surname' : askSurame(),
        'age' : askAge(),
    };

    console.log(newStudent);

    students.push(newStudent);
    console.log(students);


    for (var i = 0; i < students.length; i++) {
        var elementoCorrente = students[i];
        // console.log(students[i]);

        for (var key in elementoCorrente) {

            if (key == 'name' || key == 'surname') {
                console.log('studente ' + (i + 1) + ' ' + key + ' : ' + elementoCorrente[key]);
                $('main').append('<div>' + 'studente ' + (i + 1) + ' ' + key + ' : ' + elementoCorrente[key] + '</div>');
            }
        }
    }


    function askName(){

        do {
            var resultName = prompt('inserisci il tuo nome');
                if (!isNaN(resultName) || resultName.length <= 2) {
                    alert('inserisci un nome valido');
                }

        } while (!isNaN(resultName) || resultName.length <= 2);

        return resultName;
    }

    // PROVARE A FARE IL DO WHILE IN MODO DIFFERENTE

    function askSurame(){

        var condition = false;
        do {
            var resultSurame = prompt('inserisci il tuo cognome');
                if (isNaN(resultSurame) && resultSurame.length >= 2) {
                    condition = true;
                } else {
                    alert('inserisci un cognome valido');
                }
        } while (condition == false || !isNaN(resultSurame) || resultSurame.length < 2);


        return resultSurame;
    }


    function askAge(){

        do {
            var resultAge = parseInt(prompt('inserisci la tua età'));
            if (isNaN(resultAge) || resultAge < 18 || resultAge > 90) {
                alert('valore non valido');
            }

        } while (isNaN(resultAge) || resultAge < 18 || resultAge > 90);

        return resultAge;

    }


});














/**/
