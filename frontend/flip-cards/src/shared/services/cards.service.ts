import {Card} from "../models/Card";
import {Inject, Injectable} from "@angular/core";
import {ICardsApiService, ICardsApiServiceToken} from "../interfaces/ICardsApiService";

@Injectable({providedIn: 'root'})
export class CardsService {
  constructor(@Inject(ICardsApiServiceToken) public cardsService: ICardsApiService) {
  }

  private _cards: Card[] = [];

  addCard(card: Card): void {
    this.cardsService.add(card).subscribe(() => {
      this.initialize();
    });
  }

  initialize(): void {
    this.cardsService.getAll().subscribe(cards => {
      this._cards = cards;
    });
  }

  get cards(): Card[] {
    return this._cards;
  }

  delCard(card: Card): void {
    if (card.id === undefined) {
      throw new Error('Card id is undefined');
    }
    this.cardsService.delete(card.id).subscribe(() => {
      this.initialize();
    });
  }
}
