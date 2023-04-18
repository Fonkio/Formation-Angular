import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { HeroesAllComponent } from './components/heroes-all/heroes-all.component';
import { HeroesTop5Component } from './components/heroes-top5/heroes-top5.component';
import { HeroViewComponent } from './components/hero-view/hero-view.component';
import { HeroEditComponent } from './components/hero-edit/hero-edit.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    HeroesHomeComponent,
    HeroesAllComponent,
    HeroesTop5Component,
    HeroViewComponent,
    HeroEditComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
