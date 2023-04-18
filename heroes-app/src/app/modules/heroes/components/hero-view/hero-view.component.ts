import { Component, Input } from '@angular/core';
import { Hero } from '../../models/heroes';

@Component({
  selector: 'app-hero-view',
  templateUrl: './hero-view.component.html',
  styleUrls: ['./hero-view.component.scss']
})
export class HeroViewComponent {

  @Input()
  mode!: string;
  @Input()
  hero!: Hero;

isSimpleMode(): boolean {
  return this.mode == 'simple';
}

}
