import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card';
import { FotoService } from 'src/app/foto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  ArrayMiPiace: Card[] = [];

  push(card: Card): void {
    this.ArrayMiPiace.push(card);
  }

  constructor(private fotoSvc: FotoService){}

  cardArr: Card[]= [];
  filteredCards: Card[] = [];
  maxCardsToShow : number = 10;

  ngOnInit(): void {
    
    this.fotoSvc.get().subscribe(res => {
      this.cardArr = res;
      this.filterCards();
    });
  }

  filterCards(): void {
    this.filteredCards = this.cardArr.slice(0, this.maxCardsToShow);
  }

  delete(card: Card): void{
    this.filteredCards.splice(this.cardArr.indexOf(card), 1);
  }
  
}
