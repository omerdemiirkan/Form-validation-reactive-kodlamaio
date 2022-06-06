import { CategoryReactComponent } from './common/categories/category-react/category-react.component';

import { ProductComponent } from './components/pages/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/pages/product/product-add/product-add.component';
import { ProductAddReactComponent } from './components/pages/product/product-add-react/product-add-react.component';

const routes: Routes = [
 
  {path:"", pathMatch:"full" , component:ProductComponent},
  {path:"product/:id",  component:ProductComponent},
  {path:"product",  component:ProductAddComponent},
  {path:"product-add-2",  component:ProductAddReactComponent},
  {path:"category-react",  component:CategoryReactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
