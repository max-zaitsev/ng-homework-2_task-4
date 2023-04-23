import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../../shared/models/Card";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
  @Input()
  card!: Card;

  @Input()
  flipped = false;

  @Output()
  delete = new EventEmitter<Card>();

  onDelete(): void {
    this.delete.emit(this.card);
  }
}
