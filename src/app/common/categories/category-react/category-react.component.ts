import { Category } from 'src/app/models/category';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-react',
  templateUrl: './category-react.component.html',
  styleUrls: ['./category-react.component.css'],
  providers:[CategoryService]
})
export class CategoryReactComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private categoryService:CategoryService, 
    ) { }

    categoryAddForm:FormGroup

    category:Category=new Category()
    categories:Category[]
  

  createCategoryAddForm(){
    this.categoryAddForm=this.formBuilder.group({
      name:["",Validators.required],
      id:["",Validators.required],
      description:["",Validators.required],
      
    })
  }

  ngOnInit(): void {
    this.createCategoryAddForm()
    this.getCategory()
    
  }
  getCategory(){
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data
    })
  }
  add(){
    if(this.categoryAddForm.valid){
      this.category=Object.assign({},this.categoryAddForm.value)
    }
    this.categoryService.addCategory(this.category).subscribe(data=>{
      console.log(data)        
      alert(data.name +"başarılıyla eklendi")
      location.reload()
    })
  }
 

}
