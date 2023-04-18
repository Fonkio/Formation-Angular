import { Component } from '@angular/core';
import { Hero } from '../../models/heroes';
import { HeroService } from '../../models/hero.service';

@Component({
  selector: 'app-heroes-all',
  templateUrl: './heroes-all.component.html',
  styleUrls: ['./heroes-all.component.scss']
})
export class HeroesAllComponent {
  heroes: Hero[];

  constructor (heroService: HeroService) {
    this.heroes = heroService.heroes;
  }

}
