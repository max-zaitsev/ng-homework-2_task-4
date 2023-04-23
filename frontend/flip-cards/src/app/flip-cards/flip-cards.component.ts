import {Component, OnInit} from '@angular/core';
import {CardsService} from "../../shared/services/cards.service";
import {Card} from "../../shared/models/Card";

@Component({
  selector: 'app-flip-cards',
  templateUrl: './flip-cards.component.html',
  styleUrls: ['./flip-cards.component.less']
})
export class FlipCardsComponent implements OnInit{
  constructor(public cardsService: CardsService) {
  }

  ngOnInit(): void {
    this.cardsService.initialize();
  }

  addCard(card: Card): void {
    this.cardsService.addCard(card);
  }

  delCard(card: Card): void {
    this.cardsService.delCard(card);
  }

}
