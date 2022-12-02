//                                                            CREAZIONE DEI DATI RANDOM





// posizioni vendita 
const posizioniRetail = [
    {
        provincia:"Lodi",
        regione: "Lombardia",
        codice: "LO",
        punto_vendita: "Fobio",
    },
    {
        provincia:"Lodi",
        regione: "Lombardia",
        codice: "LO",
        punto_vendita: "Abbadia Cerreto",
    },
    {
        provincia:"Lodi",
        regione: "Lombardia",
        codice: "LO",
        punto_vendita: "Bertonico",
    }, 
    {
        provincia:"Lodi",
        regione: "Lombardia",
        codice: "LO",
        punto_vendita: "Boffalora d'Adda",
    }, 
    {
        provincia:"Lodi",
        regione: "Lombardia",
        codice: "LO",
        punto_vendita: "Borghetto Lodigiano",
    }, 
    {
        provincia:"Lodi",
        regione: "Lombardia",
        codice: "LO",
        punto_vendita: "Borgo San Giovanni",
    }, 
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
        punto_vendita: "Abbiategrasso",
    },
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
        punto_vendita: "Albairate",
    },
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
        punto_vendita: "Arconate",
    },
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
        punto_vendita: "Arese",
    },
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
        punto_vendita: "Carugate",
    },
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
        punto_vendita: "Noviglio",
    },
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
        punto_vendita: "Sesto San Giovanni",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
        punto_vendita:"Chiavari",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
        punto_vendita:"Sestri Levante",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
        punto_vendita:"Rapallo",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
        punto_vendita:"Lavagna",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
        punto_vendita:"Cavi",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
        punto_vendita:"Camogli",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
        punto_vendita:"Portofino",
    },
    {
        provincia:"Padova",
        regione:"Veneto",
        codice: "PD",
        punto_vendita: "Agna",
    },
    {
        provincia:"Padova",
        regione:"Veneto",
        codice: "PD",
        punto_vendita: "Candiana",
    },
    {
        provincia:"Padova",
        regione:"Veneto",
        codice: "PD",
        punto_vendita: "Monselice",
    },
    {
        provincia:"Padova",
        regione:"Veneto",
        codice: "PD",
        punto_vendita: "Saonara",
    },
    {
        provincia:"Padova",
        regione:"Veneto",
        codice: "PD",
        punto_vendita: "Stanghella",
    },
    {
        provincia:"Padova",
        regione:"Veneto",
        codice: "PD",
        punto_vendita: "Veggiano",
    },
    {
        provincia:"Bologna",
        regione:"Emilia Romagna",
        codice: "BO",
        punto_vendita:"Bentivoglio",
    }, 
    {
        provincia:"Bologna",
        regione:"Emilia Romagna",
        codice: "BO",
        punto_vendita:"Castel Maggiore",
    }, 
    {
        provincia:"Bologna",
        regione:"Emilia Romagna",
        codice: "BO",
        punto_vendita:"Dozza",
    }, 
    {
        provincia:"Bologna",
        regione:"Emilia Romagna",
        codice: "BO",
        punto_vendita:"Castenaso",
    }, 
    {
        provincia:"Bologna",
        regione:"Emilia Romagna",
        codice: "BO",
        punto_vendita:"Monzuno",
    }, 
    {
        provincia:"Bologna",
        regione:"Emilia Romagna",
        codice: "BO",
        punto_vendita:"Pianoro",
    }, 
    {
        provincia:"Roma",
        regione:"Lazio",
        codice: "RM",
        punto_vendita:"Artena", 
    }, 
    {
        provincia:"Roma",
        regione:"Lazio",
        codice: "RM",
        punto_vendita:"Cerveteri", 
    }, 
    {
        provincia:"Roma",
        regione:"Lazio",
        codice: "RM",
        punto_vendita:"Formello", 
    }, 
    {
        provincia:"Roma",
        regione:"Lazio",
        codice: "RM",
        punto_vendita:"Fiumicino", 
    }, 
    {
        provincia:"Roma",
        regione:"Lazio",
        codice: "RM",
        punto_vendita:"Lariano", 
    }, 
    {
        provincia:"Roma",
        regione:"Lazio",
        codice: "RM",
        punto_vendita:"Mandela", 
    },  
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
        punto_vendita:"Capri",
    },
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
        punto_vendita:"Forio",
    },
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
        punto_vendita:"Cercola",
    },
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
        punto_vendita:"Casamicciola Terme",
    },
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
        punto_vendita:"Casalnuovo di Napoli",
    },
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
        punto_vendita:"Massa di Somma",
    },
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
        punto_vendita:"San Vitaliano",
    },
    {
        provincia:"Venezia",
        regione:"Veneto",
        codice:"VE", 
        punto_vendita:"Martellago", 
    },
    {
        provincia:"Venezia",
        regione:"Veneto",
        codice:"VE", 
        punto_vendita:"Chioggia", 
    },
    {
        provincia:"Venezia",
        regione:"Veneto",
        codice:"VE", 
        punto_vendita:"Mira", 
    },
    {
        provincia:"Venezia",
        regione:"Veneto",
        codice:"VE", 
        punto_vendita:"San Donà di Piave", 
    },
    {
        provincia:"Venezia",
        regione:"Veneto",
        codice:"VE", 
        punto_vendita:"Jesolo", 
    },
    {
        provincia:"Venezia",
        regione:"Veneto",
        codice:"VE", 
        punto_vendita:"Scorzè", 
    }
]

// posizioni vendita 
const posizioniUtente = [
    {
        provincia:"Lodi",
        regione: "Lombardia",
        codice: "LO",
    },
    {
        provincia:"Lodi",
        regione: "Lombardia",
        codice: "LO",
    },
    {
        provincia:"Lodi",
        regione: "Lombardia",
        codice: "LO",
    }, 
    {
        provincia:"Lodi",
        regione: "Lombardia",
        codice: "LO",
    }, 
    {
        provincia:"Lodi",
        regione: "Lombardia",
        codice: "LO",
    }, 
    {
        provincia:"Lodi",
        regione: "Lombardia",
        codice: "LO",
    }, 
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
    },
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
    },
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
    },
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
    },
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
    },
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
    },
    {
        provincia:"Milano",
        regione: "Lombardia",
        codice: "MI",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
    },
    {
        provincia:"Genova",
        regione:"Liguria",
        codice: "GE",
    },
    {
        provincia:"Padova",
        regione:"Veneto",
        codice: "PD",
    },
    {
        provincia:"Padova",
        regione:"Veneto",
        codice: "PD",
    },
    {
        provincia:"Padova",
        regione:"Veneto",
        codice: "PD",
    },
    {
        provincia:"Padova",
        regione:"Veneto",
        codice: "PD",
    },
    {
        provincia:"Padova",
        regione:"Veneto",
        codice: "PD",
    },
    {
        provincia:"Padova",
        regione:"Veneto",
        codice: "PD",
    },
    {
        provincia:"Bologna",
        regione:"Emilia Romagna",
        codice: "BO",
    }, 
    {
        provincia:"Bologna",
        regione:"Emilia Romagna",
        codice: "BO",
    }, 
    {
        provincia:"Bologna",
        regione:"Emilia Romagna",
        codice: "BO",
    }, 
    {
        provincia:"Bologna",
        regione:"Emilia Romagna",
        codice: "BO",
    }, 
    {
        provincia:"Bologna",
        regione:"Emilia Romagna",
        codice: "BO",
    }, 
    {
        provincia:"Bologna",
        regione:"Emilia Romagna",
        codice: "BO",
    }, 
    {
        provincia:"Roma",
        regione:"Lazio",
        codice: "RM",
    }, 
    {
        provincia:"Roma",
        regione:"Lazio",
        codice: "RM",
    }, 
    {
        provincia:"Roma",
        regione:"Lazio",
        codice: "RM",
    }, 
    {
        provincia:"Roma",
        regione:"Lazio",
        codice: "RM",
    }, 
    {
        provincia:"Roma",
        regione:"Lazio",
        codice: "RM",
    }, 
    {
        provincia:"Roma",
        regione:"Lazio",
        codice: "RM",
    },  
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
    },
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
    },
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
    },
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
    },
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
    },
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
    },
    {
        provincia:"Napoli",
        regione:"Campania",
        codice:"NA",
    },
    {
        provincia:"Venezia",
        regione:"Veneto",
        codice:"VE", 
    },
    {
        provincia:"Venezia",
        regione:"Veneto",
        codice:"VE", 
    },
    {
        provincia:"Venezia",
        regione:"Veneto",
        codice:"VE", 
    },
    {
        provincia:"Venezia",
        regione:"Veneto",
        codice:"VE", 
    },
    {
        provincia:"Venezia",
        regione:"Veneto",
        codice:"VE", 
    },
    {
        provincia:"Venezia",
        regione:"Veneto",
        codice:"VE", 
    }
]

// oggetto prodotti con i vari attributi
const prodotti = [
    {
        categoria:"T-shirt",
        articolo:"Top",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    }, 
    {
        categoria:"T-shirt",
        articolo:"Polo",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    }, 
    {
        categoria:"T-shirt",
        articolo:"A manica lunga",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    }, 
    {
        categoria:"Pantaloni",
        articolo:"Pantaloni cargo",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    },
    {
        categoria:"Pantaloni",
        articolo:"Leggings",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    },
    {
        categoria:"Pantaloni",
        articolo:"Pantaloni di pelle",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    },
    {
        categoria:"Pantaloni",
        articolo:"Pantaloni tuta",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    },
    {
        categoria:"Felpe",
        articolo:"Con il cappuccio",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    },
    {
        categoria:"Felpe",
        articolo:"Con la zip",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    }, 
    {
        categoria:"Felpe",
        articolo:"Pile",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    }, 
    {
        categoria:"Giacche",
        articolo:"Di pelle",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    },
    {
        categoria:"Giacche",
        articolo:"Blazer",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    },
    {
        categoria:"Giacche",
        articolo:"Smanicate",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    },
    {
        categoria:"Giacche",
        articolo:"Di Jeans",
        prezzo_unitario:randomNumber(5, 500),
        sconto : null,
    },
]

const mesi = ['Gennaio','Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre']



// funzione per generare numeri random con un min e un max
function randomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
// generazione numeri alfanumerici
function generateRandomString(iLen) {
    var sRnd = '';
    var sChrs = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    for (var i = 0; i < iLen; i++) {
      var randomPoz = Math.floor(Math.random() * sChrs.length);
        sRnd += sChrs.substring(randomPoz, randomPoz + 1);
    }
    return sRnd;
}



// array dove vengono inseriti gli oggetti dV (dettagli vendita singola)
let venditeRetail = []
// creazione degli oggetti vendite retail
for (let i = 0; i < randomNumber(75, 100); i++) {
    // generazione rand di date
    let randMese=  Math.floor(Math.random()*mesi.length);
    let dateAcquisti = [];
    for (let i = 0; i < 50; i++) {

        const dataAcquisto = {
                anno:2022,
                mese:mesi[randMese],
                giorno:randomNumber(1, 30),
            }
        
        dateAcquisti.push(dataAcquisto)
    }

    // variabile che prende un index casuale delle posizioni 
    let randPosizione = Math.floor(Math.random()*posizioniRetail.length);
    // variabile che prende un index casuale delle date 
    let randDate = Math.floor(Math.random()*dateAcquisti.length);
    let tesseraFedelta = [true, false];
    let codiceSconto = [true, false];
    let randTessera = Math.floor(Math.random()*tesseraFedelta.length);
    let randCodSconto = Math.floor(Math.random()*codiceSconto.length);
    let prodottiAcquistati = []
    for (let i = 0; i < randomNumber(1, 5); i++) {
        let prodottiRand = Math.floor(Math.random()*prodotti.length);
        prodottiAcquistati.push(prodotti[prodottiRand])
    }

    // dVR (dettagli vendita retail)
    dVR= {
            id_vendita_retail:i,
            numero_scontrino:Math.floor(Math.random() * 100000000) + 1,
            posizione: posizioniRetail[randPosizione],
            data_acquisto: dateAcquisti[randDate],
            prodotti_venduti: prodottiAcquistati,
            quantita_articoli:prodottiAcquistati.length,
            prezzo_tot: null,
            prezzo_finale:  null,
            tessera_fedelta:tesseraFedelta[randTessera],
            codice_sconto: codiceSconto[randCodSconto],
            sconto_tot:null,
        },
    venditeRetail.push(dVR)
}


// array dove vengono inseriti gli oggetti dV (dettagli vendita singola)
let venditeOnline = []
// creazione degli oggetti vendite online
for (let i = 0; i < randomNumber(75, 100); i++) {
    // generazione rand di date
    let randMese=  Math.floor(Math.random()*mesi.length);
    let dateAcquisti = [];
    for (let i = 0; i < 50; i++) {

        const dataAcquisto = {
                anno:2022,
                mese:mesi[randMese],
                giorno:randomNumber(1, 30),
            }
        
        dateAcquisti.push(dataAcquisto)
    }

    // variabile che prende un index casuale delle posizioni 
    let randPosizione = Math.floor(Math.random()*posizioniUtente.length);
    // variabile che prende un index casuale delle date 
    let randDate = Math.floor(Math.random()*dateAcquisti.length);
    let tesseraFedelta = [1, 0];
    let codiceSconto = [1,  0];
    let randTessera = Math.floor(Math.random()*tesseraFedelta.length);
    let randCodSconto = Math.floor(Math.random()*codiceSconto.length);
    let prodottiAcquistati = []
    for (let i = 0; i < randomNumber(1, 5); i++) {
        let prodottiRand = Math.floor(Math.random()*prodotti.length);
        prodottiAcquistati.push(prodotti[prodottiRand])
    }

    // dVO (dettagli vendita online)
    dVO= {
            id_vendita_online:i,
            codice_ordine:Math.floor(Math.random() * 10000000000) + 1,
            posizione:posizioniUtente[randPosizione],
            codice_utente:generateRandomString(6),
            data_acquisto:dateAcquisti[randDate],
            prodotti_venduti: prodottiAcquistati,
            quantita_articoli:prodottiAcquistati.length,
            prezzo_tot: null,
            prezzo_finale:  null,
            tessera_fedelta:tesseraFedelta[randTessera],
            codice_sconto: codiceSconto[randCodSconto],
            sconto_tot:null,
        },
    venditeOnline.push(dVO)
}


add = function(arr) {
    return arr.reduce((a, b) => a + b, 0);
};


// funzione che calcola il prezzo finale e lo sconto se verificate le condizioni (vendite retail)
function prezzoFinaleRetail(){
    venditeRetail.forEach((element) =>{
        let tF = element.tessera_fedelta;
        let pU = [];
        let sC = [];
        let cS = element.codice_sconto
        element.prodotti_venduti.forEach(item => {
            pU.push(item.prezzo_unitario)
        });

        for (let i = 0; i < pU.length; i++) {
            if (tF == 1 && pU[i] > 50 && pU[i] < 100 && cS == 0) {
                sC.push(20)

            } else if (tF == 1 && pU[i] > 100 && cS == 0) {
                sC.push(10)
                
            } else {
                sC.push(0)
                
            }
        }
        if (cS == 1) {
            sC.push(30)
        }

        const reducer = (accumulator, curr) => accumulator + curr;
        let scontoTot = add(sC);
        element.sconto_tot = scontoTot
        let sommaPrezzi = parseInt(pU.reduce(reducer));
        let prezzoSottratto = null;
        element.prezzo_tot = parseInt(sommaPrezzi)
        if (cS == 1) {
            prezzoSottratto = parseInt(sommaPrezzi / 100 * 30)
        } else {
            prezzoSottratto = parseInt(sommaPrezzi / 100 * scontoTot)
        }
        element.prezzo_finale = parseInt(sommaPrezzi - parseInt(prezzoSottratto))
    })
}

// funzione che calcola il prezzo finale e lo sconto se verificate le condizioni (vendite online)
function prezzoFinaleOnline(){
    venditeOnline.forEach((element) =>{
        let tF = element.tessera_fedelta;
        let pU = [];
        let sC = [];
        let cS = element.codice_sconto
        element.prodotti_venduti.forEach(item => {
            pU.push(item.prezzo_unitario)
        });

        for (let i = 0; i < pU.length; i++) {
            if (tF == 1 && pU[i] > 50 && pU[i] < 100 && cS == 0) {
                sC.push(20)

            } else if (tF == 1 && pU[i] > 100 && cS == 0) {
                sC.push(10)
                
            } else {
                sC.push(0)
                
            }
        }
        if (cS == 1) {
            sC.push(30)
        }

        const reducer = (accumulator, curr) => accumulator + curr;
        let scontoTot = add(sC);
        element.sconto_tot = scontoTot
        let sommaPrezzi = parseInt(pU.reduce(reducer));
        let prezzoSottratto = null;
        element.prezzo_tot = parseInt(sommaPrezzi)
        if (cS == 1) {
            prezzoSottratto = parseInt(sommaPrezzi / 100 * 30)
        } else {
            prezzoSottratto = parseInt(sommaPrezzi / 100 * scontoTot)
        }
        element.prezzo_finale = parseInt(sommaPrezzi - parseInt(prezzoSottratto))
    })
}


// richiamo la funzione per inserire i dati nel'array di ogetti venditeRetail
prezzoFinaleRetail()
prezzoFinaleOnline()




function scontiOnline() {
    venditeRetail.forEach((element) => {
        let tS = element.tessera_fedelta
        let cS = element.codice_sconto
        element.prodotti_venduti.forEach((items) => {
            if (items.prezzo_unitario > 50 && tS == true) {
                items.sconto = 1
            } else {
                items.sconto = 0
            }
        });
    });
}


function scontiOnline() {
    venditeOnline.forEach((element) => {
        let tS = element.tessera_fedelta
        let cS = element.codice_sconto
        element.prodotti_venduti.forEach((items) => {
            if (items.prezzo_unitario > 50 && tS == true) {
                items.sconto = 1
            } else {
                items.sconto = 0
            }
        });
    });
}

scontiOnline()


console.log(venditeRetail)
console.log(venditeOnline)


//                                                      CREAZIONE DELLE QUERY



alasql('CREATE DATABASE db');



// unione delle vendite
let venditeComplessive = []
venditeRetail.forEach(element => {
    venditeComplessive.push(element)
});
venditeOnline.forEach(element => {
    venditeComplessive.push(element)
});


// TUTTI GLI ORDINI CON (VENDITE COMPLESSIVE)
alasql('CREATE TABLE venditC')
alasql('INSERT INTO venditC SELECT id_vendita_online, posizione, prodotti_venduti  FROM ?', [venditeComplessive])
let venditC = alasql('SELECT * FROM venditC');

let ordinitot = [];
venditC.forEach((element) => {
    let p = element.posizione.provincia
    let r = element.posizione.regione


    element.prodotti_venduti.forEach((i) => {
        let arr = {
            regione:r,
            provincia:p,
            categoria:i.categoria,
            articolo:i.articolo,
            sconto:i.sconto,
            
        }
        ordinitot.push(arr)
    }); 
});
alasql('CREATE TABLE ordini')
alasql('INSERT INTO ordini SELECT *  FROM ?', [ordinitot])
console.log([venditeComplessive])
// console.table(alasql('SELECT * FROM ordini'))




// TUTTI GLI ORDINI CON (VENDITE RETAIL)
alasql('CREATE TABLE venditeR')
alasql('INSERT INTO venditeR SELECT id_vendita_online, posizione, prodotti_venduti  FROM ?', [venditeRetail])
let venditeR = alasql('SELECT * FROM venditeR');

let ordinitotRetail = [];
venditeR.forEach((element) => {
    let p = element.posizione.provincia
    let r = element.posizione.regione


    element.prodotti_venduti.forEach((i) => {
        let arr = {
            regione:r,
            provincia:p,
            categoria:i.categoria,
            articolo:i.articolo,
            sconto:i.sconto,
            
        }
        ordinitotRetail.push(arr)
    }); 
});
alasql('CREATE TABLE ordiniRetail')
alasql('INSERT INTO ordiniRetail SELECT *  FROM ?', [ordinitotRetail])
// console.table(alasql('SELECT * FROM ordiniRetail'))




// TUTTI GLI ORDINI CON (VENDITE ONLINE)
alasql('CREATE TABLE venditeOn')
alasql('INSERT INTO venditeOn SELECT id_vendita_online, posizione, prodotti_venduti  FROM ?', [venditeOnline])
let venditeOn = alasql('SELECT * FROM venditeOn');

let ordinitotOnline = [];
venditeOn.forEach((element) => {
    let p = element.posizione.provincia
    let r = element.posizione.regione


    element.prodotti_venduti.forEach((i) => {
        let arr = {
            regione:r,
            provincia:p,
            categoria:i.categoria,
            articolo:i.articolo,
            sconto:i.sconto,
            
        }
        ordinitotOnline.push(arr)
    }); 
});
alasql('CREATE TABLE ordiniOnline')
alasql('INSERT INTO ordiniOnline SELECT *  FROM ?', [ordinitotOnline])
// console.table(alasql('SELECT * FROM ordiniOnline'))



// VENDITE TOTALI E QUANTITA SCONTI PER (VENDITE RETAIL)
console.table(alasql('SELECT regione, provincia, categoria, articolo, COUNT(articolo) as venditeTotRetail, SUM(sconto) as scontiTotRetail FROM ordiniRetail GROUP BY regione, provincia, categoria, articolo, sconto  ORDER BY regione'))

// VENDITE TOTALI E QUANTITA SCONTI PER (VENDITE ONLINE)
console.table(alasql('SELECT regione, provincia, categoria, articolo, COUNT(articolo) as venditeTotOnline, SUM(sconto) as scontiTotOnline FROM ordiniOnline GROUP BY regione, provincia, categoria, articolo, sconto  ORDER BY regione'))



//VENDITE PER CATEGORIA SIA RETAIL CHE ONLINE
alasql('CREATE TABLE venditeCategoria')
alasql('INSERT INTO venditeCategoria SELECT *  FROM ordini')
let venditeCategoria = alasql('SELECT categoria, COUNT(articolo) as venditeCategoria from ordini GROUP BY categoria ORDER BY venditeCategoria DESC')
console.table(venditeCategoria)



//VENDITE PER PROVINCIA SIA RETAIL CHE ONLINE
alasql('CREATE TABLE venditeProvincia')
alasql('INSERT INTO venditeProvincia SELECT *  FROM ordini')
let venditeProvincia = alasql('SELECT provincia, COUNT(articolo) as venditeProvincia from ordini GROUP BY provincia ORDER BY provincia')
console.table(venditeProvincia)

//TESSERE FEDELTA SIA RETAIL CHE ONLINE
alasql('CREATE TABLE tessere')
alasql('INSERT INTO tessere SELECT *  FROM ?', [venditeComplessive])
let tessereFedelta = alasql('SELECT COUNT(tessera_fedelta) as totTessere from tessere WHERE tessera_fedelta > 0 GROUP BY totTessere')
let ordiniTot = venditeOnline.length + venditeRetail.length
console.table(tessereFedelta)





//MESE PIU PROFICUO SIA RETAIL CHE ONLINE
alasql('CREATE TABLE mesi')
alasql('INSERT INTO mesi SELECT *  FROM ?', [venditeComplessive])
let resMesi = alasql('SELECT * FROM mesi');
let mesiProficui = [];
resMesi.forEach((element) => {
    arr = {
        mese: element.data_acquisto.mese ,
        prezzo_finale: element.prezzo_finale,
    }
    mesiProficui.push(arr)
});

alasql('CREATE TABLE mP')
alasql('INSERT INTO mP SELECT *  FROM ?', [mesiProficui])
let venditaMese = alasql('SELECT mese, SUM(prezzo_finale) as guadagno FROM mP GROUP BY mese')
console.table(venditaMese)



//PUNTO VENDITA PIU REDDITIZZIO SOLO RETAIL
alasql('CREATE TABLE puntiV')
alasql('INSERT INTO puntiV SELECT *  FROM ?', [venditeRetail])
let puntiVendita = alasql('SELECT * FROM puntiV');
let puntiV = [];
puntiVendita.forEach((element) => {

    arr = {
        regione: element.posizione.regione,
        provincia: element.posizione.provincia ,
        punto_vendita: element.posizione.punto_vendita,
        prezzo_finale: element.prezzo_finale,
    }
    puntiV.push(arr)
});
alasql('CREATE TABLE pV')
alasql('INSERT INTO pV SELECT *  FROM ?', [puntiV])
console.table(alasql('SELECT regione, provincia, punto_vendita, SUM(prezzo_finale) as guadagno FROM pV GROUP BY punto_vendita, provincia,regione ORDER BY guadagno DESC'))






//                                                      CREAZIONE DEi GRAFICI


// GRAFICO VENDITE PER PROVINCIA


let chartProvincia = echarts.init(document.getElementById('vendite_provincia'));

let provincia = [];
for (var i = 0; i < venditeProvincia.length; i++) {
    provincia.push(venditeProvincia[i].provincia);
}

let provincieArrayObj = []
venditeProvincia.forEach(element => {
    let obj = {
        value:element.venditeProvincia,
        name: element.provincia
    }
    provincieArrayObj.push(obj)
});


let optionP = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: provincia
    },
    series: [
        {
            name: 'Vendite Totali',
            type: 'pie',
            radius: '80%',
            center: ['50%', '55%'],
            data: provincieArrayObj,
                emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

let currentIndexP = -1;

setInterval(function() {
    var dataLen = optionP.series[0].data.length;
    chartProvincia.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndexP
    });
    currentIndexP = (currentIndexP + 1) % dataLen;
    chartProvincia.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndexP
    });
    chartProvincia.dispatchAction({
            type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndexP
    });
}, 1000);


chartProvincia.setOption(optionP);






let chartCategoria = echarts.init(document.getElementById('vendite_categoria'));

let categoria = [];
for (var i = 0; i < venditeCategoria.length; i++) {
    categoria.push(venditeCategoria[i].categoria);
}

let categoriaArrayObj = []
venditeCategoria.forEach(element => {
    let obj = {
        value:element.venditeCategoria,
        name: element.categoria
    }
    categoriaArrayObj.push(obj)
});


let optionC = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: categoria
    },
    series: [
        {
            name: 'Vendite Totali',
            type: 'pie',
            radius: '80%',
            center: ['50%', '55%'],
            data: categoriaArrayObj,
                emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

let currentIndexC = -1;

setInterval(function() {
    var dataLen = optionC.series[0].data.length;
    chartCategoria.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndexC
    });
    currentIndexC = (currentIndexC + 1) % dataLen;
    chartCategoria.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndexC
    });
    chartCategoria.dispatchAction({
            type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndexC
    });
}, 1000);


chartCategoria.setOption(optionC);






let chartMese = echarts.init(document.getElementById('vendite_mese'));


let mese = [];
let venditeM = [];
for (var i = 0; i < venditaMese.length; i++) {
    venditeM.push(venditaMese[i].guadagno);
    mese.push(venditaMese[i].mese);

}


let optionMese = {
    title : {
        text: 'Mesi'
    },
    xAxis: {
        data: mese,
    },
    yAxis: {},
    tooltip: {},
    legend: {},
    series: [
        {
            name: 'Guadagno',
            type: 'bar',
            data: venditeM,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
            }
        },
    ]
};

chartMese.setOption(optionMese);




let chartPuntoV = echarts.init(document.getElementById('punto_vendita'));


let puntoVendita = [];
let venditePV = [];
for (var i = 0; i < puntiV.length; i++) {
    puntoVendita.push(puntiV[i].punto_vendita);
    venditePV.push(puntiV[i].prezzo_finale)


}


let optionPuntoV = {
    title : {
        text: 'Punti vendita'
    },
    xAxis: {
        data: puntoVendita,
    },
    yAxis: {},
    tooltip: {},
    legend: {},
    series: [
        {
            name: 'Guadagno',
            type: 'bar',
            data: venditePV,
        },
    ]
};

chartPuntoV.setOption(optionPuntoV);







let chartTessere = echarts.init(document.getElementById('tessere_totali'));

let tessereArray = []

tessereFedelta.forEach(element => {
    let objTessere = {
        
        value:element.totTessere,
        name: 'tessere totali'
    }
    tessereArray.push(objTessere)
});

let objTessere ={
    value:ordiniTot,
    name: 'ordini totali'
}
tessereArray.push(objTessere)



let tessereOption = {
    legend: {
        top: 'bottom'
    },
    tooltip: {},
    toolbox: {
        show: true,
        feature: {
        mark: { show: true },
        }
    },
    series: [
        {
            name: 'TESSERE SU ORDINI TOTALI',
            type: 'pie',
            radius: [40, 200],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8
            },
            data: tessereArray,
        }
    ]
};

chartTessere.setOption(tessereOption);