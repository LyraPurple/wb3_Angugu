import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pizza } from '../models/pizza';

export class FakeApi implements InMemoryDbService {
  createDb(): Object {
    const pizzas: Pizza[] = [
      { id: 1, name: 'Reine', price: 12.99, image: '01.jpg' },
      { id: 2, name: '4 fromages', price: 13.99, image: '02.jpg' },
      { id: 3, name: 'Orientale', price: 11.99, image: '03.jpg' },
      { id: 4, name: 'Cannibale', price: 9.99, image: '04.jpg' }
    ];

    return {
      pizzas: pizzas,
      total: pizzas.length
    };
  }
}
