import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../shared/models/Card";
import {LocalStorageService} from "../../shared/services/localStorageService";

@Component({
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.less']
})
export class CardsListComponent implements OnInit{
  constructor(public localStorageService: LocalStorageService) {
  }

  @Input()
  cards!: Card[];
  clickedCardMask: boolean[] = [];

  ngOnInit(): void {
    this.clickedCardMask = Array(this.cards.length).fill(false);
  }

  onCardClick(card: Card): void {
    const clickedCardIndex = this.cards.findIndex((c) => c.id === card.id);
    this.clickedCardMask[clickedCardIndex] = !this.clickedCardMask[clickedCardIndex];
  }

  onFlipAll(): void {
    this.clickedCardMask = Array(this.cards.length).fill(false);
  }

  @Output()
  delete = new EventEmitter<Card>();

  onCardDelete(card: Card): void {
    this.delete.emit(card);
  }
}
