import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TemplateSyntaxComponent } from './pages/template-syntax/template-syntax.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { canActivateChildProduct } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'template-syntax', component: TemplateSyntaxComponent},
  { path: 'products', canActivateChild: [canActivateChildProduct], loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
