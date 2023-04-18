import { Injectable } from '@angular/core';
import { Hero } from './heroes';
import { HEROES_MOCK } from '../mocks/heroes.mock';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = HEROES_MOCK;
  constructor() { }

  compare( a: Hero, b: Hero ) {
    return b.id - a.id;
  }

  findById(id: number) : Hero {
    return this.heroes.filter(h => h.id == id)[0];
  }
}
