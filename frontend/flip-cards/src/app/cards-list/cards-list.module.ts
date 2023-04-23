import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './cards-list.component';
import {CardModule} from "../card/card.module";



@NgModule({
    declarations: [
        CardsListComponent
    ],
    exports: [
        CardsListComponent
    ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class CardsListModule { }
