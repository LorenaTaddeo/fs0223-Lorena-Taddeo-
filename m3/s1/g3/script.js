/*abstract class redditoDiCittadinanza1{
    codredd: number;
    redditoannuolordo: number;
    tasseInps: number;
    tasseIrpef: number;

    constructor(cod:number, redditoannuolordo:number, tasse: number, tasseirpef: number){
        this.codredd = cod;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseInps = tasse;
        this.tasseIrpef = tasseirpef;
    }

    abstract getUtiletasse():number
    abstract getTasseinps():number
    abstract getTasseirpef():number
    abstract getUtiletasseannuolordo():number
}

class redditoDiCittadinanza extends redditoDiCittadinanza1{
    constructor(cod:number, redditoannuolordo:number, tasse: number, tasseirpef: number){
        super(cod, redditoannuolordo, tasse, tasseirpef);
    }
    getUtiletasse(): number {
        if(this.redditoannuolordo < 15000){
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.23)
        }
        else if (this.redditoannuolordo > 15001 && this.redditoannuolordo < 28000){
        this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.25)
        }else if (this.redditoannuolordo > 28001 && this.redditoannuolordo < 50000){
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.35)
        }else{
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.43)
        }
        return this.redditoannuolordo
    }
    getTasseInps(): number {
        this.tasseInps = this.redditoannuolordo * 0.24
        return this.tasseInps
    }
    getTasseIrpef():number{
        if(this.redditoannuolordo < 15000){
            this.redditoannuolordo = this.redditoannuolordo * 0.23
    }else(this.redditoannuolordo < 15000){
            this.redditoannuolordo = this.redditoannuolordo * 0.23
    }
        if(this.redditoannuolordo < 15000){
            this.redditoannuolordo = this.redditoannuolordo * 0.23
    }
}}*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    LavoratoreAutonomo.prototype.getRedditoAnnuoNetto = function () {
        var tasseTotali = this.getTasseInps() + this.getTasseIrpef();
        var redditonetto = this.redditoannuolordo - tasseTotali;
        return redditonetto;
    };
    return LavoratoreAutonomo;
}());
var LavoratoreAutonomoCategoriaA = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoCategoriaA, _super);
    function LavoratoreAutonomoCategoriaA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LavoratoreAutonomoCategoriaA.prototype.getUtileTasse = function () {
        return this.redditoannuolordo * 0.23;
    };
    LavoratoreAutonomoCategoriaA.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    LavoratoreAutonomoCategoriaA.prototype.getTasseIrpef = function () {
        return this.tasseirpef;
    };
    return LavoratoreAutonomoCategoriaA;
}(LavoratoreAutonomo));
var LavoratoreAutonomoCategoriaB = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoCategoriaB, _super);
    function LavoratoreAutonomoCategoriaB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LavoratoreAutonomoCategoriaB.prototype.getUtileTasse = function () {
        return this.redditoannuolordo * 0.25;
    };
    LavoratoreAutonomoCategoriaB.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    LavoratoreAutonomoCategoriaB.prototype.getTasseIrpef = function () {
        return this.tasseirpef;
    };
    return LavoratoreAutonomoCategoriaB;
}(LavoratoreAutonomo));
var LavoratoreAutonomoCategoriaC = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoCategoriaC, _super);
    function LavoratoreAutonomoCategoriaC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LavoratoreAutonomoCategoriaC.prototype.getUtileTasse = function () {
        return this.redditoannuolordo * 0.35;
    };
    LavoratoreAutonomoCategoriaC.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    LavoratoreAutonomoCategoriaC.prototype.getTasseIrpef = function () {
        return this.tasseirpef;
    };
    return LavoratoreAutonomoCategoriaC;
}(LavoratoreAutonomo));
var LavoratoreAutonomoCategoriaD = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoCategoriaD, _super);
    function LavoratoreAutonomoCategoriaD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LavoratoreAutonomoCategoriaD.prototype.getUtileTasse = function () {
        return this.redditoannuolordo * 0.43;
    };
    LavoratoreAutonomoCategoriaD.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    LavoratoreAutonomoCategoriaD.prototype.getTasseIrpef = function () {
        return this.tasseirpef;
    };
    return LavoratoreAutonomoCategoriaD;
}(LavoratoreAutonomo));
var lavoratore1 = new LavoratoreAutonomoCategoriaA(1, 15000, 3000, 450);
var lavoratore2 = new LavoratoreAutonomoCategoriaB(2, 28000, 6500, 100);
var lavoratore3 = new LavoratoreAutonomoCategoriaC(3, 50000, 16300, 1200);
var lavoratore4 = new LavoratoreAutonomoCategoriaD(4, 85000, 34750, 1800);
console.log("Lavoratore 1:");
console.log("Reddito annuo netto:", lavoratore1.getRedditoAnnuoNetto());
console.log("Codice redditività:", lavoratore1.codredd);
console.log("Lavoratore 2:");
console.log("Reddito annuo netto:", lavoratore2.getRedditoAnnuoNetto());
console.log("Codice redditività:", lavoratore2.codredd);
console.log("Lavoratore 3:");
console.log("Reddito annuo netto:", lavoratore3.getRedditoAnnuoNetto());
console.log("Codice redditività:", lavoratore3.codredd);
console.log("Lavoratore 4:");
console.log("Reddito annuo netto:", lavoratore4.getRedditoAnnuoNetto());
console.log("Codice redditività:", lavoratore4.codredd);
