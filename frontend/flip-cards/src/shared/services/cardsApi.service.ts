import {ICardsApiService} from "../interfaces/ICardsApiService";
import {Card} from "../models/Card";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

const host = 'http://localhost:3000';


@Injectable({providedIn: 'root'})
export class CardsApiService implements ICardsApiService {
  constructor(private httpClient: HttpClient) {
  }
  add(card: Card): Observable<void> {
    return this.httpClient.post<void>(host, card);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${host}/${id}`);
  }

  getAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(host);
  }

  edit(card: Card): Observable<void> {
    return this.httpClient.put<void>(host, card);
  }
}
