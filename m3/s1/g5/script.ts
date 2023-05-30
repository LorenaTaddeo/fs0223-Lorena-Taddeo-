interface Ismartphone {
    carica: number
    numeroChiamate: number
    costoMinuto: number
    registroChiamate: IRegistroChiamate[];

    ricarica(euro: number): void
    numero404(): string
    getNumeroChiamate(): number
    chiamata(min: number): void
    azzeraChiamate(): void
}

class RegistoChiamate {
    id: number
    durata: number
    dataOra: Date
    constructor(id: number, durata: number, dataOra: Date) {
        this.id = id;
        this.durata = durata;
        this.dataOra = dataOra;
    }
}

class Smartphone implements Ismartphone {
    carica: number
    numeroChiamate: number
    costoMinuto: number
    registroChiamate: registroChiamate[]

    ricarica($: number): void {
        this.carica = $ + this.carica
    }

    numero404(): string {
        return `Il credito è di ${this.carica}`
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate
    }

    chiamata(min: number): void {
        this.carica = this.carica - min * this.costoMinuto;
        this.costoMinuto.registroChiamate.push(new this.registroChiamate(this.registroChiamate.length + 1, min, new Date()));

        azzeraChiamate(): void {
            this.numeroChiamate = 0
        }

        mostraRegistroChiamate():any{
            console.log(this.registroChiamate)
        }

        filtraChiamatePerDataOra(data: Date): void {
            registroChiamate.forEach
        }

        constructor(_carica: number, _numeroChiamate: number, _costoMinuti: number){
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




