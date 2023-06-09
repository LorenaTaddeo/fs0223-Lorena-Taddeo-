abstract class LavoratoreAutonomo {
    constructor(
      public codredd: number,
      protected redditoannuolordo: number,
      protected tasseinps: number,
      protected tasseirpef: number
    ) {}
  
    abstract getUtileTasse(): number;
    abstract getTasseInps(): number;
    abstract getTasseIrpef(): number;
  
    getRedditoAnnuoNetto(): number {
      const tasseTotali = this.getTasseInps() + this.getTasseIrpef();
      const redditonetto = this.redditoannuolordo - tasseTotali;
      return redditonetto;
    }
  }
  
  class LavoratoreAutonomoCategoriaA extends LavoratoreAutonomo {
    getUtileTasse(): number {
      return this.redditoannuolordo * 0.23;
    }
  
    getTasseInps(): number {
      return this.tasseinps;
    }
  
    getTasseIrpef(): number {
      return this.tasseirpef;
    }
  }
  
  class LavoratoreAutonomoCategoriaB extends LavoratoreAutonomo {
    getUtileTasse(): number {
      return this.redditoannuolordo * 0.25;
    }
  
    getTasseInps(): number {
      return this.tasseinps;
    }
  
    getTasseIrpef(): number {
      return this.tasseirpef;
    }
  }
  class LavoratoreAutonomoCategoriaC extends LavoratoreAutonomo {
    getUtileTasse(): number {
      return this.redditoannuolordo * 0.35;
    }
  
    getTasseInps(): number {
      return this.tasseinps;
    }
  
    getTasseIrpef(): number {
      return this.tasseirpef;
    }
  }
  class LavoratoreAutonomoCategoriaD extends LavoratoreAutonomo {
    getUtileTasse(): number {
      return this.redditoannuolordo * 0.43;
    }
  
    getTasseInps(): number {
      return this.tasseinps;
    }
  
    getTasseIrpef(): number {
      return this.tasseirpef;
    }
  }
  
  
  const lavoratore1 = new LavoratoreAutonomoCategoriaA(1, 15000, 3000, 450);
  const lavoratore2 = new LavoratoreAutonomoCategoriaB(2, 28000, 6500, 100);
  const lavoratore3 = new LavoratoreAutonomoCategoriaC(3, 50000, 16300, 1200);
  const lavoratore4 = new LavoratoreAutonomoCategoriaD(4, 85000, 34750, 1800);
  
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