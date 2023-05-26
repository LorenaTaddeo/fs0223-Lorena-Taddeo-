interface Ismartphone{
    carica:number 
    numeroChiamate:number 
    costoMinuto:number
    registroChiamate: IRegistroChiamate[];

    ricarica(euro:number):void
    numero404():string
    getNumeroChiamate():number
    chiamata(min:number):void
    azzeraChiamate():void
    }

    class RegistoChiamate{
        id:number
        durata:number
        dataOra:Date
        constructor(id:number, durata:number, dataOra:Date){
            this.id = id;
            this.durata = durata;
            this.dataOra = dataOra;
        }
    }

    class Smartphone implements Ismartphone{
        carica:number;
        numeroChiamate:number;
        costoMinuto:number;
        registroChiamate:RegistroChiamate[];

        ricarica($:number):void{
            this.carica = $ + this.carica}

        numero404():string{
            return `Il credito è di ${this.carica}`}

        getNumeroChiamate():number{
            return this.numeroChiamate}

        chiamata(min:number):void{
            this.carica -= min * this.costoMinuto;
            const id = this.registroChiamate.length + 1;
            const chiamata: new RegistroChiamate(id, min, new Date());
            this.registroChiamate.push(chiamata);
            this.numeroChiamate++;
            }

        azzeraChiamate():void{
            this.numeroChiamate = 0;
            this.registroChiamate = [];
        }

        mostraRegistroChiamate():void{
            console.log(this.registroChiamate);
        }

        filtraChiamatePerDataOra():void{}

        constructor(_carica:number, _numeroChiamate:number, _costoMinuti:number){
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
        this.costoMinuto = _costoMinuti;
        this.registroChiamate = [];

    }}

    let Iphone = new Smartphone(5, 0, 0.20);
    let Samsung = new Smartphone(10, 10, 0.30);
    let Huawei = new Smartphone(15, 15, 0.35);

    console.log(Iphone.ricarica(5));
    console.log(Iphone.numero404());
    console.log(Iphone.chiamata(8));
    console.log(Iphone.numero404());

    console.log(Samsung.ricarica(5));
    console.log(Samsung.numero404());
    console.log(Samsung.chiamata(13));
    console.log(Samsung.numero404());

    console.log(Huawei.ricarica(5));
    console.log(Huawei.numero404());
    console.log(Huawei.chiamata(10));
    console.log(Huawei.numero404());




