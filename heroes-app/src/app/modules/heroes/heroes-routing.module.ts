import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesTop5Component } from './components/heroes-top5/heroes-top5.component';
import { HeroesAllComponent } from './components/heroes-all/heroes-all.component';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';
import { HeroEditComponent } from './components/hero-edit/hero-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'top5', pathMatch: 'full'},
  { path: 'top5', component: HeroesTop5Component},
  { path: 'all', component: HeroesAllComponent},
  { path: 'edit/:heroId', component: HeroEditComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
