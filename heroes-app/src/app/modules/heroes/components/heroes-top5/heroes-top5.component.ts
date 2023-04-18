import { Component } from '@angular/core';
import { Hero } from '../../models/heroes';
import { HeroService } from '../../models/hero.service';

@Component({
  selector: 'app-heroes-top5',
  templateUrl: './heroes-top5.component.html',
  styleUrls: ['./heroes-top5.component.scss']
})
export class HeroesTop5Component {
  heroes: Hero[];

  constructor (heroService: HeroService) {
    this.heroes = heroService.heroes.sort(heroService.compare).slice(0,5);
  }
  
}
