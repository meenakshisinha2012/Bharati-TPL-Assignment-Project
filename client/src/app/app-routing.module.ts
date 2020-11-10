import { AddProductComponent } from './add-product/add-product.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'product-dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent},
  { path: 'product-dashboard', component: ProductDashboardComponent},
  { path: 'add-product', component: AddProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
