/*
* Név: Szilágyi Levente
* Osztály: Szoft-I-2-E
* Dátum: 2023-03-06
*/


const tbody = document.querySelector('#tbody');
var wheelList = [
    { nev: 'cassis', kerek: 28, hasznalat: 'offroad', ar: 557900 },
    { nev: 'Albion 900', kerek: 28, hasznalat: 'trekking', ar: 519900 },
    { nev: 'Asgard', kerek: 29, hasznalat: 'technikás utak', ar: 519900 },
    { nev: 'Ruga', kerek: 29, hasznalat: 'hegyi', ar: 372900 },
    { nev: 'Reptila', kerek: 28, hasznalat: 'városi', ar: 308900 },
    { nev: 'Sirmium', kerek: 29, hasznalat: 'hegyi', ar: 264900 }
];

function createTable() {
    wheelList.forEach((wheel) =>{
        console.log(wheel.nev)
        let tr = document.createElement('tr');

        let tdNev = document.createElement('td');
        let tdKerek = document.createElement('td');
        let tdHasznalat = document.createElement('td');
        let tdAr = document.createElement('td');

        tdNev.textContent = wheel.nev;
        tdKerek.textContent = wheel.kerek;
        tdHasznalat.textContent = wheel.hasznalat;
        tdAr.textContent = wheel.ar;

        tbody.append(tr);
        tr.append(tdNev);
        tr.append(tdKerek);
        tr.append(tdHasznalat);
        tr.append(tdAr);
    });
};
createTable();