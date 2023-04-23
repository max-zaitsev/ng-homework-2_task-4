import {ICardsApiService} from "../interfaces/ICardsApiService";
import {Card} from "../models/Card";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class CardsMockApiService implements ICardsApiService {

  cards: Card[] = [
    {
      id: '1',
      name: 'Переменная',
      description: 'Контейнер для хранения данных в программе, который может хранить любой тип данных, включая числа, строки, объекты и функции.',
    },
    {
      id: '2',
      name: 'Функция',
      description: 'Блок кода, который можно вызвать из другого места в программе, чтобы выполнить определенную задачу.',
    },
    {
      id: '3',
      name: 'Метод',
      description: 'Функция, которая связана с объектом и может изменять его состояние или возвращать значение.',
    },
    {
      id: '4',
      name: 'Объект',
      description: 'Совокупность данных и методов, которые работают вместе для представления конкретной сущности или понятия.',
    },
    {
      id: '5',
      name: 'Массив',
      description: 'Упорядоченный список значений, которые можно хранить в переменной.',
    },
    {
      id: '6',
      name: 'Цикл',
      description: 'Конструкция языка программирования, которая позволяет повторять определенный блок кода несколько раз.',
    },
    {
      id: '7',
      name: 'Условный оператор',
      description: 'Конструкция языка программирования, которая позволяет выполнить определенный блок кода только если определенное условие истинно.',
    },
    {
      id: '8',
      name: 'DOM',
      description: 'Объектная модель документа (Document Object Model) - это стандартный способ представления HTML-документов в виде древовидной структуры, которая может быть изменена с помощью JavaScript.',
    },
    {
      id: '9',
      name: 'Обработчик событий',
      description: 'Функция, которая вызывается при наступлении определенного события в браузере, например, щелчок мыши или нажатие клавиши.',
    },
    {
      id: '10',
      name: 'AJAX',
      description: 'Технология, которая позволяет обновлять содержимое веб-страницы без перезагрузки всей страницы. AJAX использует JavaScript для отправки запросов на сервер и получения ответов в формате XML или JSON.',
    },
  ]
  ;
  add(Card: Card): Observable<void> {
    this.cards.push(Card);
    return of(undefined);
  }

  getAll(): Observable<Card[]> {
    return of(this.cards);
  }

  delete(id: string): Observable<void> {
    this.cards = this.cards.filter(card => card.id !== id);
    return of(undefined);
  }

  edit(card: Card): Observable<void> {
    this.cards = this.cards.map(c => c.id === card.id ? card : c);
    return of(undefined);
  }
}
