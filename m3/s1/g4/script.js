"use strict";
let abb = [];
fetch('./starter/Abbigliamento.json')
    .then(res => res.json())
    .then(data => {
    data.forEach((element) => {
        abb.push(new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo));
    });
    console.log(abb[0].mostraPrezzo());
    console.log(abb[1].mostraPrezzo());
    console.log(abb[2].mostraPrezzo());
    console.log(abb[3].mostraPrezzo());
    console.log(abb[4].mostraPrezzo());
})
    .catch((err) => console.log(err));
class Abbigliamento {
    constructor(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    mostraPrezzo() { return this.prezzoivainclusa + '€'; }
}
