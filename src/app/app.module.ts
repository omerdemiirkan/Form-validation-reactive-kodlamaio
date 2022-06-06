import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ListboxModule} from 'primeng/listbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './common/navi/navi.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { CategoriesComponent } from './common/categories/categories.component';
import {HttpClientModule} from "@angular/common/http"
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProductComponent } from './components/pages/product/product.component';
import {CardModule} from 'primeng/card';
import { ProductAddComponent } from './components/pages/product/product-add/product-add.component';
import {InputTextModule} from 'primeng/inputtext';
import { VatPipe } from './pipes/vat.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CategoryPipe } from './pipes/category.pipe';
import { ProductAddReactComponent } from './components/pages/product/product-add-react/product-add-react.component';
import { CategoryReactComponent } from './common/categories/category-react/category-react.component';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CategoriesComponent,
    ProductComponent,
    ProductAddComponent,
    VatPipe,
    FilterPipe,
    CategoryPipe,
    ProductAddReactComponent,
    CategoryReactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    ListboxModule,
    HttpClientModule,
    ListboxModule,
    FormsModule,
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
