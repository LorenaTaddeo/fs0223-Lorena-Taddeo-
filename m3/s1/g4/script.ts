let abb:any [] = []

fetch ('./starter/Abbigliamento.json')
.then(res => res.json())
  .then(data => {data.forEach((element:Abbigliamento) => {
    abb.push(new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo))
  });
  console.log(abb[0].mostraPrezzo())
  console.log(abb[1].mostraPrezzo())
  console.log(abb[2].mostraPrezzo())
  console.log(abb[3].mostraPrezzo())
  console.log(abb[4].mostraPrezzo())
  
})
  .catch((err:string) => console.log(err));

  class Abbigliamento{
    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number

    constructor( _id:number, _codprod:number, _collezione:string, _capo:string, _modello:number, _quantita:number, _colore:string,
        _prezzoivaesclusa:number, _prezzoivainclusa:number, _disponibile:string, _saldo:number){
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
        this.saldo = _saldo

    }
    mostraPrezzo(): string {return this.prezzoivainclusa + '€'}

  }