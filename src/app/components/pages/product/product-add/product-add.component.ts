import { CategoryService } from 'src/app/services/category.service';
import { Product } from './../../../../models/products';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddComponent implements OnInit {

  model:Product= new Product();

  categories: Category[];


  constructor(private categoryService:CategoryService, private productService:ProductService) { }


  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    })
  }
add(form:NgForm){

  this.productService.addProduct(this.model).subscribe(data=>{
    alert(data.name +"başarılıyla eklendi")
  })

}
}
