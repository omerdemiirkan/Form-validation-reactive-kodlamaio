import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/products';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-product-add-react',
  templateUrl: './product-add-react.component.html',
  styleUrls: ['./product-add-react.component.css'],
  providers:[CategoryService,ProductService]
})
export class ProductAddReactComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private categoryService:CategoryService, private productService:ProductService) { }

  productAddForm:FormGroup

  product:Product=new Product()
  categories:Category[]

  createProductAddForm(){
    this.productAddForm=this.formBuilder.group({
      name:["",Validators.required],
      unitPrice:["",Validators.required],
      description:["",Validators.required],
      categoryId:["",Validators.required],
    })
  }

  ngOnInit(): void {
    this.createProductAddForm()
    this.getCategory()
  }
  getCategory(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    })
  }
  add(){
    if(this.productAddForm.valid){
      this.product=Object.assign({},this.productAddForm.value)
    }
    this.productService.addProduct(this.product).subscribe(data=>{
      alert(data.name +"başarılıyla eklendi")
    })
  }
 

}
