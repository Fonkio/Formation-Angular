import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router'
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';



const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: ProductDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
