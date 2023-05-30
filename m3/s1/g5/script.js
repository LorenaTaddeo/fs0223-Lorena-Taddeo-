"use strict";
class RegistoChiamate {
    constructor(id, durata, dataOra) {
        this.id = id;
        this.durata = durata;
        this.dataOra = dataOra;
    }
}
class Smartphone {
    ricarica($) {
        this.carica = $ + this.carica;
    }
    numero404() {
        return `Il credito è di ${this.carica}`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        this.carica -= min * this.costoMinuto;
        const id = this.registroChiamate.length + 1;
        const chiamata;
        (id, min, new Date());
        this.registroChiamate.push(chiamata);
        this.numeroChiamate++;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        this.registroChiamate = [];
    }
    mostraRegistroChiamate() {
        console.log(this.registroChiamate);
    }
    filtraChiamatePerDataOra() { }
    constructor(_carica, _numeroChiamate, _costoMinuti) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
        this.costoMinuto = _costoMinuti;
        this.registroChiamate = [];
    }
}
let Iphone = new Smartphone(15, 0, 0.20);
let Samsung = new Smartphone(15, 10, 0.30);
let Huawei = new Smartphone(15, 15, 0.35);
console.log(Iphone.ricarica(5));
console.log(Iphone.numero404());
console.log(Iphone.chiamata(10));
console.log(Iphone.numero404());
console.log(Samsung.ricarica(7));
console.log(Samsung.numero404());
console.log(Samsung.chiamata(13));
console.log(Samsung.numero404());
console.log(Huawei.ricarica(10));
console.log(Huawei.numero404());
console.log(Huawei.chiamata(10));
console.log(Huawei.numero404());
