import {Observable} from "rxjs";
import {InjectionToken} from "@angular/core";
import {Card} from "../models/Card";

export const ICardsApiServiceToken = new InjectionToken('ICardsApiServiceToken');
export interface ICardsApiService {
  add(card: Card): Observable<void>;
  getAll(): Observable<Card[]>;
  delete(id: string): Observable<void>;
}
